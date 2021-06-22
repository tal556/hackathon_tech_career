import firebase from "firebase/app";
import "firebase/auth";

function SignIn() {
  const signInWithEmailAndPass = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword('email', 'password')
      .then((userCredentials) => {
        // Sign in worked
      })
      .catch((error) => {
        // error.code, error.message
      });
  };
  return (
    <div>
      <button onClick={signInWithEmailAndPass}>Sign In With Google</button>
    </div>
  );
}

export default SignIn;
