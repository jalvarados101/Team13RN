# Running Team 13's Song Rater App (React Native Edition!)

Our Django backend & Firebase frontend can be found at the following URLs:
* <https://song-jab.herokuapp.com/api/>
* <https://song-jabber-2d31b.firebaseapp.com/>

## Running the Django backend

```bash
# Open a terminal and go to Team13 project directory.
cd Team13

# Run the Python virtual environment.
python3 -m venv django-react

# Once we have created the virtual environment, to enter it we have to source it.
# For Mac users (remove .fish for a different shell).
source django-react/bin/activate.fish
# For Windows users.
./django-react/bin/activate

# Install Django and the rest framework in your virtual environment.
pip3 install django
pip3 install djangorestframework django-cors-headers

# Go to the backend project directory.
cd backend

# Run it.
python3 manage.py runserver
```

In <localhost:8000>, the backend should be running.

## Running the React Native frontend

(**NOTE:** We unfortunately could not get our app to run in full functionality within the iOS simulator, but please do follow the instructions outlined below to run the app for yourself!)

For macOS, install node.js and npm via homebrew using `brew install node`. Use
`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
to install [homebrew](https://brew.sh/) if you do not have it yet.

For Windows, follow the
[Windows install instructions on the node.js page](https://nodejs.org/en/download/).

It should not be necessary, but if you get an error, you can run the
create-react-app command to install Facebook's library for creating React apps.
It is nice to do it globally, i.e., using the `-g` flag.

```shell
npm install -g create-react-app
```

Next, run the following commands to install the proper packages and start up the frontend.

```shell
cd frontend
cd song-rater-rna
npm i
npm start (or expo start)
```

If you go to <localhost:3000>, you will see the app.

Thank you!
