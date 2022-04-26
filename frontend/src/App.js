import React from "react";
// Import the CustomModal that we created in Modal.js.
import Modal from "./components/Modal";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // viewCompleted: false,
      value: "Tag1",
      activeItem: {
        title: "",
        artist: "",
        genre: "",
      },
    songraterList: [],
    };
  }
  
  componentDidMount() {
    this.refreshList();
  }
  
  refreshList = () => {
    axios
      .get("http://localhost:8000/api/songs/")
      .then((res) => this.setState({ songraterList: res.data }))
      .catch((err) => console.log(err));
  };

  // displayCompleted = (status) => {
  //   if (status) {
  //     return this.setState({ viewCompleted: true });
  //   }
  //   return this.setState({ viewCompleted: false });
  // };

  // renderTabList = () => {
    // return (
    //   <div className="">
    //     {/* Complete view active */}
    //     {/* <span
    //       onClick={() => this.displayCompleted(true)}
    //       className={this.state.viewCompleted ? "active" : ""}
    //     >
    //       Complete
    //     </span> */}
    //     {/* Incomplete view active. */}
    //     {/* <span
    //       //  ... otherwise, set the Incomplete view to active.
    //       onClick={() => this.displayCompleted(false)}
    //       className={this.state.viewCompleted ? "" : "active"}
    //     >
    //       Incomplete
    //     </span> */}
    //     <span
    //       onClick={() => this.displayCompleted(true)}
    //     >
    //       Song List
    //     </span>
    //   </div>
    // );
  // };
  sortByAlph = (list) => {
    return list.sort((a,b) => {
      if ( a.title < b.title ) { return -1; }
      if ( a.title > b.title ) { return 1; }
      return 0;
    })
  };

  sortByGenreAlph = (list) => {
    return list.sort((a,b) => {
      if ( a.genre < b.genre ) { return -1; }
      if ( a.genre > b.genre ) { return 1; }
      return 0;
    })
  };

  sortByArtistAlph = (list) => {
    return list.sort((a,b) => {
      if ( a.artist < b.artist ) { return -1; }
      if ( a.artist > b.artist ) { return 1; }
      return 0;
    })
  };

  handleSort = (value) => {
    // eslint-disable-next-line
    switch(value){
      case "Tag1":
        return this.sortByAlph(this.state.songraterList);
      case "Tag2":
        return this.sortByGenreAlph(this.state.songraterList);
      case "Tag3":
        return this.sortByArtistAlph(this.state.songraterList);
    }
  };

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }
  renderItems = () => {
    // const { viewCompleted } = this.state;
    // const newItems = this.state.songraterList.filter(
    //   (item) => item.completed === viewCompleted
    // );
    const newItems = this.handleSort(this.state.value);
    return newItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          // className={`songrater-title mr-2 ${
          //   this.state.viewCompleted ? "completed-songrater" : ""
          // }`}
          // title={item.description}
        >
          {item.title}
        </span>
        {/* UI for editing and deleting items and their respective events. */}
        <span>
          <button
            onClick={() => this.editItem(item)}
            className="btn btn-secondary mr-2"
          >
            {" "}
            Edit{" "}
          </button>
          <button
            onClick={() => this.editItem(item)}
            className="btn btn-secondary mr-2"
          >
            {" "}
            Rate{" "}
          </button>
          <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-danger"
          >
            Delete{" "}
          </button>
        </span>
      </li>
    ));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    this.toggle();

    if (item.id) {
      axios
        .put(`http://localhost:8000/api/songs/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
    }

    axios
      .post(`http://localhost:8000/api/songs/`, item)
      .then((res) => this.refreshList());
  };

  handleDelete = (item) => {
    axios
      .delete(`http://localhost:8000/api/songs/${item.id}`)
      .then((res) => this.refreshList());
  };

  createItem = () => {
    const item = { title: "", artist: "", genre: ""};
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  render() {
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">Song Rater app</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button onClick={this.createItem} className="btn btn-primary">
                  Add Song
                </button>
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="Tag1">Sort by Song Name A-Z</option>
                  <option value="Tag2">Sort by Genre</option>
                  <option value="Tag3">Sort by Artist</option>
                </select>
              </div>
              <ul className="list-group">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}
export default App;
