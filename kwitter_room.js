
const firebaseConfig = {
      apiKey: "AIzaSyDPK0uBrVlDchZxDD0tMdPNZL3DKUz2y0o",
      authDomain: "kwitter-5397d.firebaseapp.com",
      databaseURL: "https://kwitter-5397d-default-rtdb.firebaseio.com",
      projectId: "kwitter-5397d",
      storageBucket: "kwitter-5397d.appspot.com",
      messagingSenderId: "4508235919",
      appId: "1:4508235919:web:9e28e73cb2de6173a498fa"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      document.getElementById("output").innerHTML;
            Room_names = childKey;
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" +Room_names+ "</div><hr>"
            document.getElementById("output").innerHTML +=row;

      //End code
      });});}
getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name"});
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}

function redirectToRoomName(room_name)
      {
console.log(room_name);
            localStorage.setItem("room_name", room_name);
            window.location = "kwitter_page.html";

      }


