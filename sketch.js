var x;
var y;
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    strokeWeight(10);
    for (x = 0; x < width; x += 15) {
        point(x, y);
        y = random(-10, height);
    }
}
