var canvas, backgroundImage;

var gameState = 0;
var gameSpeed = 0;
var playerCount;

var database;

var form, player, game;

var car1I,car2I,car3I,car4I;

var groundImage;

var playerArray;

var carA,carB,carC,carD, carArray;

function preload(){
car1I = loadImage("images/car1.png");
car2I = loadImage("images/car2.png");
car3I = loadImage("images/car3.png");
car4I = loadImage("images/car4.png");

groundImage = loadImage("images/ground.png");
trackImage = loadImage("images/track.jpg");


}

function setup(){
  canvas = createCanvas(displayWidth-50,displayHeight-175);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();



}


function draw(){
  
  if (playerCount === 4){
    game.update(1);
    
  }
  if (gameState === 1){
    clear();
    game.play();
  }
  if (gameState === 2){
    game.end();
  }
}




















