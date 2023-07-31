var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");

  car1_img = loadImage ("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage ("assets/track.jpg");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);
  // atualize estado do jogo
 //7 CRIAR CONDIÇÃO PARA INICIAR SE OUVER 2 JOGADORES
 if(playerCount ===2){
  game.update(1);
 }
  if (gameState === 1) {
    game.play();
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
