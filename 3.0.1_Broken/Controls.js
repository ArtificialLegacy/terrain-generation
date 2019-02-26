function draw() {
  if (keyIsDown(65)) {
    clear();
		biomeSize = 30000;
		totalBlocksPlaced = 0;
		genTerrain1();
		noiseSeed(seedVal);
  } //A
	
  if (keyIsDown(83)) {
    clear();
		biomeSize = 30000;
		totalBlocksPlaced = 0;
		genTerrain2();
		noiseSeed(seedVal);
  } //S
	
	if (keyIsDown(68)) {
		clear();
		biomeSize = 30000;
		totalBlocksPlaced = 0;
		genTerrain3();
		noiseSeed(seedVal);
	} //D
	
	if (keyIsDown(70)) {
		clear();
		biomeSize = 30000;
		totalBlocksPlaced = 0;
		genTerrain4();
		noiseSeed(seedVal);
	} //F
	
	if (keyIsDown(71)) {
		clear();
		biomeSize = 30000;
		totalBlocksPlaced = 0;
		genTerrain5();
		noiseSeed(seedVal);
	} //G
	
	if (keyIsDown(72)) {
		clear();
		biomeSize = 30000;
		totalBlocksPlaced = 0;
		genTerrain6();
		noiseSeed(seedVal);
	} //H
	
	if (keyIsDown(74)) {
		clear();
		biomeSize = 30000;
		totalBlocksPlaced = 0;
		genTerrain7();
		noiseSeed(seedVal);
	} //J
	
	if (keyIsDown(75)) {
		clear();
		biomeSize = 30000;
		totalBlocksPlaced = 0;
		genTerrain8();
		noiseSeed(seedVal);
	} //K

	if (keyIsDown(76)) {
		clear();
		biomeSize = 30000;
		totalBlocksPlaced = 0;
		genTerrain9();
		noiseSeed(seedVal);
	} //L

	if (keyIsDown(90)) {
		clear();
		biomeSize = 30000;
		totalBlocksPlaced = 0;
		genTerrain10();
		noiseSeed(seedVal);
	} //Z
	
	if (keyIsDown(88)) {
		clear();
		biomes = 0;
		biomeSize = 0;
		totalBlocksPlaced = 0;
		noiseValue = 0.001;
		noiseInput = 0;
		genTerrain11();
		print(noiseValue);
		print(noiseInput);
		noiseSeed(seedVal);
	} //X
	
	if (keyIsDown(67)) {
		clear();
	} //C
}
