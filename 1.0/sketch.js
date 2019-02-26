//DrawBlock

var block = function(locX, locY) {
    rect(locX, locY, 40, 40);   
}

//Terrian Gen

var blocksPlaced = 0;

function genTerrain() {
    for (blocksPlaced = 0; blocksPlaced < width/35; blocksPlaced++) {
        var noiseVal = (noise(blocksPlaced*0.04))*height/42;
          block(blocksPlaced*39, noiseVal*47);
    }
}

//SetUp

function setup() {
  createCanvas(windowWidth, windowHeight);
  genTerrain();
}
