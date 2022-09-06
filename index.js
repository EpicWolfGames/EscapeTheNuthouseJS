// when the new game button is pressed
function NewGameStart() {
  setTimeout(function() {
    document.getElementById("DivTitleScreenID").innerHTML = "";
    document.body.style.background = "black";
    document.getElementById("NewGameTestID").innerHTML = "<h1>Loading...</h1>";
    setTimeout(function() {
      document.getElementById("NewGameTestID").innerHTML = "";
      document.body.style.background = "cyan";
    }, 5000);
  }, 500);
}
// when the load game button is pressed
function LoadGameStart() {
  setTimeout(function() {
  document.getElementById("DivTitleScreenID").innerHTML = "";
  document.getElementById("CreditsCenterID").innerHTML = "<h1>Coming soon...</h1> <input onclick='BackToTitleScreen();' type='button' value='BACK'>";
  }, 500);
}
// when the credits button is pressed
function CreditsStart() {
  setTimeout(function() {
  document.getElementById("DivTitleScreenID").innerHTML = "";
  document.getElementById("CreditsCenterID").innerHTML = "<h1>Coming soon...</h1> <input onclick='BackToTitleScreen();' type='button' value='BACK'>";
  }, 500);
}
// takes you back to title screen
function BackToTitleScreen() {
  setTimeout(function() {
  document.getElementById("CreditsCenterID").innerHTML = "";
  document.getElementById("DivTitleScreenID").innerHTML = "<h1>ESCAPE THE NUTHOUSE!</h1><br><input onclick='NewGameStart();' type='button' value='NEW GAME'><br><br><input onclick='LoadGameStart();' type='button' value='LOAD GAME'><br><br><input onclick='CreditsStart();' type='button' value='CREDITS'><div class='MenuChar'><div class='MenuPixels'></div></div><h5 id='EWGProductions'>AN EPICWOLF GAMES PRODUCTION</h5>";
  }, 500);
}
// placeholder code please remember. 
// document.getElementById("LevelsJS").innerHTML = "<script src='levels.js'></script>";
// document.getElementById("LevelsCSS").innerHTML = "<link rel='stylesheet' href='levels.css'>";
// document.getElementById("CutscenesJS").innerHTML = "<script src='cutscenes.js'></script>";
// document.getElementById("CutscenesCSS").innerHTML = "<link rel='stylesheet' href='cutscenes.css'>";
// these lines of code are used in start game
