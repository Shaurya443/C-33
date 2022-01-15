class Snow{
constructor(x,y,w,h)
{
    var options={
       
     frictionAir:1.0,
     density:1.0,
     gravity:0.8,
     restitution:0.8
    }

this.w = w
this.h = h
World.add(world,this.body)
this.image = loadImage("snow1.png")

}
display(){
    var pos = this.body.position
    var angle = this.body.angle
    push()
    translate(200,50);
    rotate(angle)
    imageMode(CENTER);
    rectMode(CENTER)
    ellipse(0,0,this.w, this.h);
    image(this.image, 0,0, this.w,this.w)
   pop()
   
    
}





}
