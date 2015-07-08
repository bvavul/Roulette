var computerChoice= "";
var userStreak = "";
function losingchance() {
	userStreak++;
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
}

 window.onbeforeunload = function() {
        return "Dude, are you sure you want to leave? Think of the awesome streak you built up(It won't let you lose anyway.)";
};