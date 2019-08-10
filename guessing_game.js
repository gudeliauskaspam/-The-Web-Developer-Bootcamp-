var secret = 6;

var stringGuess = prompt("Tente adivinhar o número: ");
var guess = Number(stringGuess);

if(guess === secret) {
	alert("Acertou! :)");
}
else if (guess < secret){
	alert("Esse número é menor que o número secreto, tente novamente!");
}
else {
	alert("Esse número é maior que o número secreto, tente novamente!");
}