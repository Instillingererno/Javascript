createPiece = (type) => {
    if (type === 'T') {
        return [
            [0, 0, 0],
            [1, 1, 1],
            [0, 1, 0],
        ];
    } else if (type === 'O') {
        return [
            [2, 2],
            [2, 2],
        ];
    } else if (type === 'L') {
        return [
            [0, 3, 0],
            [0, 3, 0],
            [0, 3, 3],
        ];
    } else if (type === 'J') {
        return [
            [0, 4, 0],
            [0, 4, 0],
            [4, 4, 0],
        ];
    } else if (type === 'I') {
        return [
            [0, 5, 0, 0],
            [0, 5, 0, 0],
            [0, 5, 0, 0],
            [0, 5, 0, 0],
        ];
    } else if (type === 'S') {
        return [
            [0, 6, 6],
            [6, 6, 0],
            [0, 0, 0],
        ];
    } else if (type === 'Z') {
        return [
            [7, 7, 0],
            [0, 7, 7],
            [0, 0, 0],
        ];
    }
}

const tetri = [];

const playerElements = document.querySelectorAll('.player');
[...playerElements].forEach(element => {
	const tetris = new Tetris(element);
	tetri.push(tetris);
});

const keyListener = (event) => {
    [
        [65, 68, 81, 69, 83],
        [72, 75, 89, 73, 74],
    ].forEach((key, index) => {
        const player = tetri[index].player;
        if (event.type === 'keydown') {
            if (event.keyCode === key[0]) {
                player.move(-1);
            } else if (event.keyCode === key[1]) {
                player.move(1);
            } else if (event.keyCode === key[2]) {
                player.rotate(-1);
            } else if (event.keyCode === key[3]) {
                player.rotate(1);
            }
        }

        if (event.keyCode === key[4]) {
            if (event.type === 'keydown') {
                if (player.dropInterval !== player.DROP_FAST) {
                    player.drop();
                    player.dropInterval = player.DROP_FAST;
                }
            } else {
                player.dropInterval = player.DROP_SLOW;
            }
        }
    });
};

let touchStart = {
    x: 0,
    y: 0,
    speedy: false
}

const touchstart = (event) => {
    touchStart.x = event.touches[0].clientX;
    touchStart.y = event.touches[0].clientY;
    //console.log(event);
}
const touchend = (event) => {
    //console.log(event);
    const deadZone = 1;
    const accuracy = 0.7; // 1 == 100%
    newTouch = {
        x: event.changedTouches[0].clientX,
        y: event.changedTouches[0].clientY
    }
    let totDistance = Math.sqrt(Math.pow((newTouch.x-touchStart.x),2)+Math.pow((newTouch.y-touchStart.y),2));
    console.log("x: "+(newTouch.x-touchStart.x)^2);
    console.log("y: "+(newTouch.y-touchStart.y)^2);
    //console.log(totDistance);
    if(totDistance > deadZone) {
        distance = {
            x: newTouch.x-touchStart.x,
            y: newTouch.y-touchStart.y
        }
        //console.log(distance);
        if(Math.abs(distance.x) > Math.abs(distance.y)) {
            // Swipe in x direction
            if(distance.x > 0) {
                //right swipe
                tetri[0].player.move(1);
            } else {
                //left swipe
                tetri[0].player.move(-1);
            }
        } else {
            // Swipe in y
            if(distance.y > 0) {
                //swipe down?
                tetri[0].player.drop();
            } else {
                //swipe up?
                tetri[0].player.rotate(1);
            }
        }
    }
    tetri[0].player.dropInterval = 1000;
    touchStart.speedy = false;
}

const touchmove = (event) => {
    if(touchStart.speedy == false && event.touches[0].clientY - touchStart.y > 300) {
        console.log("hello");
        tetri[0].player.dropInterval = 50;
        touchStart.speedy = true;
    }
} 

function isDesktop() {
    return (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)) === null;
}


if(isDesktop()) {
    document.addEventListener('keydown', keyListener);
    document.addEventListener('keyup', keyListener);
} else {
    //element.requestFullscreen();
    document.addEventListener('touchstart', touchstart);
    document.addEventListener('touchend', touchend);
    document.addEventListener('touchmove', touchmove);
}
