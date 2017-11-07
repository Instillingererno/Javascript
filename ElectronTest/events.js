window.onresize = (e) => {
    console.log("Window resize triggered, changing 'container' height");
    document.getElementById('container').style.height = window.innerHeight.toString() + "px";
}
window.onload = (e) => { // gets settings file and inits
    console.log("Window onload triggered, running settings.init and settings.apply");
    settings.init("settings.json");
    settings.apply();
}
