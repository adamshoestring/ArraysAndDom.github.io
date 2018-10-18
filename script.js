let fruit = [" Blueberry "," Apple "," Banana "];
document.getElementById("fruitsH1").innerHTML = fruit;

function addFruitToEnd() {
	fruit.push(document.getElementById("fruitId").value);
	console.log(fruit);
	document.getElementById("fruitsH1").innerHTML = fruit.join(" with ");
	

}