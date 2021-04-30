var player; 

function setup() {
    createCanvas(800, 400); 

    player = createSprite(100, 350, 50, 50); 
    player.shapeColor = "red"; 
}

function draw() {
    background("white"); 

    text("Hello everyone, This is my own game. Please enjoy it for a second", 400, 200);
}