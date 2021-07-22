class Snow{
    constructor(x,y,radius){
        var options = { restitution:0.4, isStatic:false } 
        this.radius = radius 
        this.body = Bodies.circle(x,y,radius,options)
this.image= loadImage("snow4.webp");
World.add(world,this.body)
    } 


    display(){
   var pos=this.body.position;
 imageMode(RADIUS)
image(this.image, pos.x, pos.y, this.radius, this.radius)
}
}
