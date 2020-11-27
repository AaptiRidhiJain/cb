class Dustbin{
     constructor(x,y,dustbinWidth,dustbinHeight){
          this.x = x;
          this.y = y;
          this.dustbinHeight = 100;
          this.dustbinWidth = 200;
          this.wallThickness = 20;
          this.angle = 0;

          this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic: true});
          this.leftWallBody = Bodies.rectangle(this.x - this.dustbinWidth/2, this.y - this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic: true});
          Matter.Body.setAngle(this.leftWallBody,this.angle);
          this.rightWallBody = Bodies.rectangle(this.x + dustbinWidth/2, this.y - dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic: true}); 
          Matter.Body,setAngle(rightWallBody, -1*this.angle);
          World.add(world,bottomBody);
          World.add(world,leftWallBody);
          World.add(world,rightWallBody);
     }
    
     display(){
          var posBottom = this.bottomBody.position;
          var posLeft = this.leftWallBody.position;
          var posRight = this.rightWallBody.position;
          
          push();
          translate(posLeft.x,posLeft.y);
          rectMode(CENTER);
          stroke(255);
          angleMode(RADIUS);
          fill(255);
          rotate(this.angle);
          rect(0,0,this.wallThickness,this.dustbinWidth);
          pop();

          push();
          translate(posRight.x,posRight.y);
          rectMode(CENTER);
          stroke(255);
          angleMode(radius);
          fill(255);
          rotate(-1*this.angle);
          rect(0,0,this.wallThickness,this.dustbinWidth);
          pop();

          push();
          translate(posBottom.x,posBottom.y);
          rectMode(CENTER);
          stroke(255);
          angleMode(RADIUS);
          fill(255);
          rect(this.wallThickness,this.dustbinWidth);
          pop();        
     }
}