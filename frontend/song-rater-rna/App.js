import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Task  from './components/Task';


export default function App(){
  return (
    <View style={styles.container}>
      <Text>Test, Jasmine</Text>
      {/* <StatusBar style='auto'/> */}
    </View>
  );
}
function SongRatingSystem(){ /* we need to change from class components to functional components
                                we also need to change the axios stuff to fetch. */
  const handleDelete = (item) => {
    fetch(`http://localhost:8000/api/songs/${item.id}` , {method: 'DELETE' })
      .then(() => this.setState({status: 'Delete successful'}));
  }
  const handleSubmit = (item) => {
    if(item.id) {
      fetch('http://localhost:8000/api/songs/${item.id}/', {method: 'PUT'})
      .then(response => response.json())
      .then(data => this.setState({ id: item.id }));
    } 
    {/* <button
      className="btn btn-primary"
      onClick={() => this.updateItem(c.id, c.item, this.handleChangePacked(c.packed))}>
      Update Item
    </button>  */}
    fetch('https://reqres.in/api/posts', {method: 'POST'})
    .then(response => response.json())
    .then(data => this.setState({id: data.id}));
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


  createItem = () => {
    const item = { title: "", artist: "", genre: ""};
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

}


componentDidMount() {
  // Simple DELETE request with fetch
  fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'DELETE' })
      .then(() => this.setState({ status: 'Delete successful' }));
}



////////
const handleRemoveItem = () => {
  const items = list;
  if (items.length > 0) {
    const lastIndex = items.length - 1;
    setList(items.filter((item, index) => index !== lastIndex));
  }
};

return (
  <main className="content">
    <Text className="text-white text-uppercase text-center my-4">Song Rater app</Text>
    <View className="row ">
      <View className="col-md-6 col-sm-10 mx-auto p-0">
        <View className="card p-3">
          <View className="">
            <button onClick={this.createItem} className="btn btn-primary">
              Add Song
            </button>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Tag1">Sort by Song Name A-Z</option>
              <option value="Tag2">Sort by Genre</option>
              <option value="Tag3">Sort by Artist</option>
            </select>
          </View>
          <ul className="list-group">
            {this.renderItems()}
          </ul>
        </View>
      </View>
    </View>
    {this.state.modal ? (
      <Modal
        activeItem={this.state.activeItem}
        toggle={this.toggle}
        onSave={this.handleSubmit}
      />
    ) : null}
  </main>
);




const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#E8EAED',
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  items: {},
});

