var firebaseConfig = {
      apiKey: "AIzaSyCm0DaNvhGbAuuPd_VkzXO4rb6-9Rdc7e4",
      authDomain: "kwitter-30b95.firebaseapp.com",
      databaseURL: "https://kwitter-30b95-default-rtdb.firebaseio.com",
      projectId: "kwitter-30b95",
      storageBucket: "kwitter-30b95.appspot.com",
      messagingSenderId: "806561965868",
      appId: "1:806561965868:web:5804db9a86fee2d26b6e89"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML ="Welcome "+user_name +"!";
     function addRoom(){
room_names=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name "
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -",+Room_names);
row = "<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);              
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="kwitter.html";
}