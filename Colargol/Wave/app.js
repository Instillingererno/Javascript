const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");

const x = 150;
const y = 150;
const scale = 6;
const fps = 60;
const damping = 1;
const thicness = 4;
const maxAlpha = 20;

canvas.height = y * scale;
canvas.width = x * scale;
context.scale(scale, scale);

context.fillStyle = "#ffffff";

let buffer1 = generateArray(x, y);
let buffer2 = generateArray(x, y);

/*for(let x = 10; x < 20; x++) {
    for(let y = 10; y < 20; y++) {
        buffer1[x][y] = 255;
    }
}*/

 
console.log(buffer1.length + "   " + buffer1[0].length);


const goalTime = 1000 / fps;
let lastTime = 0;
let dropCounter = 0;
function draw(time = 0) {
    //TIME
    [deltaTime, lastTime, time] = [time-lastTime, time];
    dropCounter += deltaTime;

    //WAVE
    if(dropCounter > goalTime) {
        context.clearRect(0,0,x,y);
        for(let w = 1; w < x-1; w++) {
            for(let h = 1; h < y-1; h++) {
                buffer2[w][h] = (buffer1[w-1][h]+
                                buffer1[w+1][h]+
                                buffer1[w][h-1]+
                                buffer1[w][h+1]) / 2 - buffer2[w][h];
                buffer2[w][h] *= damping;
            }
        }
        dropCounter = 0;

        //Draw rectangles
        for(let w = 0; w < x; w++) {
            for(let h = 0; h < y; h++) {
                let i = buffer2[w][h];
                context.fillStyle = 'rgb('+ i +','+ i +','+ i +')';
                context.fillRect(w, h, 1, 1);
            }
        }

        //Swap buffers
        [buffer1, buffer2] = [buffer2, buffer1];
    }

    requestAnimationFrame(draw);
}
draw();


// Helper functions
function randomNumberbetween(from ,to) {
    return from + Math.random() * (to - from);
}
function generateArray(w,h) {
    const array = [];
    while(w--) {
        array.push(new Array(h).fill(0));
    }
    return array;
}

canvas.addEventListener('click', function(event) {
    let w = Math.floor((event.clientX + event.offsetX) / (scale*2));
    let h = Math.floor((event.clientY + event.offsetY) / (scale*2));
    console.log(w + "     " + h);
    for(let i = w-thicness; i < w+thicness; i++) {
        for(let j = h-thicness; j < h+thicness; j++) {
            buffer1[i][j] = maxAlpha;
        }
    }
    //buffer1[w][h] = 255;
}, false);