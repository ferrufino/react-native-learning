import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount(){
		 const config = {
		    apiKey: "AIzaSyAmt9uj1qDrAKSiCIPElS8AOkd1pQnUBDA",
		    authDomain: "manager-22e58.firebaseapp.com",
		    databaseURL: "https://manager-22e58.firebaseio.com",
		    projectId: "manager-22e58",
		    storageBucket: "manager-22e58.appspot.com",
		    messagingSenderId: "160377097832"
  		};
  		firebase.initializeApp(config);
	}


	render() {
		return (
			<Provider store={createStore(reducers)}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;

