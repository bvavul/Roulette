var computerChoice = 20;
var userStreak;
function WinnerOrNot() {
	userStreak++;
	computerChoice = Math.floor(Math.random()*6);
		if (computerChoice === 1) {
			displayUserScore(userStreak);
			onehundredcheck(userStreak);
		}
		else if(computerChoice === 2) {
			displayUserScore(userStreak);
			onehundredcheck(userStreak);
		}
		else if(computerChoice === 3) {
			displayUserScore(userStreak);
			onehundredcheck(userStreak);
		}
		else if(computerChoice === 4) {
			displayUserScore(userStreak);
			onehundredcheck(userStreak);
		}
		else if(computerChoice === 5) {
			displayUserScore(userStreak);
			onehundredcheck(userStreak);
		}
		else {
			alert("Gooood Morning(Or afternoon. Or night.) You died a horrible, slow, painful death. Please try again. Sadly, your streak was " + userStreak + " wins.");
			userStreak = 0;
		}
	return;
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