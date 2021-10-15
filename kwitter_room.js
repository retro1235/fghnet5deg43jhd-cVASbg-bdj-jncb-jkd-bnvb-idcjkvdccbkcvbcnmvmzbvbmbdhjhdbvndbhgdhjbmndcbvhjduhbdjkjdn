
var firebaseConfig = {
  apiKey: "AIzaSyAEiFqtQDZaWc2SJ8a46qTrzutPyO-FmVo",
  authDomain: "kwitter-901c3.firebaseapp.com",
 databaseURL: "https://kwitter-901c3-default-rtdb.firebaseio.com",
  projectId: "kwitter-901c3",
 storageBucket: "kwitter-901c3.appspot.com",
 messagingSenderId: "376147091442",
  appId: "1:376147091442:web:e4f9f507aaa3dc6684956b",
 measurementId: "G-FVPDF5K7VZ" 
         };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function addRoom(){

 room_name = document.getElementById("room_name").value;
 
 firbase.database().ref("/").child(room_name).update({
   purpose: "adding room name"

 });
 localStorage.setItem("room_name", room_name);


 window.location = "kwitter_page.html"
}