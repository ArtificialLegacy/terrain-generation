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
