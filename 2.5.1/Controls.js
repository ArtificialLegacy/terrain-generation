function draw() {
  if (keyIsDown(65)) {
    clear();
		genTerrain1();
		noiseSeed(seedVal)
    } //A
	
  if (keyIsDown(83)) {
    clear();
		genTerrain2();
		noiseSeed(seedVal)
    } //S
	
	if (keyIsDown(68)) {
		clear();
		genTerrain3();
		noiseSeed(seedVal)
	} //D
	
	if (keyIsDown(70)) {
		clear();
		genTerrain4();
		noiseSeed(seedVal)
	} //F
	
	if (keyIsDown(71)) {
		clear();
		genTerrain5();
		noiseSeed(seedVal)
	} //G
	
	if (keyIsDown(72)) {
		clear();
		genTerrain6();
		noiseSeed(seedVal)
	} //H
	
	if (keyIsDown(74)) {
		clear();
		genTerrain7();
		noiseSeed(seedVal)
	} //J
	if (keyIsDown(76)) {
			clear();
	} //L
		if (keyIsDown(90)) {
		clear();
		var biomeSize = 30000;
		genTerrain9();
	} //Z
		if (keyIsDown(75)) {
		clear();
		var biomeSize = 30000;
		genTerrain8();
	} //K
}
