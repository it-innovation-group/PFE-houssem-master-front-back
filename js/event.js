function add(){

{
  ch1 = document.f.T1.value;
  ch2 = document.f.T2.value;
  ch3 = document.f.T3.value;
  ch4 = document.f.T4.value;
  ch5 = document.f.T5.value;
  ch6 = document.f.T6.value;
  

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
  
 
  if (isNaN(ch3) == false || ch3 == "") {
    alert("Vérifier le nom de l'événement");
    return false;
  }
  if (isNaN(ch4) == false || ch4 == "") {
      alert("Décrivez cet événement");
      return false;
  
}

if (isNaN(ch5) == false || ch5 == "") {
  alert("Choisissez un numéro");
  return false;

}
if (isNaN(ch6) == false || ch6 == "") {
  alert("Choisissez un numéro");
  return false;

}

}
{
 
  
    var url = "http://127.0.0.1:3000/events";
    var data = {};
    data.idee= document.getElementById("idee").value;
    data.email = document.getElementById("email").value;
    data.nameev = document.getElementById("nameev").value;
    data.descri = document.getElementById("descri").value;
    data.nbrep = document.getElementById("nbrep").value;
    data.nbreo = document.getElementById("nbreo").value;
     var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.onload = function () {
      var events = JSON.parse(xhr.responseText);
      if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(events);
        alert("Votre proposition est bien reçu");
        location.replace("home.html");
      } else {
        alert(events.message);
        console.table(events);
      }
    };
    xhr.send(json);
  }

}