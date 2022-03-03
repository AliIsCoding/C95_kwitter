const firebaseConfig = {
      apiKey: "AIzaSyCNu5Ftsj-bC8T7tRUxkkM8sdr1FCxO5cs",
      authDomain: "kwitterdatabase-8aed5.firebaseapp.com",
      databaseURL: "https://kwitterdatabase-8aed5-default-rtdb.firebaseio.com",
      projectId: "kwitterdatabase-8aed5",
      storageBucket: "kwitterdatabase-8aed5.appspot.com",
      messagingSenderId: "234042924467",
      appId: "1:234042924467:web:9d555f8f623104ac10bfc6"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);


function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}