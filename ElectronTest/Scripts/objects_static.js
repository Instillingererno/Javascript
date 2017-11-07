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

let budget = [
    ["Måneder","Inntekt","Utgift"],
    ["Januar",3000,3000],
    ["Februar",3000,3000],
    ["Mars",3000,3000],
    ["April",3000,3000],
    ["Mai",3000,3000],
    ["Juni",3000,3000],
    ["Juli",3000,3000],
    ["August",3000,3000],
    ["September",3000,3000],
    ["Oktober",3000,3000],
    ["November",3000,3000],
    ["December",3000,3000]
];
budget.write = () => {
    let output = "";
    for(var i = 0; i < budget.length; i++) {
        output += "<tr>";
        for(var j = 0; j < budget[i].length; j++) {
            output += (i!=0) ? '<td>' + (budget[i][j]).toString() + '</td>' : '<th>' + (budget[i][j]).toString() + '</th>';
        }
        output += "</tr>";
    }
    return output;
}
