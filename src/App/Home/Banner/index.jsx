import React from 'react';
import * as FireBase from "firebase";

import View from './View';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.messagesRef = null;
    this.app = null;
    this.input = null;
    this.nodeName = null;
    this.nodeContent = null;
    this.state = {
      usedName: false,
      userName: 'anonymous',
      user: null,
      messages: [],
      message: null,
    };

    this.setMessage = this.setMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.setUserName = this.setUserName.bind(this);
    this.submitUserName = this.submitUserName.bind(this);
    this.getMessage = this.getMessage.bind(this);
    this.setInput = this.setInput.bind(this);
    this.setNodeName = this.setNodeName.bind(this);
    this.setNodeContent = this.setNodeContent.bind(this);
  }

  setUserName(e) {
    this.setState({userName: e.target.value})
  }

  setInput(node) {
    this.input = node;
  }

  setNodeContent(node) {
    this.nodeContent = node;
  }

  setNodeName(node) {
    this.nodeName = node;
  }

  connect() {
    const config = {
      apiKey: "AIzaSyDqYIXE_g1H5Ta4BseOSTZt0ZcW39jikQ4",
      authDomain: "chatex-65bbb.firebaseapp.com",
      databaseURL: "https://chatex-65bbb.firebaseio.com",
      projectId: "chatex-65bbb",
      storageBucket: "chatex-65bbb.appspot.com",
      messagingSenderId: "885602232602"
    };

    this.app = FireBase.initializeApp(config);

    FireBase.database().ref('messages').limitToLast(50).on('child_added', this.getMessage);
    this.messagesRef = FireBase.database().ref('messages');

    FireBase.auth().signInAnonymously().catch(error => {
      console.log('error', error);
    });
    FireBase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({user});
      } else {
        console.log('auth failed !')
      }
    });
  }

  setMessage(e) {
    this.setState({message: e ? e.target.value : ''});
  }

  submitUserName() {
    this.nodeName.style.display = 'none';
  }

  getMessage(data) {
    const val = data.val();
    const messages = this.state.messages;
    const message = {name: val.name, text: val.text, key: data.key};
    messages.push(message);
    this.setState({messages});
    this.nodeContent.scrollTop = this.nodeContent.scrollHeight - this.nodeContent.clientHeight;
  }

  sendMessage() {
    if (this.state.message) {
      this.input.value = '';
      this.messagesRef.push({
        name: this.state.userName,
        text: this.state.message,
      }).then(() => {
        this.setMessage();
      }).catch(error => {
        console.error('Error writing new message to Firebase Database', error);
      });
    }
  }

  componentDidMount() {
    this.connect();
    this.input.addEventListener('keydown', (event) => {
      const key = event.which || event.keyCode;
      if (key === 13) {
        this.sendMessage();
      }
    })
  }

  render() {
    return (
      <View
        usedName={this.state.usedName}
        messages={this.state.messages}
        message={this.state.message}
        setMessage={this.setMessage}
        sendMessage={this.sendMessage}
        setInput={this.setInput}
        setUserName={this.setUserName}
        submitUserName={this.submitUserName}
        setNodeName={this.setNodeName}
        setNodeContent={this.setNodeContent}
      />
    );
  }
}

export default Banner;