
var computerChoice = "";
var userStreak = "";
function WinnerOrNotHereICome() {
	userStreak++;
	computerChoice = Math.floor(Math.random()*6);
		if (computerChoice === 5){
			computerChoice = "lost";
				displayUserScore(userStreak);
				alert("Gooood Morning(Or afternoon. Or night.) You died a horrible, slow, painful death. Try not to visualize this. Oops, you might have already. But hey, wanna hear a secret? Get to 100 streak and I'll tell you. Please try again. Sadly, your streak was " + userStreak + " wins.");
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
		else
			computerChoice = "lost";
				computerChoice = "lost";
				userScore = 0;
return;
}
var displayUserScore = function() {
	document.getElementById('score').innerHTML = "Your streak is " + userStreak + ".";
};
/*
LES DO DIS
 _________
/_______  \______
	    | | _  _ |
	    | |	 __  |
	    | |______|___
	    |_|        | |
	    |_|	       | |
	    | |	       | |
	    | |	       |_|
	    | |	       |  
	    | |		    | 
	    |_|__________|
YOU LOST HAHAHAHAHAHAH YOU LOSERLOSERLOSERLOSERLOSER
*/