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
			computerChoice = "lost";
				userStreak = 0;
					alert("You have lost. Please try again. ");
		}
		document.getElementById('streak').innerHTML = "Your winning streak is " + userStreak + ".";
		return;
}

 window.onbeforeunload = function() {
        return "Dude, are you sure you want to leave? Think of the awesome streak you built up(It won't let you lose anyway.)";
    };