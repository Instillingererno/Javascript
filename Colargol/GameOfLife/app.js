const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let col = 50; //x
let row = 50; //y
let scale = 3;
let fps = 5;
const maxAlpha = 255; //0 - 255
let goalTime = 1000 / fps;

let continueDraw = false;

context.fillStyle = '#ffffff';

let gameArea = generateArray(col, row);

/*for(let x = 1; x < col-1; x++) {
    for(let y = 1; y < row-1; y++) {
        if(Math.random() < 0.5) gameArea[x][y] = maxAlpha;
    }
}*/

resize(1);
changeFps(fps);
changeColRow(50);


let lastTime = 0;
let dropCounter = 0;

function draw(time = 0) {
    //TIME management
    [deltaTime, lastTime] = [time-lastTime, time];
    dropCounter += deltaTime;

    //Calculate
    if(dropCounter > goalTime) {
        for(let x = 1; x < col-1; x++) {
            for(let y = 1; y < row-1; y++) {
                let counter = 0;
                for(let i = x-1; i < x+2; i++) {
                    if(gameArea[i][y-1] != 0) counter++;
                }
                for(let i = x-1; i < x+2; i++) {
                    if(gameArea[i][y+1] != 0) counter++;
                }
                if(gameArea[x-1][y] != 0) counter++;
                if(gameArea[x+1][y] != 0) counter++;

                if(gameArea[x][y] != 0) {
                    if(counter < 2) gameArea[x][y] = 0;
                    else if(counter > 3) gameArea[x][y] = 0;
                } else {
                    if(counter == 3) gameArea[x][y] = maxAlpha;
                }
            }
        }

        //Draw
        refresh();

        dropCounter = 0;
    }

    if(continueDraw) {
        console.log("wwwwwuuutu");
        requestAnimationFrame(draw);
    }
}
refresh();

function refresh() {
    for(let x = 0; x < col; x++) {
        for(let y = 0; y < row; y++) {
            let i = gameArea[x][y];
            context.fillStyle = 'rgb('+ i +','+ i +','+ i +')';
            context.fillRect(x, y, 1, 1);
        }
    }
}

// Helper functions
function randomNumberBetween(from, to) {
    return from + Math.random() * (to - from);
}
function generateArray(w, h) {
    const array = [];
    while(w--) {
        array.push(new Array(h).fill(0));
    }
    return array;
}
function resetArea() {
    if(continueDraw) {
        togglePlay();
        resetArea();
    } else {
        gameArea = generateArray(col, row);
        refresh();
    }
}
function togglePlay() {
    continueDraw = !continueDraw;
    draw();
}
function resize(num) {
    scale = num || document.getElementById("range").value;
    canvas.height = row * scale;
    canvas.width = col * scale;
    context.scale(scale, scale);
    refresh();
}
function changeFps(num) {
    if(continueDraw) {
        togglePlay();
        changeFps(num);
    } else {
        fps = num || document.getElementById('fps').value;
        goalTime = 1000 / fps;
        refresh();
    }
}
function changeColRow(num) {
    if(continueDraw) {
        togglePlay();
        changeColRow(num);
    } else {
        row = col = num || document.getElementById("colRow").value;
        gameArea = generateArray(col, row);
        resize(1);
    }
}

canvas.addEventListener('click', function(event) {
    let w = Math.floor((event.clientX + event.offsetX) / (scale*2));
    let h = Math.floor((event.clientY + event.offsetY) / (scale*2));
    console.log(w + "     " + h);
    gameArea[w][h] = maxAlpha;
    if(!continueDraw) refresh();
}, false);