import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDkLn5SVqfVwLM9_ZC7PznuJ2VSTOyIbT0",
  authDomain: "heap-overflow-s92n67.firebaseapp.com",
  projectId: "heap-overflow-s92n67",
  storageBucket: "heap-overflow-s92n67.appspot.com",
  messagingSenderId: "783709822291",
  appId: "1:783709822291:web:92a9a6826e8a566179d5a6",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    const uid = user.uid;
    console.log(user);
  } else {
    // User is signed out
    console.log("User signed out");
  }
});

QS("#SignUpButton").addEventListener("click", function (e) {
  createUserWithEmailAndPassword(
    auth,
    QS("#UsernameInput").value,
    QS("#PasswordInput").value
  )
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});

QS("#SignInButton").addEventListener("click", function (e) {
  signInWithEmailAndPassword(
    auth,
    QS("#UsernameInput").value,
    QS("#PasswordInput").value
  )
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});

QS("#SignOutButton").addEventListener("click", function (e) {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
});
