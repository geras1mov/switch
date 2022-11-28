var theme = "off";

function change() {
  var root = document.documentElement;
  var btn = document.getElementById("btn");

  if ( theme == "off" ) {
    root.style.setProperty("--background-color", "white");
    root.style.setProperty("--button-color", "black");
    root.style.setProperty("--btn-hover-color", "gray");

    btn.classList.add("fa-toggle-on");
    btn.classList.remove("fa-toggle-off");

    document.title = "ВКЛЮЧЕНО";
    theme = "on";
  } else {
    root.style.setProperty("--background-color", "black");
    root.style.setProperty("--button-color", "white");
    root.style.setProperty("--btn-hover-color", "white");

    btn.classList.add("fa-toggle-off");
    btn.classList.remove("fa-toggle-on");

    document.title = "ВЫКЛЮЧЕНО";
    theme = "off";
  }
}