class Player {
  constructor(){
    this.name = null;
    this.distance = 0;
    this.index = 0;
    this.rank = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }
  getPlayerRank(){
    var playerRankRef = database.ref("finished");
    playerRankRef.on("value",(data)=>{
      this.rank = data.val();
    });
  }
  static updatePlayerRank(rank){
    database.ref("/").update({
      finished: rank
    });
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
  

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerArrayRef= database.ref("players");
    playerArrayRef.on("value",(data)=>{
      playerArray = data.val();
    });

    

  }
  updatePlayerInfo(){
    database.ref("/").update({
players: null
    });
  }
}
