export default class Display {

  constructor(canvas, width, height, state) {

    this.canvas = canvas
    this.state = state
    this.ctx = this.canvas.getContext("2d")
    this.setWidth(width)
    this.setHeight(height)
  }

  setWidth(width) {
    this.canvas.width = width;
  }

  setHeight(height) {
    this.canvas.height = height;
  }

  drawObjects() {

    var monsters = this.state.getMonsters()

    monsters.forEach(monster => {
      this.ctx.beginPath();
      this.ctx.arc(monster.x, monster.y, 10, 0, Math.PI * 2);
      this.ctx.fillStyle = "#0095DD";
      this.ctx.fill();
      this.ctx.closePath();
    })
  }

  drawPlayer() {
    var player = this.state.getPlayers()[0]
    this.ctx.beginPath();
    this.ctx.arc(player.x, player.y, 10, 0, Math.PI * 2);
    this.ctx.fillStyle = "red";
    this.ctx.fill();
    this.ctx.closePath();
  }

  draw(){

    this.ctx.clearRect(0,0,800,600);
    this.drawMap() 
    this.drawObjects()
    this.drawPlayer()

  }
  
  loadImage(){
    var img = new Image();   // Create new img element
    img.addEventListener('load', function() {
      // execute drawImage statements here
    }, false);
    img.src = 'assets/cave.png'; // Set source path

    this.img = img
  }


  drawMap(){
    var TO_RADIANS = Math.PI/180 
    var ANGLES = [90,180,270,360]

    for(var i = 0; i < this.canvas.width; i += 16)
      for(var x = 0; x < this.canvas.height; x += 16){
            // before we screw with it
        this.ctx.save(); 

        // move to the middle of where we want to draw our image
        this.ctx.translate(i, x);

        // rotate around that point, converting our 
        // angle from degrees to radians 
        this.ctx.rotate(ANGLES[Math.floor(Math.random() * 5)] * TO_RADIANS);

        // draw it up and to the left by half the width
        // and height of the image 
        this.ctx.drawImage(this.img, -(this.img.width/2), -(this.img.height/2));

        // and restore the co-ords to how they were when we began
        this.ctx.restore(); 
      }

  }



}

