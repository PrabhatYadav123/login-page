
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBt017ISrcjmkUPCEDIIZ1SCgRtiJ0nMXQ",
    authDomain: "sign-in-form-9e349.firebaseapp.com",
    projectId: "sign-in-form-9e349",
    storageBucket: "sign-in-form-9e349.appspot.com",
    messagingSenderId: "861165611978",
    appId: "1:861165611978:web:c3742c646d5967963f7d33"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();

const signup=()=>{
  var email=document.getElementById("email1").value;
  var password=document.getElementById("password1").value;
  auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("error:"+ errorMessage);
    // ..
  });
}
const login=()=>{
  var email1=document.getElementById("email1").value;
  var password1=document.getElementById("password1").value;
auth.signInWithEmailAndPassword(email1, password1)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("error "+errorMessage);
  });
}
const signout=()=>{
  auth.signOut();
  alert("Signed Out")
}
auth.onAuthStateChanged((user)=>{
  if(user){
    var email=user.email;
    
    alert("Active User "+ email )

  }
  else{
    alert("No Active User")
  }
});