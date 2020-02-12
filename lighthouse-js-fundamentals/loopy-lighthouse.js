var numInt = 100;
while (numInt <= 200){
	if ((numInt % 3 === 0) && (numInt % 4 === 0)) {
		console.log("LoopyLighthouse");
	} else if (numInt % 3 === 0){
		console.log("Loopy");
	} else if (numInt % 4 ===0){
		console.log("Lighthouse");
	} else {
		console.log(numInt);
	}
	numInt++;
}