const bracket = document.getElementById('bracket');

window.addEventListener('load', () => {
  //const {Application, Graphics, Text, TextStyle} = PIXI;

  //const app = new Application({
    //  width: window.innerWidth,
   //   height: window.innerHeight,
   //   transparent: false,
   //   altialias: true
 // });

  //app.renderer.backgroundColor = 0x23395D;

 // app.renderer.resize(window.innerWidth, window.innerHeight);

 // document.body.appendChild(app.view);

  let themeColor = 'red';
  const colors = {
      red: 0xff0000,
      orange: 0xff8000,
      yellow: 0xffff00,
      green: 0x00ff00,
      blue: 0x0000ff,
      purple: 0xff00ff,
  }
  const name = "bracket"

  const eat = ["eating","eat","comer","stuffing face", "shoveling food", "hungry","dinner", "feed","snack","snack time","snackies", "starving"]
  
//   const circle = new Graphics();
//   app.stage.addChild(circle);
//   const loop = (delta) => {
    
//       circle.clear();        
//       circle.beginFill(colors[themeColor]);
//       circle.drawCircle(
//         (window.innerWidth / 2), 
//         (window.innerHeight / 2), 
//         window.innerWidth / 4
//       );

      
//   }

  //app.ticker.add(delta => loop(delta));

  window.addEventListener('onEventReceived', (event) => {
 if(event.detail.listener === 'message') {
         const message = event.detail.event.data.text;
        // const mentionedColor = Object.keys(colors).find(color => message.includes(color));
        
        
     const mentionedName = message.includes(name);
     const mentionedEat = eat.some(eatWord => message.includes(eatWord))
        //  if(mentionedColor) {
        //    themeColor = mentionedColor;
        // }
     
     if(mentionedName === true && mentionedEat === true){
          bracket.src = "https://media.tenor.com/DGJWIvIU6LMAAAAC/chewing-character-chewing.gif"
         setTimeout(() => {bracket.src = "https://cdn.streamelements.com/uploads/fd33e7db-2d1a-45a9-a6f3-53d78e2a6989.gif"; }, 5000);
          
         bracket.renderer.resize(window.innerWidth, window.innerHeight);
        
        }
      }
  })
})