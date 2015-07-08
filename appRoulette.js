var computerChoice= "";
var userStreak = "";
function losingchance() {
	computerChoice = Math.floor(Math.random()*6);
		if(computerChoice === 1) {
			computerChoice = "chosen";
				displayUserScore(userStreak);
		}
		if(computerChoice === 2) {
			computerChoice = "chosen";
				displayUserScore(userStreak);
		}
		if(computerChoice === 3) {
			computerChoice = "chosen";
				displayUserScore(userStreak);
		}
		if(computerChoice === 4) {
			computerChoice = "chosen";
				displayUserScore(userStreak);
		}
		if(computerChoice === 5) {
			computerChoice = "chosen";
				displayUserScore(userStreak);
		}
		if(computerChoice === 6) {
			comptuerChoice = "lost";
				userStreak = 0;
		}
		document.getElementById('streak').innerHTML = "Your winning streak is " + userStreak + ".";
		return;
}