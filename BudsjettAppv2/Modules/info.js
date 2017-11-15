class Info {
    constructor(melding) {
        this.melding = melding;
    }
    show(e) {
        let temp = document.createElement('div');
        temp.setAttribute('class', 'info');
        temp.setAttribute('id', 'infoblock');
        temp.appendChild(document.createTextNode(this.melding));
        let temp2 = '';
        if(e.clientX < window.innerWidth/2) {
            temp2 = 'right: ' + e.clientX + 'px; top: ' + e.clientY + 'px;';
        } else {
            temp2 = 'right: ' + (window.innerWidth - e.clientX) + 'px; top: ' + e.clientY + 'px;';
        }
        temp.setAttribute('style', temp2);
        document.getElementById('container').appendChild(temp);
    }
    remove() {
        document.getElementById('container').removeChild(document.getElementById('infoblock'));
    }
}
