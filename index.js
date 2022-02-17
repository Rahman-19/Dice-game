// function to roll the dice
  function toroll(){
  var randomNumber1 = Math.floor(Math.random()*6)+1;
  var randomDiceimage1= "images/dice" + randomNumber1 + ".png";

  var randomNumber2 = Math.floor(Math.random()*6)+1;
  var randomDiceimage2 = "images/dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[0].setAttribute("src", randomDiceimage1);
    document.querySelectorAll("img")[1].setAttribute("src", randomDiceimage2);


    if(randomNumber1 === randomNumber2){
      document.querySelector("h1").innerHTML="Draw!🙌";
    }
    else if(randomNumber1<randomNumber2){
      document.querySelector("h1").innerHTML="player2 Wins!🚩";
    }
    else{
      document.querySelector("h1").innerHTML="player1 Wins!🚩";
    }
}

document.querySelector("button").addEventListener("click",toroll);
