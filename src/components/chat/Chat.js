import React, { useState, useEffect } from 'react';
import './Chat.css';
import firebase from 'firebase';

import Message from '../message/Messages'
import SendIcon from '@material-ui/icons/Send';

import db from '../../Firebase';


function Chat({userName}) {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'asc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()));
    })
  }, [])


  // function add new message
  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div>
      
    {
      messages.map((message, id) => (
        <Message key={id} user={userName} message={message}/>
      ))
    }


    <form className='form_container'>
      <input
        className='input_message'
        placeholder='Enter a message ...'
        value={input}
        onChange={event => setInput(event.target.value) }
      />
      <button className='btn_send' type='submit'disabled={!input} onClick={sendMessage} ><SendIcon /></button>
    </form>

    </div>
  );
}

export default Chat;
