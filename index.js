//Generating random numbers for the dices for imgSrc1 and imgSrc2
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Replacing the left Image with a randomly generated image.
var diceImg1 = "images/dice"+randomNumber1+".png";
document.querySelector("img.img1").setAttribute("src", diceImg1);

//Replacing the right Image with a randmly generated image.

var diceImg2 = "images/dice"+randomNumber2+".png";
document.querySelector("img.img2").setAttribute("src", diceImg2);

//Changing header text based on the numbers generated (To show which Player won)
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins !";
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins !";
}
else {
  document.querySelector("h1").innerHTML = "Draw! Play Again";
}
