var theme = "off";

function change() {
  var root = document.documentElement;

  if ( theme == "off" ) {
    document.title = "ВКЛЮЧЕНО";
    root.style.setProperty("--background-color", "white");
    document.getElementById('image-button').src="src/on.png";

    theme = "on";
  } else {
    document.title = "ВЫКЛЮЧЕНО";
    root.style.setProperty("--background-color", "black");
    document.getElementById('image-button').src="src/off.png";

    theme = "off";
  }
}