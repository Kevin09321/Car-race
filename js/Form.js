class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
    this.reset = createButton("Reset");
    
  }
end(){
  var message = createElement("h2");
  message.html("Nice job "+player.name+" Rank:  "+ player.rank);
  message.position(displayWidth/2,displayHeight/2-250)
}
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(windowWidth/2-70, 0);
    
    
    
    this.input.position(windowWidth/2-70, windowHeight/2);
    this.button.position(windowWidth/2-70, windowHeight/2+40);
    this.reset.position(100,100);

    this.reset.mousePressed(()=>{
      game.update(0);
      player.updateCount(0);
      player.updatePlayerInfo();
      Player.updatePlayerRank(0);
    });

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);

      
      this.greeting.html("Hello " + player.name )
      this.greeting.position(windowWidth/2-70, windowHeight/2)
    });


  }
  hide(){
    this.input.hide();
    this.greeting.hide();
    this.button.hide();
  }
}
