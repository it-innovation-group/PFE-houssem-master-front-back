function login() {
    var url = "http://127.0.0.1:3000/admins"; 
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value; 
    var xhr = new XMLHttpRequest(); 
    xhr.open("GET", url, true); 
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.onload = function () {
       var users = JSON.parse(xhr.responseText); 
      if (xhr.readyState == 4 && xhr.status == "200") {
        access = false;
        for (i = 0; i < users.length; i++) {
          if (users[i].email == email && users[i].password == password) {
            
            
             access = true;
          }
        }
         if (access) {
          location.replace("index.html");
          alert("welecome To leoni");
        } else {
          alert("Adresse d'administrateur ou mot de passe incorrect");
        }
      } else {
        alert("compte n'existe  pas");
      }
    };
    xhr.send();
  }
  