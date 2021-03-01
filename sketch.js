var canvas, backgroundImage;
var bgImg
var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var form, contestant, game;

function preload(){
 bgImg = loadImage("background.jpg")
}

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(bgImg)
  if(contestantCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  
}
