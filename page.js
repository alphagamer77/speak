// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyANFV5-KKHaI-zGrrWSJZHa5zBt5iXgsg8",
    authDomain: "speakout-4642e.firebaseapp.com",
    databaseURL: "https://speakout-4642e-default-rtdb.firebaseio.com",
    projectId: "speakout-4642e",
    storageBucket: "speakout-4642e.appspot.com",
    messagingSenderId: "735262684508",
    appId: "1:735262684508:web:e25b999f2b72f9ae6dfd99"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("welcome.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();
