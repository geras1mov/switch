var theme = "off";

let times = 0;

function change() {
  var root = document.documentElement;

  if ( theme == "off" ) {
    root.style.setProperty("--background-color", "white");

    document.title = "ВКЛЮЧЕНО";
    document.getElementById('image').src="src/on.png";

    theme = "on";
    times++;
  } else {
    root.style.setProperty("--background-color", "black");

    document.title = "ВЫКЛЮЧЕНО";
    document.getElementById('image').src="src/off.png";

    theme = "off";
    times++;
  }

  if ( times == 10 ) document.getElementById("titanik").style.visibility = "visible";
  if ( times < 10 ) document.getElementById("titanik").style.visibility = "hidden";
  if ( times > 11 ) times = 0;
}