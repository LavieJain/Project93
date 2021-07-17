//YOUR FIREBASE LINKS
 // Your web app's Firebase configuration
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
room_name=localStorage.getItem("room_name");


function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,like:0
      });
      document.getElementById("msg").value= "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name=message_data['name'];
         message=message_data['message'];
         like=message_data['like'];
         name_with_tag="<h4> "+name +"<img class='user_tick' src='tick.png'> </h4>";
         message_with_tag="<h4 class='message_h4'>"+message +"</h4>";
         like_button="button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclik='updateLike(this.id)'>";
      span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+ "</span> </button> <hr>";
row=name_with_tag+message_with_tag+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      }
 }
 );  }
 ); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="kwitter.html";
}