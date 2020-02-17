import React from 'react';
import NavMenu from './components/Menu'
import { Button, Icon } from 'semantic-ui-react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import FeedingLog from './components/FeedingLog'
import './app.css'
import firebase from 'firebase'
import withFirebaseAuth from 'react-with-firebase-auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
}


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      me: null
    };
  }

  componentDidMount() {
      this.setState({ me: firebase.auth().currentUser })
  }

  render() {
    const {
      user, 
      signOut, 
      signInWithGoogle
    } = this.props

    return (
      <div className="App">
        <Router>
            <NavMenu user={user} signOut={signOut} />
            <Route exact path = '/'>
              {user === null ?
                <div className='landing-page'>
                  <h1>Welcome to Feeding Tracker</h1>
                  <Button onClick={signInWithGoogle} animated>
                    <Button.Content visible>Sign In With You Google Account</Button.Content>
                    <Button.Content hidden>
                      <Icon name='arrow right' />
                    </Button.Content>
                  </Button>
                </div>
              :
                <Redirect to='/feedinglog' />
              }
            </Route>
            <Route path='/feedinglog'
              render={FeedingLog}
            />
            <Route path='/newfeeding'>
              New Feeding
            </Route>
            <Route path='/notes'>
              Notes
            </Route>
        </Router>
      </div>
    );
  } 
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
