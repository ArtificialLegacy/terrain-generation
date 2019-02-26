//Blocks

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

//GenTerrain

function genTerrain1() {
    for (blocksPlaced1 = 0; blocksPlaced1 < width/19; blocksPlaced1++) {
        var noiseVal1 = (noise(blocksPlaced1*0.01))*height/22;
          blockSand(blocksPlaced1*19, noiseVal1*27);
     }
  } //Desert

function genTerrain2() {
    for (blocksPlaced2 = 0; blocksPlaced2 < width/19; blocksPlaced2++) {
        var noiseVal2 = (noise(blocksPlaced2*0.0047))*height/22;
          blockGrass(blocksPlaced2*19, noiseVal2*27);
    }
} //Plains

function genTerrain3() {
    for (blocksPlaced3 = 0; blocksPlaced3 < width/19; blocksPlaced3++) {
        var noiseVal3 = (noise(blocksPlaced3*0.03))*height/22;
          blockStone(blocksPlaced3*19, noiseVal3*27);
    }
} //Mountian

function genTerrain4() {
    for (blocksPlaced4 = 0; blocksPlaced4 < width/19; blocksPlaced4++) {
        var noiseVal4 = (noise(blocksPlaced4*0.007))*height/22;
          blockSnow(blocksPlaced4*19, noiseVal4*27);
    }
} //Snowy Hills

function genTerrain5() {
    for (blocksPlaced5 = 0; blocksPlaced5 < width/19; blocksPlaced5++) {
        var noiseVal5 = (noise(blocksPlaced5*0.02))*height/22;
          blockClay(blocksPlaced5*19, noiseVal5*27);
    }
} //Mesa

function genTerrain6() {
    for (blocksPlaced6 = 0; blocksPlaced6 < width/19; blocksPlaced6++) {
        var noiseVal6 = (noise(blocksPlaced6*0.014))*height/22;
          blockAir(blocksPlaced6*19, noiseVal6*27);
    }
} //Basic

//Setup

var seedVal;

function setup() {
  createCanvas(windowWidth, windowHeight);
	var seedVal = 57377
};

//Controls

function draw() {
  if (keyIsDown(65)) {
    background(0);
		genTerrain1();
		noiseSeed(seedVal)
    } //A
	
  if (keyIsDown(83)) {
    background(0);
		genTerrain2();
		noiseSeed(seedVal)
    } //S
	
	if (keyIsDown(68)) {
		background(0);
		genTerrain3();
		noiseSeed(seedVal)
	} //D
	
	if (keyIsDown(70)) {
		background(0);
		genTerrain4();
		noiseSeed(seedVal)
	} //F
	
	if (keyIsDown(71)) {
		background(0);
		genTerrain5();
		noiseSeed(seedVal)
	} //G
	
	if (keyIsDown(72)) {
		background(0);
		genTerrain6();
		noiseSeed(seedVal)
	} //H
	
	if (keyIsDown(74)) {
		clear();
	} //J
}
