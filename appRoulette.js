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
		else {
			computerChoice = "lost";
				userStreak = 0;
		}
}

 window.onbeforeunload = function() {
        return "Press the 'stay on page' button below. I put a brick wall so this won't refresh(Due to glitches).";
};