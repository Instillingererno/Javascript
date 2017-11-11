
class Page { //HUske ikkje ka denne ska gjør
    constructor(name, method) {
        this.name = name;
        this.method = method;
    }
}


class Info {
    constructor(melding) {
        this.melding = melding;
        this.visible = false;
    }
    show(e) {
        let temp = document.createElement("div"); //v, {"id" : "infoblock", "class" : "info"}, this.melding
        temp.setAttribute("class", "info");
        temp.setAttribute("id", "infoblock");
        temp.appendChild(document.createTextNode(this.melding));
        document.getElementById("container").appendChild(temp);
        let temp2 = 'right: ' + (window.innerWidth - e.clientX) + 'px; top:  ' + e.clientY + 'px;';
        temp.setAttribute("style", temp2);
    }
    remove(e) {
        document.getElementById("container").removeChild(document.getElementById("infoblock"));
    }
}

class Fil {
    constructor(src) {
        this.source = src;
    }
    load() {
        console.log("Trying synchronous file read");
        const fs = require('fs');
        let temp = {};
        try {
            temp = JSON.parse(fs.readFileSync(this.source));
            console.log("Success");
        } catch(e) {
            alert("File not found, send for help!");
            console.log("Woops");
        }
        let keys = Object.keys(temp);
        for(let i = 0; i < keys.length; i++) {
            this[keys[i]] = temp[keys[i]];
        }
    }
    save() {
        //do stuff
        console.log("Denne gjør ingenting enda!");
    }
    custom(func) {
        func();
    }
}

const MONTHS = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"];

class Tabell {
    constructor(header, file) {
        this.header = header;
        this.file = file;
    }
    writeToDom() {
        console.log("Denne gjør ingenting enda");
        //do stuff
    }
}
