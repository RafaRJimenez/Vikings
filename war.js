function Viking(name, strength, health, age){
	this.name = name;
	this.strength = strength;
	this.health = health;
	this.age = age;
}

function fight(viking1, viking2){
	while (viking1.health >= 10 || viking2.health >= 10){ 
	viking1.health = viking1.health - viking2.strength;
	viking2.health = viking2.health - viking1.strength;
	if (viking1.health > 0 && viking2.health > 0){
		alert ("la salud de " + viking1.name + " es de " + viking1.health);
		alert ("la salud de " + viking2.name + " es de " + viking2.health);
	}
	}
	if (viking1.health < 0){
			viking1.health = viking1.health + viking2.strength;
		}
	if (viking2.health < 0){
			viking2.health = viking2.health + viking1.strength;
		}
	alert ("el entrenamiento ha terminado, la salud de cada vikingo es la siguiente");
	alert ("la salud de " + viking1.name + " es de " + viking1.health);
	alert ("la salud de " + viking2.name + " es de " + viking2.health);
}

var Jofrey = new Viking("jofrey", 20, 80, 45);
var Ragnar = new Viking("ragnar", 15, 90, 25);