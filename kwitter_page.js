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

  user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name"); 
   
   function send() 
   { 
     msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 });
    document.getElementById("msg").value = ""; 
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot)
 {childKey  = childSnapshot.key;
    childData = childSnapshot.val();
    //firebase_message_id = childKey;//
    //message_data = childData//
if(childKey != "purpose")
{
    
}
name= message_data['name'];
message = message_data['message'];
like = message_data['like']
name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button ="<button class= 'btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class 'glyphicon glyphicon-thumbs-up'>Like: "+Like+"</span> </button><hr>";
   document.getElementById("output").innerHTML;
         Room_names = childKey;
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" +Room_names+ "</div><hr>"
         document.getElementById("output").innerHTML +=row;

   //End code
   });});}
getData();

function updateLike(message_id)
{
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  update_likes = Number(likes)+1;
  firebase.database().ref(room_name).child(message_id).update({
    like : update_likes
  });
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("kwitter.html");
}