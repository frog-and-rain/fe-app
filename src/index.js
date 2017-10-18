import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as FireBase from "firebase";

const config = {
  apiKey: "AIzaSyDqYIXE_g1H5Ta4BseOSTZt0ZcW39jikQ4",
  authDomain: "chatex-65bbb.firebaseapp.com",
  databaseURL: "https://chatex-65bbb.firebaseio.com",
  projectId: "chatex-65bbb",
  storageBucket: "chatex-65bbb.appspot.com",
  messagingSenderId: "885602232602"
};

FireBase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
