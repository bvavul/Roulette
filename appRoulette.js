var computerChoice= "";
var userStreak = "";
function lifeordeath() {
	userStreak++;
	computerChoice = Math.floor(Math.random()*6);
		if (computerChoice === 5){
			computerChoice = "chosen";
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
			computerChoice = "lost";
				userStreak = 0;
				displayUserScore(userStreak);
				alert("Gooood Morning(Or afternoon. Or night.). You died a horrible, slow, painful death. Please try again.");
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
