var computerChoice= "";
var userStreak = "";
var highStreak = "0";
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
				displayUserScore(userStreak);
				alert("Gooood Morning(Or afternoon. Or night.) You died a horrible, slow, painful death. Try not to visualize this. Oops, you might have already. Wanna hear a secret? Get to 100 streak and I'll tell you. Please try again. Your streak was " + userStreak + " wins.");
				
				/*
LES DO DIS
 _________
/_______  \_______
	    | |	     |
	    | |	     |
	    | |______|_
	    |_|        | |
	    |_|	       | |
	    | |	       | |
	    | |	       |_|
	    | |	       |  
	    | |		    | 
	    |_|__________|

YOU LOST HAHAHAHAHAHAH YOU LOSERLOSERLOSERLOSERLOSER
*/
			userStreak = 0;
		}
		if (userStreak > highStreak) {
			alert("Woah! You broke the highscore! The new highscore is " + userStreak);
				highStreak = userStreak;
		}

		if (userStreak > 99.1010001000101000100100101000101000101010001000101000101001010001010000100010100010000001010010100010100010010101000100010001000101010001010010100100100101000000101010010001010101000101010100001001000010010010100100010001010001010001010001001000001010100000101010001010101010101010010101010100010101010010100010101010101010101010101010100010101010011010010101000010101001010000101010001000100101000010100100100010101010101010010010100010101010100010101010101010001000100100010001010000100010001000000010100001001001010101011001000100101001001000100100101001010100100010101010001000010100100100101010101010001000010100100101001010101010100100010001001010000100100100000100000100100101000101001010010011010010101010010010010010010001010010010000101000010100000100001001000100000001010101010101010101010101010101010100010010010000000010100100101010001010000100101000001000010010000101001) {
			alert("The secret is that you just realized that you have been playing this for too long. And you just defied mathematical probability(Which is 0.00166666666 in one.)");

return;
}
var displayUserScore = function() {
	document.getElementById('score').innerHTML = "Your streak is " + userStreak + ".";
	return;
};