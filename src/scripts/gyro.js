window.ondevicemotion = function(e) {
    X = e.accelerationIncludingGravity.x;  
    Y = e.accelerationIncludingGravity.y;  
    Z = e.accelerationIncludingGravity.z;

    lastX = X;
    lastY = Y;
    deltaX = lastX - X;
    deltaY = lastY - Y;

    var theme = 'off';
    var root = document.documentElement;
    var btn = document.getElementById("btn");

    if (x < lastX) {
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

    console.log(`x: ${x}\ny: ${y}\n\nlastX: ${lastX}\nlastY: ${lastY}\n\ndeltaX: ${deltaX}\ndeltaY: ${deltaY}`);
};
