var x;
var y;
function setup() {
  createCanvas(1000, 900);
}

function draw() {
    strokeWeight(10);
    for (x = 0; x < width; x += 15) {
        point(x, y);
        y = random(-10, height);
    }
}
