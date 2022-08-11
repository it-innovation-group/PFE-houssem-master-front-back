function add() 
   
    {
      var url = "http://127.0.0.1:3000/admins";
      var data = {};
      data.username = document.getElementById("username").value;
      data.email = document.getElementById("email").value;
      data.password = document.getElementById("password").value;
      var json = JSON.stringify(data);
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
      xhr.onload = function () {
        var empls = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
          console.table(admins);
          alert("eplomyer added");
          location.replace("index.html");
        } else {
          alert(admins.message);
          console.table(admins);
        }
      };
      xhr.send(json);
    
  }
  