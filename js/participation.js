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
        alert("Choisissez votre poste");
        return false;
    
  }
  
  if (isNaN(ch5) == false || ch4 == "") {
    alert("Vérifier le nom de l'événement");
    return false;

}
if (f.D1.selectedIndex == 0) {
  alert("Vérifiez votre Type");
  return false;
}
}

{
  
    var url = "http://127.0.0.1:3000/partis";
    var data = {};
    data.name = document.getElementById("name").value;
   data.email = document.getElementById("email").value;
    data.tel = document.getElementById("tel").value;
    data.post = document.getElementById("post").value;
    data.type = document.getElementById("type").value;
     var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.onload = function () {
      var partis = JSON.parse(xhr.responseText);
      if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(partis);
        alert("Votre demande a bien été reçue");
        location.replace("home.html");
      } else {
        alert(partis.message);
        console.table(partis);
      }
    };
    xhr.send(json);
  }
}

