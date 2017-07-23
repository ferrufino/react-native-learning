import React, { Component  } from 'react';
import { Provider  } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm'; 
class App extends Component{
 componentWillMount() {
   const config = {
       apiKey: 'AIzaSyAmt9uj1qDrAKSiCIPElS8AOkd1pQnUBDA',
     authDomain:'manager-22e58.firebaseapp.com',
     databaseURL: 'https://manager-22e58.firebaseio.com',
       projectId: 'manager-22e58',
       storageBucket: 'manager-22e58.appspot.com',
       messagingSenderId: '160377097832'
     };
     firebase.initializeApp(config);
 }
 
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
      
    return (
      <Provider store={store}>
        <LoginForm /> 
     </Provider>
    );
  }
}

export default App;
