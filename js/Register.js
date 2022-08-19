function add() {
  
  {
    var url = "http://127.0.0.1:3000/empls";
    var data = {};
    data.name = document.getElementById("name").value;
    data.cin = document.getElementById("cin").value;
    data.tel = document.getElementById("tel").value;
    data.addr = document.getElementById("addr").value;
    data.email = document.getElementById("email").value;
    data.sexe = document.getElementById("type").value;
    data.post = document.getElementById("post").value;
    data.password = document.getElementById("password").value;
    data.picture = document.getElementById("i").value;
    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.onload = function () {
      var empls = JSON.parse(xhr.responseText);
      if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(empls);
        alert("Employé ajouté");
        location.replace("login.html");
      } else {
        alert(empls.message);
        console.table(empls);
      }
    };
    xhr.send(json);
  }
}
function send() {
  var i = document.getElementById("i");
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