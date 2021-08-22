class Base {
    constructor (x,y,width,height,color,isStatic){
        var props = {
            isStatic : isStatic,

        }

        this.body = Bodies.rectangle (x,y,width,height,props);
        World.add (world,this.body);

        this.width = width;
        this.height = height;
        this.color = color;

    }

    show (){
        push ();
        fill (this.color);
        translate (this.body.position.x,this.body.position.y);
        rectMode (CENTER);
        rect (0,0,this.width,this.height);
        pop ();


    }
}