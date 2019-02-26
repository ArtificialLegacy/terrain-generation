function genTerrain1() {
  for (blocksPlaced = 0; blocksPlaced < biomeSize; blocksPlaced++) {
    noiseVal = (noise(totalBlocksPlaced*0.0012))*height/22;
    blockSand(totalBlocksPlaced, noiseVal*27);
    totalBlocksPlaced++
  }
}//Desert

function genTerrain2() {
  for (blocksPlaced = 0; blocksPlaced < biomeSize; blocksPlaced++) {
    noiseVal = (noise(totalBlocksPlaced*0.000087))*height/22;
    blockGrass(totalBlocksPlaced, noiseVal*27);
		totalBlocksPlaced++
    }
} //Grassy Plains

function genTerrain3() {
  for (blocksPlaced = 0; blocksPlaced < biomeSize; blocksPlaced++) {
    noiseVal = (noise(blocksPlaced*0.0022))*height/22;
    blockStone(totalBlocksPlaced, noiseVal*28.4);
		totalBlocksPlaced++
    }
} //Mountians

function genTerrain4() {
	for (blocksPlaced = 0; blocksPlaced < biomeSize; blocksPlaced++) {
    noiseVal = (noise(blocksPlaced*0.0008))*height/22;
    blockSnow(totalBlocksPlaced, noiseVal*27);
		totalBlocksPlaced++
    }
} //Snowy Hills

function genTerrain5() {
  for (blocksPlaced = 0; blocksPlaced < biomeSize; blocksPlaced++) {
    noiseVal = (noise(blocksPlaced*0.00053))*height/37;
    blockClay(totalBlocksPlaced, noiseVal*27);
		totalBlocksPlaced++
    }
} //Mesa

function genTerrain6() {
  for (blocksPlaced = 0; blocksPlaced < biomeSize; blocksPlaced++) {
    noiseVal = (noise(blocksPlaced*0.00052))*height/22;
    blockGrass(totalBlocksPlaced, noiseVal*27);
		totalBlocksPlaced++
    }
} //Grassy Hills

function genTerrain7() {
  for (blocksPlaced = 0; blocksPlaced < biomeSize; blocksPlaced++) {
		noiseVal = (noise(blocksPlaced*0.00007))*height/22;
    blockWater(totalBlocksPlaced, noiseVal*26);
		totalBlocksPlaced++
    }
} //Ocean

function genTerrain8() {
  for (blocksPlaced = 0; blocksPlaced < biomeSize; blocksPlaced++) {
    noiseVal = (noise(blocksPlaced*0.002))*height/22;
    blockSnow(totalBlocksPlaced, noiseVal*26);
		totalBlocksPlaced++
    }
} //Snowy Plains

function genTerrain9() {
  for (blocksPlaced = 0; blocksPlaced < biomeSize; blocksPlaced++) {
    noiseVal = (noise(blocksPlaced*0.0012))*height/22;
    blockDeath(totalBlocksPlaced, noiseVal*26);
		totalBlocksPlaced++
    }
} //Blood Plains

function genTerrain10() {
  for (blocksPlaced = 0; blocksPlaced < biomeSize; blocksPlaced++) {
    noiseVal = (noise(blocksPlaced*0.00021))*height/22;
    blockMagic(totalBlocksPlaced, noiseVal*26);
		totalBlocksPlaced++
    }
} //Mythical Plains

function genTerrain11() {
	biomeSize = floor(random(4000, 6001));
	biomeSel = floor(random(1, 11));
	totalBlocksPlaced = 0;
	for (blocksPlaced = 0; blocksPlaced < width*15; blocksPlaced++) {
		if (totalBlocksPlaced === biomeSize) {
			biomeSize = floor(random(4000, 5501));
			biomeSel = floor(random(1, 11));
			totalBlocksPlaced = 0;
		}
		noiseForce = noiseValue
    noiseVal = (noise(blocksPlaced*noiseForce/10000))*height/22;
		floor(noiseValue);
		if (noiseInput != floor(noiseValue)) {
			if (noiseInput < floor(noiseValue)) {
				noiseValue = floor(noiseValue - 1)
			}
			if (noiseInput > floor(noiseValue)) {
				noiseValue = floor(noiseValue + 1)
			}
		}
    if (biomeSel === 1) {
			blockSand(blocksPlaced, noiseVal*27);
			noiseInput = 12
    }
    if (biomeSel === 2) {
			blockGrass(blocksPlaced, noiseVal*27);
			noiseInput = 1
    }
    if (biomeSel === 3) { 
			blockStone(blocksPlaced, noiseVal*28.4);
			noiseInput = 22
    }
    if (biomeSel === 4) {
			blockSnow(blocksPlaced, noiseVal*27);
			noiseInput = 8
    }
    if (biomeSel === 5) {
			blockClay(totalBlocksPlaced, noiseVal*27);
			noiseInput = 5
    }
    if (biomeSel === 6) {
			blockGrass(blocksPlaced, noiseVal*27);
			noiseInput = 5
    }
    if (biomeSel === 7) {
			blockWater(blocksPlaced, noiseVal*26);
			noiseInput = 1
    }
    if (biomeSel === 8) {
			blockSnow(blocksPlaced, noiseVal*26);
			noiseInput = 20
   	}
    if (biomeSel === 9) {
			blockDeath(blocksPlaced, noiseVal*26);
			noiseInput = 12
    }
    if (biomeSel === 10) {
			blockMagic(blocksPlaced, noiseVal*26);
			noiseInput = 2
    }
		totalBlocksPlaced++
	}
}//Blend Biomes
