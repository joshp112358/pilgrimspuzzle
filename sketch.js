var margin = 50;
var blockDelta = 50
let player;
let edges = [];
var score = 0

moveHistory = [[margin,margin]]

function setup() {

  scoreElem = createDiv('Score =');
  scoreElem.position(20, 20);
  scoreElem.id = 'score';
  scoreElem.style('color', 'black');

	createCanvas(300, 300);
	player = new gamePiece();
}

function draw() {
	background("white");
	// line(x1, y1, x2, y2)
	makeGrid();

	player.show();
	//Make edges
	makeEdges()
	scoreElem.html('Score = ' + score);
}


function makeGrid() {
	for (var x=margin; x<= width - margin; x += blockDelta) {
		stroke("black");
		strokeWeight(1);
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
	dir(sigma1,sigma2) {
		this.x += sigma1*blockDelta
		this.y += sigma2*blockDelta

    this.x = constrain(this.x, margin, width - margin);
    this.y = constrain(this.y, margin, height - margin);
		append(moveHistory, [this.x, this.y])

	}
	show() {
		fill(this.r,0,0);
		ellipse(this.x, this.y, this.radius, this.radius);
	}
}

function makeEdges(){
	for (let i=0;i<moveHistory.length-1;i++){
		stroke("red");
		strokeWeight(4);
		line(moveHistory[i][0],moveHistory[i][1],moveHistory[i+1][0],moveHistory[i+1][1])
	}
}


function keyPressed() {
  if ((keyCode === UP_ARROW) && (player.y-1>=margin)) {
    player.dir(0, -1);
		score /= 2;
  } else if ((keyCode === DOWN_ARROW) && (player.y+1<=height-margin)) {
    player.dir(0, 1);
		score *= 2;
  } else if ((keyCode === RIGHT_ARROW) && (player.x+1<=width-margin)) {
    player.dir(1, 0);
		score += 2;
  } else if ((keyCode === LEFT_ARROW) && (player.x-1>=margin)) {
    player.dir(-1, 0);
		score -= 2;
  }
}
