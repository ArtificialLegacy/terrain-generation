function blockAir(locX, locY) {
	stroke(0, 0, 0);
	fill(255, 255, 255);
	rect(locX, locY, 5, 1000);
}

function blockSand(locX, locY) {
	noStroke();
	fill(189,183,107);
	rect(locX, locY, 1, 1000);
}

function blockGrass(locX, locY) {
	noStroke();
	fill(0, 153, 51);
	rect(locX, locY, 1, 1000);
}

function blockStone(locX, locY) {
	noStroke();
	fill(133, 133, 133);
	rect(locX, locY, 1, 2000);
}

function blockSnow(locX, locY) {
	noStroke();
	fill(255, 255, 255);
	rect(locX, locY, 1, 1000);
}

function blockClay(locX, locY) {
	noStroke();
	fill(255, 153, 102);
	rect(locX, locY, 1, 1000);
}

function blockWater(locX, locY) {
	noStroke();
	fill(51, 102, 255);
	rect(locX, locY, 1, 1000);
}
	
	function blockDeath(locX, locY) {
		noStroke();
		fill(128, 0, 0);
		rect(locX, locY, 1, 1000);
	}

function blockMagic(locX, locY) {
	noStroke();
	fill(96, 0, 128);
	rect(locX, locY, 1, 1000);
}
