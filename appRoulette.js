var computerChoice= "";
var userStreak = "";
function losingchance() {
	userStreak++;
	computerChoice = Math.floor(Math.random()*6);
		if(computerChoice === 1) {
			computerChoice = "chosen";
				alert("You won! Your streak is " + userStreak + " wins.");
		}
		if(computerChoice === 2) {
			computerChoice = "chosen";
				alert("You won! Your streak is " + userStreak + " wins.");
		}
		if(computerChoice === 3) {
			computerChoice = "chosen";
				alert("You won! Your streak is " + userStreak + " wins.");
		}
		if(computerChoice === 4) {
			computerChoice = "chosen";
				alert("You won! Your streak is " + userStreak + " wins.");
		}
		if(computerChoice === 5) {
			computerChoice = "chosen";
				alert("You won! Your streak is " + userStreak + " wins.");
		}
		if(computerChoice === 6) {
			comptuerChoice = "lost";
				alert("You lost. Please press the button to try again.");
		}
}
function userScoreDisplay() {
	document.getElementById('score').innerHTML = "Your winning streak is " + userStreak + ".";
}