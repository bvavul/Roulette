var highStreak = 10;
var computerChoice = 0;
var userStreak = "";
function WinnerOrNot() {
	userStreak++;
	computerChoice = Math.floor(Math.random()*6);
		if(computerChoice === 1) {
			displayUserScore(userStreak);
			displayHighStreak(highStreak);
			checkForHighScore(userStreak, highStreak);
			onehundred(userStreak);
		}
		else if(computerChoice === 2) {
			displayUserScore(userStreak);
			displayHighStreak(highStreak);
			checkForHighScore(userStreak, highStreak);
			onehundred(userStreak);
		}
		else if(computerChoice === 3) {
			displayUserScore(userStreak);
			displayHighStreak(highStreak);
			checkForHighScore(userStreak, highStreak);
			onehundred(userStreak);
		}
		else if(computerChoice === 4) {
			displayUserScore(userStreak);
			displayHighStreak(highStreak);
			checkForHighScore(userStreak, highStreak);
			onehundred(userStreak);
		}
		else if(computerChoice === 5) {
			displayUserScore(userStreak);
			displayHighStreak(highStreak);
			checkForHighScore(userStreak, highStreak);
			onehundred(userStreak);
		}
		else {
			userStreak--;
			alert("Gooood Morning(Or afternoon. Or night.) You LOST! Please try again. Sadly, your streak was " + userStreak + " wins.");
			userStreak++;
			userStreak = 0;
		}
return;
}
var displayUserScore = function() {
	document.getElementById('paragraph').innerHTML = "Your streak is " + userStreak + ".";
};
var displayHighStreak = function() {
	//New code to test on line 50.
	if(userStreak > highStreak) {
		highStreak = userStreak;
		document.getElementById('paragraph2').innerHTML = "The highscore is " + highStreak + ".";
	}
	else {
		document.getElementById('paragraph2').innerHTML = "The highscore is " + highStreak + ".";
	}
};

function checkForHighScore() {
	if(userStreak > highStreak) {
		highStreak = userStreak;
	}
}

function onehundred() {
	if(userStreak > 100) {
		userStreak = 0;
		alert("You have reached 100 streak. Good job. You just defied mathematical probability. And I reset your streak to 0. TROOOLLLLLEEEEDDD");
	}
	else {
		checkForHighScore();
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