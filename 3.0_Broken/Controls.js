function draw() {
  if (keyIsDown(65)) {
    clear();
		var biomeSize = 30000;
		genTerrain1();
		noiseSeed(seedVal)
    } //A
	
  if (keyIsDown(83)) {
    clear();
		var biomeSize = 30000;
		genTerrain2();
		noiseSeed(seedVal)
    } //S
	
	if (keyIsDown(68)) {
		clear();
		var biomeSize = 30000;
		genTerrain3();
		noiseSeed(seedVal)
	} //D
	
	if (keyIsDown(70)) {
		clear();
		var biomeSize = 30000;
		genTerrain4();
		noiseSeed(seedVal)
	} //F
	
	if (keyIsDown(71)) {
		clear();
		var biomeSize = 30000;
		genTerrain5();
		noiseSeed(seedVal)
	} //G
	
	if (keyIsDown(72)) {
		clear();
		var biomeSize = 30000;
		genTerrain6();
		noiseSeed(seedVal)
	} //H
	
	if (keyIsDown(74)) {
		clear();
		var biomeSize = 3000;
		genTerrain7();
		noiseSeed(seedVal)
	} //J
	
	if (keyIsDown(75)) {
		clear();
		var biomeSize = 30000;
		genTerrain8();
	} //K

	if (keyIsDown(76)) {
		clear();
	} //L

	if (keyIsDown(90)) {
		clear();
		var biomeSize = 30000;
		genTerrain9();
	} //Z
	
	if (keyIsDown(88)) {
		clear();
		var biomeSize = 30000;
		genTerrain10();
		noiseSeed(seedVal)
	} //X
	
	if (keyIsDown(67)) {
		clear();
		var biomeSize = 30000;
		genTerrain11();
		noiseSeed(seedVal)
	} //C
	
	if (keyIsDown(86)) {
		clear();
		var biomeSize = 30000;
		genTerrain12();
		noiseSeed(seedVal)
	} //V
	
	if (keyIsDown(66)) {
		clear();
		var biomeSize = 30000;
		genTerrain13();
		noiseSeed(seedVal)
	} //B

	if (keyIsDown(78)) {
		clear();
		var biomes = 0;
		genTerrain14();
		noiseSeed(seedVal)
	} //N
}
