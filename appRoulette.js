var highStreak = 20;
var computerChoice = 0;
var userStreak = "";
function WinnerOrNot() {
	userStreak++;
	computerChoice = Math.floor(Math.random()*6);
		if(computerChoice === 1) {
			testForHighStreak(userStreak, highStreak);
		}
		else if(computerChoice === 2) {
			testForHighStreak(userStreak, highStreak);
			displayHighStreak(highStreak);
		}
		else if(computerChoice === 3) {
			testForHighStreak(userStreak, highStreak);
			displayHighStreak(highStreak);
		}
		else if(computerChoice === 4) {
			testForHighStreak(userStreak, highStreak);
			displayHighStreak(highStreak);
		}
		else if(computerChoice === 5) {
			testForHighStreak(userStreak, highStreak);
			displayHighStreak(highStreak);
		}
		else {
			userStreak--;
			alert("Gooood Morning(Or afternoon. Or night.) You died a horrible, slow, painful death. Please try again. Sadly, your streak was " + userStreak + " wins.");
			userStreak++;
			userStreak = 0;
		}
	return;
}

var displayHighStreak = function() {
		document.getElementById('paragraph2').innerHTML = "The highscore is " + highStreak + ".";
};

function testForHighStreak() {
	if (userStreak > highStreak) {
		highStreak = userStreak;
	}
}

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
