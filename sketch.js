var margin = 50;
var blockDelta = 50
let player;
let edges = [];
let moveHistory = []


function setup() {
	createCanvas(300, 300);
	background(0);
	player = new gamePiece();
}

function draw() {
	background(220);
	// line(x1, y1, x2, y2)
	makeGrid();
	player.show();
}

function mousePressed() {
	player.clicked()
}

function makeGrid() {
	for (var x=margin; x<= width - margin; x += blockDelta) {
		line(50,x,250,x)
		line(x,50, x,250);
	}
}

class gamePiece{
	constructor() {
		this.x = margin,
		this.y = margin,
		this.radius = 25,
		this.r = 255
	}
	show() {
		fill(this.r,0,0);
		ellipse(this.x, this.y, this.radius, this.radius);
	}
	moveup() {
		if (this.y > margin){
			this.y -= blockDelta
		}
		return true
	}
	movedown() {
		if (this.y < width - margin) {
			this.y += blockDelta
		}
		return true
	}
	moveleft() {
		if (this.x > margin){
			this.x -= blockDelta
		}
		return true
	}
	moveright() {
		if (this.x < width - margin){
			this.x += blockDelta
		}
		return true
	}
	storeMove() {
		moveHistory.append(this.x, this.y)
	}
}

class Edge{
	constructor() {
		x1 = player.x,
		y1 = player.y,
		x2 = player.x,
		y2 = player.y
	}
	makeEdge() {

	}
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    player.moveup();
  } else if (keyCode === DOWN_ARROW) {
    player.movedown();
  } else if (keyCode === RIGHT_ARROW) {
    player.moveright();
  } else if (keyCode === LEFT_ARROW) {
    player.moveleft();
  }
}
