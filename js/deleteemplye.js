var d = window.confirm("Êtes-vous sûr de vouloir supprimer");
if (d == true) {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var c = url.searchParams.get("id");
  console.log(c);
  var url3 = "http://127.0.0.1:3000/empls/" + c;
  var xhr3 = new XMLHttpRequest();
  xhr3.open("DELETE", url3, true);
  xhr3.onload = function () {
    if (xhr3.readyState == 4 && xhr3.status == "200") {
      location.replace("home.html");
      event.preventDefault();
    } else {
      console.log("error");
    }
  };
  xhr3.send(null);
} else {
  location.replace("home.html");
}
