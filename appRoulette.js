var computerChoice= "";
var userStreak = "";
function losingchance() {
	computerChoice = Math.floor(Math.random()*6);
		if(computerChoice === 1){
			computerChoice = "chosen";
				alert("You won! Your streak is " + userStreak + " wins.");
		}
		if(computerChoice === 2){
			computerChoice = "chosen";
				alert("You won! Your streak is " + userStreak + " wins.");
		}
		if(computerChoice === 3){
			computerChoice = "chosen";
				alert("You won! Your streak is " + userStreak + " wins.");
		}
		if(computerChoice === 4){
			computerChoice = "chosen";
				alert("You won! Your streak is " + userStreak + " wins.");
		}
		if(computerChoice === 5){
			computerChoice = "chosen";
				alert("You won! Your streak is " + userStreak + " wins.");
		}
		if(computerChoice === 6){
			computerChoice = "lost";
				alert("You have lost. Press the button and try again.");
		}
}