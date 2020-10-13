function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  background(43, 71, 128);
}

var cells = [];

function draw() {
  background(33, 58, 77);

  for (i=0; i < cells.length; i++) {
    cells[i].display();
    cells[i].move();
    strokeWeight(1);
    stroke(255, 20);

    for (j=0; j < cells.length; j++) {
      line(cells[i].x, cells[i].y, cells[j].x, cells[j].y);
    }
  }
}

function mousePressed() {
  cells.push(new Cell(mouseX, mouseY));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function Cell(x, y) {
  this.x = x;
  this.y = y;

  this.display = function() {
    stroke(255);
    strokeWeight(1)
    ellipse(this.x, this.y, 3);
  }

  this.move = function() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }
}