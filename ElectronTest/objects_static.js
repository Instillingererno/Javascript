let settings = {};
settings.init = (file) => {
    console.log("Trying synchronous file read");
    const fs = require('fs');
    let temp = {};
    try {
        temp = JSON.parse(fs.readFileSync(file));
        console.log("Success");
    } catch(e) {
        alert("Settings file not found, send for help!");
        console.log("Woops");
    }
    let keys = Object.keys(temp);
    for(let i = 0; i < keys.length; i++) {
        settings[keys[i]] = temp[keys[i]];
    }
};
settings.apply = () => {
    console.log("applying settings");
    document.getElementsByClassName('main')[0].style.background = settings.main_background;
    document.getElementsByClassName('pages')[0].style.background = settings.pages_background;
    document.getElementsByClassName('tools')[0].style.background = settings.tools_background;

};
