var firebaseConfig = {
    apiKey: "AIzaSyDFlZ5v5djxS0xA0_RGHEb5Wpi1xwejGoE",
    authDomain: "lets-chat-app-60589.firebaseapp.com",
    databaseURL: "https://lets-chat-app-60589-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-60589",
    storageBucket: "lets-chat-app-60589.appspot.com",
    messagingSenderId: "821541831959",
    appId: "1:821541831959:web:a31b4e5ff0ef8d3c5e6352"
  };
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name")
  document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
  
  function addRoom(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
    purpose: "Add Room Name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
  }
    function getData() {
        firebase.database().ref("/").on('value',
    function(snapshot) {
        document.getElementById("output").innerHTML ="";
        snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    console.log(Room_names);
    row="<div class='Room_names' id="+div+" onclick='redirectToRoomName(this.id)'> #"+room_name+" </div>"
  });
});
    }
    getData();
    function redirectToRoomName(name){
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }

