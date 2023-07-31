class Player {
  constructor (){}


getCount(){
  // 3.leia os dados e armazene o valor de playerCount
  var playerCountRef = database.ref('playerCount');
  playerCountRef.on("value",(data)=>{
    playerCount = data.val();
  })


  
}

updateCount (count){
  //4. atualize o playerCount
  database.ref("/").update({
    playerCount: count
  });
}
}
//5. ir para FORM.js
