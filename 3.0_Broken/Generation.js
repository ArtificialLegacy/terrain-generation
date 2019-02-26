function genTerrain1() {
    for (var blocksPlaced = 0; blocksPlaced < biomeSize; blocksPlaced++) {
        if (noiseCoeff < 0.0012) {
            noiseCoeff = noiseCoeff + 0.01;
            if(noiseCoeff > 0.0012)  {
                noiseCoeff = 0.0012;
            }
        }
        if (noiseCoeff > 0.0012) {
            noiseCoeff = noiseCoeff - 0.01;
            if(noiseCoeff < 0.0012)  {
                noiseCoeff = 0.0012;
            }
        }
        noiseVal = (noise(totalBlocksPlaced*noiseCoeff))*height/22;
          blockSand(totalBlocksPlaced, noiseVal*26);
					totalBlocksPlaced++;
		}
		print(noiseCoeff);
} //Desert

function genTerrain2() {
    for (var blocksPlaced = 0; blocksPlaced < biomeSize; blocksPlaced++) {
        if (noiseCoeff < 0.0002) {
            noiseCoeff = noiseCoeff + 0.01;
            if(noiseCoeff > 0.0002)  {
                noiseCoeff = 0.0002;
            }
        }
        if (noiseCoeff > 0.0002) {
            noiseCoeff = noiseCoeff - 0.01;
            if(noiseCoeff < 0.0002)  {
                noiseCoeff = 0.0002;
            }
        }
        noiseVal = (noise(totalBlocksPlaced*noiseCoeff))*height/22;
          blockGrass(totalBlocksPlaced, noiseVal*26);
					totalBlocksPlaced++;
        }
} //Plains

function genTerrain3() {
    for (var blocksPlaced = 0; blocksPlaced < biomeSize; blocksPlaced++) {
        if (noiseCoeff < 0.003) {
            noiseCoeff = noiseCoeff + 0.01;
            if(noiseCoeff > 0.003)  {
                noiseCoeff = 0.003;
            }
        }
        if (noiseCoeff > 0.003) {
            noiseCoeff = noiseCoeff - 0.01;
            if(noiseCoeff < 0.003)  {
                noiseCoeff = 0.003;
            }
        }
        noiseVal = (noise(totalBlocksPlaced*noiseCoeff))*height/22;
          blockStone(totalBlocksPlaced, noiseVal*26);
					totalBlocksPlaced++;
        }
} //Mountian

function genTerrain4() {
    for (var blocksPlaced = 0; blocksPlaced < biomeSize; blocksPlaced++) {
        if (noiseCoeff < 0.00125) {
            noiseCoeff = noiseCoeff + 0.01;
            if(noiseCoeff > 0.00125)  {
                noiseCoeff = 0.00125;
            }
        }
        if (noiseCoeff > 0.00125) {
            noiseCoeff = noiseCoeff - 0.01;
            if(noiseCoeff < 0.00125)  {
                noiseCoeff = 0.00125;
            }
        }
        noiseVal = (noise(totalBlocksPlaced*noiseCoeff))*height/22;
          blockSnow(totalBlocksPlaced, noiseVal*26);
					totalBlocksPlaced++;
        }
} //Snowy Hills

function genTerrain5() {
    for (var blocksPlaced = 0; blocksPlaced < biomeSize; blocksPlaced++) {
        if (noiseCoeff < 0.00135) {
            noiseCoeff = noiseCoeff + 0.01;
            if(noiseCoeff > 0.00135)  {
                noiseCoeff = 0.00135;
            }
        }
        if (noiseCoeff > 0.00135) {
            noiseCoeff = noiseCoeff - 0.01;
            if(noiseCoeff < 0.00135)  {
                noiseCoeff = 0.00135;
            }
        }
        noiseVal = (noise(totalBlocksPlaced*noiseCoeff))*height/37;
          blockClay(totalBlocksPlaced, noiseVal*26);
					totalBlocksPlaced++;
} //Mesa

        }
function genTerrain6() {
    for (blocksPlaced = 0; blocksPlaced < biomeSize; blocksPlaced++) {
        var noiseVal = (noise(blocksPlaced*0.002))*height/22;
          blockAir(blocksPlaced, noiseVal*27);
    }
} //Basic

function genTerrain7() {
    for (var blocksPlaced = 0; blocksPlaced < biomeSize; blocksPlaced++) {
        if (noiseCoeff < 0.00124) {
            noiseCoeff = noiseCoeff + 0.01;
            if(noiseCoeff > 0.00124)  {
                noiseCoeff = 0.00124;
            }
        }
        if (noiseCoeff > 0.00124) {
            noiseCoeff = noiseCoeff - 0.01;
            if(noiseCoeff < 0.00124)  {
                noiseCoeff = 0.00124;
            }
        }
        noiseVal = (noise(totalBlocksPlaced*noiseCoeff))*height/22;
          blockGrass(totalBlocksPlaced, noiseVal*26);
					totalBlocksPlaced++;
        }
} //Grassy Hills

