class Balls {
    constructor (x,y,radius){
        var props = {
          
            restitution : 0.8

        }

        this.body = Bodies.circle (x,y,radius,props);
        World.add (world,this.body);

        this.image = loadImage ("./assets/stone.png");

        this.radius = radius;
       

    }

    show (){
        push ();
        fill (255);
        rotate (this.body.angle);
        translate (this.body.position.x,this.body.position.y);
        imageMode (CENTER);
        image (this.image,0,0,this.radius,this.radius);
        pop ();


    }
}