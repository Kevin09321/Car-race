class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    carA = createSprite(100,500);
    carB = createSprite(100,600);
    carC = createSprite(100,700);
    carD = createSprite(100,800);
    carA.addImage(car1I);
    carB.addImage(car2I);
    carC.addImage(car3I);
    carD.addImage(car4I);
    carArray = [carA,carB,carC,carD];
  }

  end(){
    form.end();
    gameSpeed = gameSpeed + 1;

  }

  play(){
    

    textSize(30);
    text("Game Started");
    Player.getPlayerInfo();
    player.getPlayerRank();
    form.hide();
    if (playerArray !== undefined){
      background(groundImage);
      image(trackImage,0,-displayHeight*10,displayWidth,displayHeight*11);
      var displayPosition = displayHeight/5;
      var index = 0;
      var x1 = 250;
      var y1;
      for (var plr in playerArray){
        index = index+1;
        x1 = x1+275;
        y1 = displayHeight-playerArray[plr].distance;
        carArray[index-1].x = x1;
        carArray[index-1].y = y1;
        if (index === player.index){
          fill("red");
          carArray[index-1].shapeColor="red";
          camera.position.x = displayWidth/2;
          camera.position.y = carArray[index-1].y;
          fill("red");
          ellipse(x1,y1,60,60)
        }

        else {
          fill("black");
        }
        displayPosition = displayPosition + 20;
        textSize(15);
        text(playerArray[plr].name + "  :  " + playerArray[plr].distance, 120, displayPosition);

      }
    }
    if (player.rank === 0){
    if (keyIsDown(UP_ARROW) && player.idex !== null){
      player.distance = player.distance + 50;
      player.update();

    }
    if (keyIsDown(DOWN_ARROW) && player.idex !== null){
      player.distance = player.distance - 50;
      player.update();

    }
  }
  if (player.rank === 1){
    if (keyIsDown(UP_ARROW) && player.idex !== null){
      player.distance = player.distance + 25;
      player.update();

    }
    if (keyIsDown(DOWN_ARROW) && player.idex !== null){
      player.distance = player.distance - 25;
      player.update();

    }
  }
  if (player.rank === 2){
    if (keyIsDown(UP_ARROW) && player.idex !== null){
      player.distance = player.distance + 15;
      player.update();

    }
    if (keyIsDown(DOWN_ARROW) && player.idex !== null){
      player.distance = player.distance - 15;
      player.update();

    }
  }
  if (player.rank === 3){
    if (keyIsDown(UP_ARROW) && player.idex !== null){
      player.distance = player.distance + 10000;
      player.update();

    }
    if (keyIsDown(DOWN_ARROW) && player.idex !== null){
      player.distance = player.distance - 10000;
      player.update();

    }
  }
    drawSprites();
    if (player.distance > 11500){
      player.rank = player.rank + 1;
      Player.updatePlayerRank(player.rank);
      gameState = 2;
    }
  }
}
