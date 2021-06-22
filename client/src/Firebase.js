import firebase from "firebase/app";
import "firebase/auth";

function init() {

  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyBu4QAmuyY-jrGIk77Ku6K7yENCzfuwLiw",
      authDomain: "hackaton-ibex.firebaseapp.com",
      databaseURL: "https://hackaton-ibex-default-rtdb.firebaseio.com",
      projectId: "hackaton-ibex",
      storageBucket: "hackaton-ibex.appspot.com",
      messagingSenderId: "772788188126",
      appId: "1:772788188126:web:3318670e6796c154abe34f"
    })
  } else {
    firebase.app(); // if already initialized, use that one
  }


}

export default init;