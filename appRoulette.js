var highStreak = 20;
var computerChoice = 0;
var userStreak = "";
var laststreak = "";
function WinnerOrNot() {
	userStreak++;
	computerChoice = Math.floor(Math.random()*6);
		if(computerChoice === 1) {
			displayUserScore(userStreak);
			displaylaststreak(lastStreak);
		}
		else if(computerChoice === 2) {
			displayUserScore(userStreak);
			displayHighStreak(highStreak);
			displaylaststreak(lastStreak);
		}
		else if(computerChoice === 3) {
			displayUserScore(userStreak);
			displayHighStreak(highStreak);
			displaylaststreak(lastStreak);
		}
		else if(computerChoice === 4) {
			displayUserScore(userStreak);
			displayHighStreak(highStreak);
			displaylaststreak(lastStreak);
		}
		else if(computerChoice === 5) {
			displayUserScore(userStreak);
			displayHighStreak(highStreak);
			displaylaststreak(lastStreak);
		}
		else {
			userStreak--;
			alert("Gooood Morning(Or afternoon. Or night.) You died a horrible, slow, painful death. Please try again. Sadly, your streak was " + userStreak + " wins.");
			lastStreak = userStreak;
			userStreak = 0;
		}
	return;
}
var displayUserScore = function() {
	document.getElementById('paragraph').innerHTML = "Your streak is " + userStreak + ".";
};
var displayHighStreak = function() {
	document.getElementById('paragraph2').innerHTML = "The highscore is " + highStreak + ".";
};
var displaylaststreak = function() {
	document.getElementById('paragraph3').innerHTML = "Your last streak count was " + lastStreak + ".";
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
