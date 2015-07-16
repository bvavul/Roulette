var highStreak = 20;
var computerChoice = 0;
var userStreak = "";
var testing = 100;
function WinnerOrNot() {
	userStreak++;
	computerChoice = Math.floor(Math.random()*6);
		if(computerChoice === 1) {
			displayUserScore(userStreak);
		}
		else if(computerChoice === 2) {
			displayUserScore(userStreak);
			displayHighStreak(highStreak);
		}
		else if(computerChoice === 3) {
			displayUserScore(userStreak);
			displayHighStreak(highStreak);
		}
		else if(computerChoice === 4) {
			displayUserScore(userStreak);
			displayHighStreak(highStreak);
		}
		else if(computerChoice === 5) {
			displayUserScore(userStreak);
			displayHighStreak(highStreak);
		}
		else {
			userStreak--;
			alert("Gooood Morning(Or afternoon. Or night.) You died a horrible, slow, painful death. Please try again. Sadly, your streak was " + userStreak + " wins.");
			lastStreak = userStreak;
			userStreak = 0;
		}
	return;
}

var displayHighStreak = function() {
	document.getElementById('paragraph2').innerHTML = "The highscore is " + highStreak + ".";
};

if (typeof(Storage) != "undefined") {
    // Store
    localStorage.setItem("highscore", highstreak);
    // Retrieve
    document.getElementById("memory").innerHTML = localStorage.getItem("highscore");
}
else if (testing === 100)
	document.getElementById('memory').innerHTML = "Your streak is " + userStreak + ".";
else {
    document.getElementById("memory").innerHTML = "Sorry, your browser does not support Web Storage...";
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
