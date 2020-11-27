class Ground{
    constructor(x,y,width,height){
    options ={
       isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    width = this.width;
    height = this.height;
    World.add(world,this.body);
}

    display(){
      var pos = this.body.position;

      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      strokeWeight(3);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
}