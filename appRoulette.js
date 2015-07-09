var computerChoice= "";
var userStreak = "";
function losingchance() {
	userStreak++;
	computerChoice = Math.floor(Math.random()*6);
		if (computerChoice === 6){
			computerChoice = "lost";
				userStreak = 0;
		}
		else if(computerChoice === 1) {
			computerChoice = "chosen";
				displayUserScore(userStreak);
		}
		else if(computerChoice === 2) {
			computerChoice = "chosen";
				displayUserScore(userStreak);
		}
		else if(computerChoice === 3) {
			computerChoice = "chosen";
				displayUserScore(userStreak);
		}
		else if(computerChoice === 4) {
			computerChoice = "chosen";
				displayUserScore(userStreak);
		}
		else {
			computerChoice = "chosen";
				displayUserScore(userStreak);
		}
}
/* DO NOT USE
window.onbeforeunload = function() {
    return "Press the 'stay on page' button below. I put a concrete wall so this won't refresh(Due to glitches).";
};
*/
var displayUserScore = function() {
	document.getElementById('score').innerHTML = "Your streak is " + userStreak + ".";
};