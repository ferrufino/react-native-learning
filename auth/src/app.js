import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

import { Header, Button, CardSection, Spinner } from './components/common';

class App extends Component {
	state = { loggedIn: null };

	componentWillMount(){

		firebase.initializeApp({
		    apiKey: 'AIzaSyA4pPv94ZKVVcofyUgOMSGf8kQp6c00Qz8',
		    authDomain: 'auth-cadd8.firebaseapp.com',
		    databaseURL: 'https://auth-cadd8.firebaseio.com',
		    projectId: 'auth-cadd8',
		    storageBucket: 'auth-cadd8.appspot.com',
		    messagingSenderId: '717313210945'
  		});

  		firebase.auth().onAuthStateChanged((user) => {
  			if (user) {
  				this.setState({ loggedIn: true});
  			}else{
  				this.setState({ loggedIn: false});
  			}
  		});
	}

	renderContent() {


		switch (this.state.loggedIn) {

			case true:
				return(
					<CardSection>
						<Button btnPressed={() => firebase.auth().signOut()}>Log Out</Button>
					</CardSection>

				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />;
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;