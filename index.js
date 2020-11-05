function loadDice() {
	var diceRoll1 = (Math.floor(Math.random() * 10) % 6) + 1;
	console.log(diceRoll1);
	var diceRoll2 = (Math.floor(Math.random() * 10) % 6) + 1;
	console.log(diceRoll2);
	document
		.querySelector("img.img1")
		.setAttribute("src", "images/dice" + diceRoll1 + ".png");
	document
		.querySelector("img.img2")
		.setAttribute("src", "images/dice" + diceRoll2 + ".png");
	if (diceRoll1 > diceRoll2)
		document.querySelector("h1").innerHTML = "🏳️‍🌈Player 1 won";
	else if (diceRoll1 < diceRoll2)
		document.querySelector("h1").innerHTML = " Player 2 won🏳️‍🌈";
	else document.querySelector("h1").innerHTML = "Its a draw! Roll again!";
}
