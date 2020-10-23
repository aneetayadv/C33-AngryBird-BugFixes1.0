class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
    this.Visibility = 255; //BG 5 - add visibility to slowly disappear the trajectory
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(gameState === "onSling"){
      this.trajectory = []; //BG-3 : Remove old bird trajectory
      this.Visibility = 255; //to show trajectory again on relaunch
      Body.setAngle(this.body,0); //BG 4 - Set Bird straight while reattaching
  }

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      push();
      //BG 5 - slowly disappear the trajectory
      this.Visibility = this.Visibility - 0.5;
      tint(255,this.Visibility);
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      pop();
    }
   
  }
}
