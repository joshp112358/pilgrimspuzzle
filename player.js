
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
	storeTurn() {
		moveHistory.append(this.x, this.y)
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
}
