var planeta1;
var planeta2;
var planeta3;
var explosao;
var alienzinho;
var metoro;
var metoro2;
var gpmetoros;
var dofundo;
var spritedoalienzinho;
var estado=0;
function preload(){

    dofundo = loadImage("background_universo.jpg");

    planeta1 = loadImage("planeta1.png");
    planeta2 = loadImage("planeta2.png");
    planeta3 = loadImage("planeta3.png");

    alienzinho = loadAnimation("alienzinho.png");
    metoro = loadImage("metoro.png");

    explosao = loadAnimation("explosão2.png", "explosao1.png", "explosão3.png");
    explosao.looping = false;
    explosao.playing = true;

}

function setup() {
    createCanvas(windowWidth, windowHeight);

    spritedoalienzinho = createSprite(windowWidth/2, windowHeight/2, 20, 20);

    spritedoalienzinho.addAnimation("alienzinho", alienzinho);

    gpmetoros = new Group();

    explosao.frameDelay = 8;

    spritedoalienzinho.debug = false;
    spritedoalienzinho.setCollider("circle", 0,-15,45);
}

function draw() {
 background(dofundo);
 drawSprites();

    if(spritedoalienzinho.isTouching(gpmetoros)){
        spritedoalienzinho.addAnimation("explosao", explosao);
        spritedoalienzinho.changeAnimation("explosao");
        spritedoalienzinho.scale = 0.73;
        
        estado=1;

        gpmetoros.destroyEach()

        gpmetoros.setVelocityXEach(0);
        }

    if(estado==0){
        spritedoalienzinho.y = mouseY;
        spritedoalienzinho.x = mouseX;

        asteroides();
    }

    if(estado==1){
        fill("black");
        stroke("blue");
        strokeWeight(10);
        textSize(150);
        text("FIM DE JOGO!", windowWidth/2 -480, windowHeight/2);

        fill("black");
        stroke("blue");
        strokeWeight(10);
        textSize(50);
        text("PRESSIONE ESPAÇO PARA RECOMEÇAR", windowWidth/2 -470, windowHeight/2 +195);
    
        if(keyDown("space")){
            estado = 0;

            spritedoalienzinho.changeAnimation("alienzinho");
            spritedoalienzinho.scale = 0.73;
        }
    }

}

function asteroides(){

    if(frameCount%10 == 0){
        metoro2 = createSprite(windowWidth, windowHeight, 20, 20);

        metoro2.addImage(metoro);

        metoro2.velocityX = -13;
        metoro2.y = random(0, windowHeight);

        metoro2.scale = 0.5;

        metoro2.lifetime = 108;

        gpmetoros.add(metoro2);
    }
}