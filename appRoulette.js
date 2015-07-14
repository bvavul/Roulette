var computerChoice = "";
var userStreak = "";
function WinnerOrNot() {
	userStreak++;
	computerChoice = Math.floor(Math.random()*6);
		if (computerChoice === 1) {
			displayUserScore(userStreak);
		}
		else if(computerChoice === 2) {
			displayUserScore(userStreak);
		}
		else if(computerChoice === 3) {
			displayUserScore(userStreak);
		}
		else if(computerChoice === 4) {
			displayUserScore(userStreak);
		}
		else if(computerChoice === 5) {
			displayUserScore(userStreak);
		}
		else
			alert("Gooood Morning(Or afternoon. Or night.) You died a horrible, slow, painful death. Try not to visualize this. Oops, you might have already. But hey, wanna hear a secret? Get to 100 streak and I'll tell you. Please try again. Sadly, your streak was " + userStreak + " wins.");
			userScore = 0;
}
var displayUserScore = function() {
	document.getElementById('paragraph').innerHTML = "Your streak is " + userStreak + ".";
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