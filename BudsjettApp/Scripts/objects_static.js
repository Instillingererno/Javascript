const NEWACCOUNT = (document.createElement('div')
                    .appendChild(document
                        .createElement('h2')
                        .appendChild(document
                            .createTextNode(
                                "Finner ikke en tidligere lagret konto.\
                                For å ta i bruk start portalen for å enkelt starte en ny konto\
                                trykk på knappen, ellers fortsett som du vil."
                            )
                        )
                    ))
                    .appendChild(document
                        .createElement('button')
                        .appendChild(document
                            .createTextNode(
                                "Åpne portal"
                            )
                        )
                    );
//<button type='button' name='button'>Åpne portal</button>";

/*let settings = {};    Tidligere løsning for instillinger, nå bruker File classen
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

};*/

/*     Tidligere løsning
let totalsum = 0;
let budget = [
    ["Måneder","Inntekt","Utgift"],
    ["Januar",3000,-3000],
    ["Februar",3000,-3000],
    ["Mars",3000,-3000],
    ["April",3000,-3000],
    ["Mai",3000,-3000],
    ["Juni",3000,-3000],
    ["Juli",3000,-3000],
    ["August",3000,-3000],
    ["September",3000,-3000],
    ["Oktober",3000,-3000],
    ["November",3000,-3000],
    ["December",3000,-3000]
];
budget.write = () => {
    totalsum = 0;
    let output = "";
    for(var i = 0; i < budget.length; i++) {
        output += "<tr>";
        for(var j = 0; j < budget[i].length + 1; j++) {
            if(i != 0) {
                if(j != budget[i].length) {output += '<td>' + (budget[i][j]).toString() + '</td>'}
                else {output += '<td>' + (budget.sum(i, null)).toString() + '</td>'}
            } else {
                if(j != budget[i].length) {output += '<th>' + (budget[i][j]).toString() + '</th>'}
                else {output += '<th>Sum</th>'}
            }
        }
        output += "</tr>";
    }
    output += '<tr>';
    for(var i = 0; i < budget[0].length + 1; i++) {
        output += '<td>' + (budget.sum(null, i)).toString() + '</td>';
    }
    output += '</tr>';
    return output;
}
budget.sum = (x,y) => {
    let output = 0;
    if(y == budget[0].length) {
        return totalsum;
    }
    if(y == 0) {return "Sum"}
    if(x == null) {
        for(var i = 0; i < budget.length; i++) {
            output += (typeof budget[i][y] === 'number') ? budget[i][y] : 0;
        }
    } else if(y == null) {
        for(var i = 0; i < budget[x].length; i++) {
            output += (typeof budget[x][i] === 'number') ? budget[x][i] : 0;
        }
    } else {
        alert("Hvordan klarte du dette!..... :/");
    }
    totalsum += output;
    return output;
}
*/
