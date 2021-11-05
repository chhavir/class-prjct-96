function addUser()
{

    log_in_name= document.getElementById("user_name").value;
localStorage.setItem("user_name", log_in_name);
window.location="kwitter_room.html"

}
