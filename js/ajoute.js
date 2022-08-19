function add() {
{
        ch1 = document.f.T1.value;
        ch2 = document.f.T2.value;
        ch3 = document.f.T3.value;
        ch4 = document.f.T4.value;
        ch5 = document.f.T5.value;
        ch6 = document.f.T6.value;
        ch7 = document.f.T7.value;
        ch8 = document.f.T8.value;
    
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
        if (
          ch3 == "" ||
          ch3.length != 8 ||
          (ch3.charAt(0) != 0 && ch3.charAt(0) != 1) ||
          isNaN(ch2)
        ) {
          alert("vérifier votre numéro de CIN");
          return false;
        }
       
        if (isNaN(ch4) == false || ch4 == "") {
          alert("vérifier votre Adresse ");
          return false;
        }
       
        if (ch5 == "" || ch5.length != 8 || isNaN(ch5)) {
            alert("vérifier votre numéro de téléphone");
            return false;
          }

        if (isNaN(ch6) == false || ch6 == "") {
            alert("vérifier votre  ");
            return false;
          }
          if (isNaN(ch7) == false || ch7 == "") {
            alert("Une lettre de motivation doit être jointe ");
            return false;
          }
          if (isNaN(ch8) == false || ch8 == "") {
            alert("Un CV doit être joint  ");
            return false;
          }
      }

      {
  
    var url = "http://127.0.0.1:3000/ajoutes";
    var data = {};
    data.name = document.getElementById("name").value;
    data.niveau = document.getElementById("niveau").value;
    data.cin = document.getElementById("cin").value;
    data.email = document.getElementById("email").value;
    data.addr = document.getElementById("addr").value;
    data.tel = document.getElementById("tel").value;
    data.letter= document.getElementById("ii").value;
    data.cv= document.getElementById("i1").value;
  
     var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.onload = function () {
      var ajoutes = JSON.parse(xhr.responseText);
      if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(ajoutes);
        alert("La demande de Recrutement a été enregistrée");
        location.replace("home.html");
      } else {
        alert(ajoutes.message);
        console.table(ajoutes);
      }
    };
    xhr.send(json);
  }
}
  function send() {
    var i = document.getElementById("ii");
    const apikey = "ANlm5NoOQIytnuRwZng44z";
    const client = filestack.init(apikey);
    const options = {
      maxFiles: 20,
      uploadInBackground: false,
      onOpen: () => console.log("opened!"),
      onUploadDone: (res) => (i.value = res.filesUploaded[0].url),
    };
    client.picker(options).open();
  }
  function send1() {
    var i = document.getElementById("i1");
    const apikey = "ANlm5NoOQIytnuRwZng44z";
    const client = filestack.init(apikey);
    const options = {
      maxFiles: 20,
      uploadInBackground: false,
      onOpen: () => console.log("opened!"),
      onUploadDone: (res) => (i.value = res.filesUploaded[0].url),
    };
    client.picker(options).open();
  }

