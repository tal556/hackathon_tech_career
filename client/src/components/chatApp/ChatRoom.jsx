import React, { useEffect, useRef, useState } from 'react';
import ChatMessage from './ChatMessage'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import { Form, Input, Button, Select,message } from 'antd';
import "./ChatRoom.css"

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import init from '../../Firebase'

const posts = []

function ChatRoom() {
  init();
  const auth = firebase.auth();

  const [formValue,setFormValue] = useState("")
    // we will use this to scroll to bottom of chat on page-reload and after sending a message
    const dummy = useRef();
    console.log(dummy)
    var database = firebase.database();
    const scrollToBottom = () => {
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    var postListRef = firebase.database().ref('posts');
    postListRef.on('child_added', (data) => {
      const found = posts.find((item) => item.key === data.key);
      if(!found){
        posts.push({user: data.val().user,body:data.val().body,key:data.key})

      }
      console.log(posts.length)
    //  addCommentElement(postElement, data.key, data.val().text, data.val().author);
    });
    var recentPostsRef = firebase.database().ref('posts').limitToLast(100);

  // getting the message and sorting them by time of creation
  //const messagesRef = firestore.collection('messages');
  //const query = messagesRef.orderBy('createdAt', 'asc').limitToLast(25);

  //const [messages] = useCollectionData(query, {idField: 'id'});

  const sendMessage = async (e) => {
    e.preventDefault();
    // gets name, userID and pfp of logged in user
    const uid = auth.currentUser.uid;
    var userDataRef = firebase.database().ref('users/' + uid);
    userDataRef.on('value', (snapshot) => {
       const data = snapshot.val();
       const {name} = data;
       console.log(name);
      //  alert(name)
       var newPostRef = postListRef.push();
       newPostRef.set({
            user: name,
           body: formValue,
           createdAt: firebase.firestore.FieldValue.serverTimestamp(),
           uid: uid,
     //      photoURL: photoURL
       });
       
        
       
           // resetting form value and scrolling to bottom
           setFormValue('');
           dummy.current.scrollIntoView({ behavior: 'smooth' });
});


  
  }
    return (
        <div>
      <div className="msgsDiv">
        <h1>Tech-Chat</h1>
        <div className="msgCont">
   {/* we will loop over the message and return a
        ChatMessage component for each message */}
        {posts && posts.map(msg => <ChatMessage key={msg.key} message={msg.body} user={msg.user}/>)}
        <span ref={dummy}></span>
      

  
        </div>
         {/* Form to type and submit messages */}
      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Say something" />
        <button type="submit" disabled={!formValue}>send</button>
      </form>
      </div>
    </div>
    )
}

export default ChatRoom
