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