function genTerrain8() {
  	var noiseVal = random(250, 751);  
		for (blocksPlaced = 0; blocksPlaced < width; blocksPlaced++) {
          blockGrass(blocksPlaced, noiseVal);
    }
} //SuperFlat

function genTerrain9() { 
		for (blocksPlaced = 0; blocksPlaced < width; blocksPlaced++) {
					var noiseVal = random(250, 751); 
					blockAir(blocksPlaced, noiseVal);
    }
} //Glitched

function genTerrain10() {
    for (var blocksPlaced = 0; blocksPlaced < biomeSize; blocksPlaced++) {
        if (noiseCoeff < 0.00007) {
            noiseCoeff = noiseCoeff + 0.01;
            if(noiseCoeff > 0.00007)  {
                noiseCoeff = 0.00007;
            }
        }
        if (noiseCoeff > 0.00007) {
            noiseCoeff = noiseCoeff - 0.01;
            if(noiseCoeff < 0.00007)  {
                noiseCoeff = 0.00007;
            }
        }
        noiseVal = (noise(totalBlocksPlaced*noiseCoeff))*height/22;
          blockWater(totalBlocksPlaced, noiseVal*26);
					totalBlocksPlaced++;
        }
} //Ocean

function genTerrain11() {
    for (var blocksPlaced = 0; blocksPlaced < biomeSize; blocksPlaced++) {
        if (noiseCoeff < 0.0002) {
            noiseCoeff = noiseCoeff + 0.01;
            if(noiseCoeff > 0.0002)  {
                noiseCoeff = 0.0002;
            }
        }
        if (noiseCoeff > 0.0002) {
            noiseCoeff = noiseCoeff - 0.01;
            if(noiseCoeff < 0.0002)  {
                noiseCoeff = 0.0002;
            }
        }
        noiseVal = (noise(totalBlocksPlaced*noiseCoeff))*height/22;
          blockSnow(totalBlocksPlaced, noiseVal*26);
					totalBlocksPlaced++;
        }
} //Snowy Plains

function genTerrain12() {
    for (var blocksPlaced = 0; blocksPlaced < biomeSize; blocksPlaced++) {
        if (noiseCoeff < 0.0012) {
            noiseCoeff = noiseCoeff + 0.01;
            if(noiseCoeff > 0.0012)  {
                noiseCoeff = 0.0012;
            }
        }
        if (noiseCoeff > 0.0012) {
            noiseCoeff = noiseCoeff - 0.01;
            if(noiseCoeff < 0.0012)  {
                noiseCoeff = 0.0012;
            }
        }
        noiseVal = (noise(totalBlocksPlaced*noiseCoeff))*height/22;
          blockDeath(totalBlocksPlaced, noiseVal*26);
					totalBlocksPlaced++;
        }
} //Death Land

function genTerrain13() {
    for (var blocksPlaced = 0; blocksPlaced < biomeSize; blocksPlaced++) {
        if (noiseCoeff < 0.00021) {
            noiseCoeff = noiseCoeff + 0.01;
            if(noiseCoeff > 0.00021)  {
                noiseCoeff = 0.00021;
            }
        }
        if (noiseCoeff > 0.00021) {
            noiseCoeff = noiseCoeff - 0.01;
            if(noiseCoeff < 0.00021)  {
                noiseCoeff = 0.00021;
            }
        }
        noiseVal = (noise(totalBlocksPlaced*noiseCoeff))*height/22;
          blockMagic(totalBlocksPlaced, noiseVal*26);
					totalBlocksPlaced++;
        }
} //Mystical Plains

function genTerrain14() {
        for (var biomes = 0; biomes < 55; biomes++) {
        biomeSize = floor(random(500, 750));
        biomeSel = floor(random(1, 11));
        if (biomeSel === 1) {
              	genTerrain1();
        }
        if (biomeSel === 2) {
                genTerrain2
        }
        if (biomeSel === 3) {
                genTerrain3();
        }
        if (biomeSel === 4) {
                genTerrain4();
        }
        if (biomeSel === 5) {
                genTerrain5();
        }
        if (biomeSel === 6) {
                genTerrain7();
        }
        if (biomeSel === 7) {
                genTerrain10();
        }
        if (biomeSel === 8) {
                     genTerrain11();
        }
        if (biomeSel === 9) {
                     genTerrain12();
        }
        if (biomeSel === 10) {
                     genTerrain13();
        }
    }
}//Blend Biomes
