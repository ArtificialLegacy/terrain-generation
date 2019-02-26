function blockAir(locX, locY) {
	stroke(0, 0, 0);
	fill(255, 255, 255);
	rect(locX, locY, 20, 20);
}

function blockSand(locX, locY) {
	noStroke();
	fill(189,183,107);
	rect(locX, locY, 20, 20);
}

function blockGrass(locX, locY) {
	noStroke();
	fill(0,255,0);
	rect(locX, locY, 20, 20);
}

function blockStone(locX, locY) {
	noStroke();
	fill(133, 133, 133);
	rect(locX, locY, 20, 20);
}

function blockSnow(locX, locY) {
	noStroke();
	fill(255, 255, 255);
	rect(locX, locY, 20, 20);
}

function blockClay(locX, locY) {
	noStroke();
	fill(255, 153, 102);
	rect(locX, locY, 20, 20);
}
