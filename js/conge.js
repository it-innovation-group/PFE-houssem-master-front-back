function add() {


    {
        ch1 = document.f.T1.value;
        ch2 = document.f.T2.value;
        ch3 = document.f.T3.value;
        ch4 = document.f.T4.value;
        ch5 = document.f.T5.value;
        
    
        if (isNaN(ch1) == false || ch1 == "") {
          alert("vérifier votre Nom et Prénom ");
          return false;
        }
        p = ch2.indexOf("@", ch2);
        ch = ch2.substring(0, p - 1);
        if (isNaN(ch) == false && ch5.indexOf(".", ch2) == -1) {
          alert("Email invalide!");
          return false;
        }
        
       
       
        if (ch3 == "" || ch3.length != 8 || isNaN(ch3)) {
            alert("vérifier votre numéro de téléphone");
            return false;
          }

        if (isNaN(ch4) == false || ch4 == "") {
            alert("vérifier le nombre de  jour");
            return false;
        
      }
      
      if (isNaN(ch5) == false || ch4 == "") {
        alert("vérifier cette requete  ");
        return false;
    
  }

 
  
    var url = "http://127.0.0.1:3000/conges";
    var data = {};
    data.name = document.getElementById("name").value;
    data.email = document.getElementById("email").value;
    data.tel = document.getElementById("tel").value;
    data.nbr = document.getElementById("nbr").value;
    data.reqt = document.getElementById("reqt").value;
     var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.onload = function () {
      var conges = JSON.parse(xhr.responseText);
      if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(conges);
        alert("La demande de congé a été enregistrée");
        location.replace("home.html");
      } else {
        alert(conges.message);
        console.table(conges);
      }
    };
    xhr.send(json);
  }
}

