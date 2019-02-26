function genTerrain1() {
    for (blocksPlaced1 = 0; blocksPlaced1 < width/4; blocksPlaced1++) {
        var noiseVal1 = (noise(blocksPlaced1*0.01))*height/22;
          blockSand(blocksPlaced1*4, noiseVal1*27);
     }
  } //Desert

function genTerrain2() {
    for (blocksPlaced2 = 0; blocksPlaced2 < width/4; blocksPlaced2++) {
        var noiseVal2 = (noise(blocksPlaced2*0.0047))*height/22;
          blockGrass(blocksPlaced2*4, noiseVal2*27);
    }
} //Plains

function genTerrain3() {
    for (blocksPlaced3 = 0; blocksPlaced3 < width/4; blocksPlaced3++) {
        var noiseVal3 = (noise(blocksPlaced3*0.012))*height/22;
          blockStone(blocksPlaced3*4, noiseVal3*28.4);
    }
} //Mountian

function genTerrain4() {
    for (blocksPlaced4 = 0; blocksPlaced4 < width/4; blocksPlaced4++) {
        var noiseVal4 = (noise(blocksPlaced4*0.005))*height/22;
          blockSnow(blocksPlaced4*4, noiseVal4*27);
    }
} //Snowy Hills

function genTerrain5() {
    for (blocksPlaced5 = 0; blocksPlaced5 < width/4; blocksPlaced5++) {
        var noiseVal5 = (noise(blocksPlaced5*0.0053))*height/37;
          blockClay(blocksPlaced5*4, noiseVal5*27);
    }
} //Mesa

function genTerrain6() {
    for (blocksPlaced6 = 0; blocksPlaced6 < width/4; blocksPlaced6++) {
        var noiseVal6 = (noise(blocksPlaced6*0.008))*height/22;
          blockAir(blocksPlaced6*4, noiseVal6*27);
    }
} //Basic

function genTerrain7() {
    for (blocksPlaced4 = 0; blocksPlaced4 < width/4; blocksPlaced4++) {
        var noiseVal4 = (noise(blocksPlaced4*0.0052))*height/22;
          blockGrass(blocksPlaced4*4, noiseVal4*27);
    }
} //Grassy Hills

function genTerrain8() { 
		for (blocksPlaced = 0; blocksPlaced < width; blocksPlaced++) {
					var noiseVal = random(250, 751); 
					blockAir(blocksPlaced, noiseVal);
    }
} //Glitched

function genTerrain9() {
  	var noiseVal = random(250, 751);  
		for (blocksPlaced = 0; blocksPlaced < width; blocksPlaced++) {
          blockGrass(blocksPlaced, noiseVal);
    }
} //SuperFlat
