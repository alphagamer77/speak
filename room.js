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

  user_name = localStorage.getItem("Username");
  document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

  function addroom() {
         room_name = document.getElementById("room_name").value;

         firebase.database().ref("/").child(room_name).update({
              purpose: "Adding Room Name"
        });

        localStorage.setItem("Roomname",room_name);
    
        window.location = "page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
        console.log("room_name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();
function redirectToroomname(name){
  console.log(name);
  localStorage.setItem("Roomname",name);
  window.location = "page.html";
}
function logout() {
  localStorage.removeItem("Username");
  localStorage.removeItem("Roomname");
  window.location = "welcome.html";
}