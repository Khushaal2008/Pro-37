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
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        form = new Form()
        form.display();
      }
    }
  
    play(){
      form.hide();
      background("yellow")
      text("the green color heighlited nam is the we")
     Contestant.getPlayerInfo();
  
      if(allContestants !== undefined){
  
        var display_position = 230;

        for(var plr in allContestants){
          
          var correctAns = "2"
        //  if (correctAns === allContestants[plr].answer)
          
        // else
         //   fill("yellow")
          
        display_position+=30;
         textSize(15);
          text(allContestants[plr].name + ": " + allContestants[plr].answer, 120,display_position)
        }
    }

   

}
}