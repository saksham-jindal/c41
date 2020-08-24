class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
       //this.image = loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
        fill(0);
       rectMode(CENTER);
       rect(pos.x,pos.y+70,300,300);
      // imageMode(CENTER);
       //image(this.image,pos.x,pos.y+70,300,300)
    }
}