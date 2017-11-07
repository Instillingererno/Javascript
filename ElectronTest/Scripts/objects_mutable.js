
class Page {
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
