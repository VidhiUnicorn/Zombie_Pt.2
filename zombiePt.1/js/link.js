class Link {
    constructor (B1,B2){
        var lastLink = B1.body.bodies.length-1;
        this.link = Constraint.create ({
            bodyA:B1.body.bodies [lastLink],
            bodyB : B2.body,
            pointA : {x:0,y:0},
            pointB : {x:0,y:0},
            length : 10,
            stiffnes : 0.8
        })

        World.add (world,this.link)
    }
    detach (){  
        World.remove (world,this.link);
    }
}