var margin = 80;
var blockDelta = 80;
let player;

var score = 0;
let path = "";

let moveHistory = [[margin,margin]];

var instructions = "Instructions: Use arrow keys to move dot. Press c to clear.";

function setup() {

  scoreElem = createDiv();
  scoreElem.position(margin, 2);
  scoreElem.id = 'score';
  scoreElem.style('color', 'black');

  pathElem = createDiv();
  pathElem.position(margin, 22);
  pathElem.style('color', 'black');

  lengthOfPath = createDiv();
  lengthOfPath.position(margin, 42);
  lengthOfPath.style('color', 'black');

	createCanvas(6*margin, 6*margin);
	player = new gamePiece();
}

function draw() {
	background("white");
	// line(x1, y1, x2, y2)
	makeGrid();
  fill(0,0,0)
	ellipse(width-margin, height-margin, 10, 10);
  text('End', width-margin+5, height-margin);
  text(instructions, margin, 65)
	player.show();
	//Make edges
	makeEdges()
	scoreElem.html('Score = ' + score);
  pathElem.html('Path = ' + path);
  lengthOfPath.html('Path Length = ' + path.length);
}


function makeGrid() {
	for (var x=margin; x<= width - margin; x += blockDelta) {
		stroke("black");
		strokeWeight(1);
		line(margin,x,width-margin,x);
		line(x,margin, x,width-margin);
	}
}

class gamePiece{
	constructor() {
		this.x = margin,
		this.y = margin,
		this.radius = 17,
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
  clearCanvas() {
    background('blue')
    this.x = margin;
    this.y = margin;
    moveHistory = [[margin,margin]];
    score = 0;
    path = "";
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
  if(key === 'C') {
    background('blue');
    player.clearCanvas();
  }
  else if ((keyCode === UP_ARROW) && (player.y-1>=margin)) {
    player.dir(0, -1);
		score /= 2;
    path = path + 'N';
  } else if ((keyCode === DOWN_ARROW) && (player.y+1<=height-margin)) {
    player.dir(0, 1);
		score *= 2;
    path = path + 'S';
  } else if ((keyCode === RIGHT_ARROW) && (player.x+1<=width-margin)) {
    player.dir(1, 0);
		score += 2;
    path = path + 'E';
  } else if ((keyCode === LEFT_ARROW) && (player.x-1>=margin)) {
    player.dir(-1, 0);
		score -= 2;
    path = path + 'W';
  }
}
