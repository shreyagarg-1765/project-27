class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX,y:offsetY}
        }
        this.rope=Matter.Constraint.create(options);
        World.add(world,this.rope)
    }
    display(){
        var p1=this.rope.bodyA.position;
        var p2=this.rope.bodyB.position;

        strokeWeight(2);

       line(p1.x,p1.y,p2.x+this.offsetX,p2.y+this.offsetY);
    }
}