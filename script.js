//your code here
const guessedNo = document.getElementById("guess");
const btn = document.getElementById("submit");
const respond = document.getElementById("respond");

const secretNo = Math.floor(Math.random()*100);

btn.onclick = () => {
	if(parseInt(guessedNo.value) < secretNo){
		respond.textContent = "guess higher";
	} else if(parseInt(guessedNo.value) > secretNo) {
		respond.textContent = "guess lower";
	} else {
		respond.textContent = "correct number";
	}
}




