class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("bird.png");
    this.smokeimg= loadImage("smoke.png")
    this.path=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if (this.body.velocity.x>12&& this.body.position.x>210){
      var position=[this.body.position.x,this.body.position.y];
      this.path.push(position);
    }
  
   for(var i=0;i<this.path.length;i=i+2){
     image (this.smokeimg,this.path[i][0],this.path[i][1])
   }
    super.display();
  }
}
