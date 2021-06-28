class Snow{
constructor(x,y)
{
    var options={
        isStatic:false,
     friction:0,
     density:0.5,
     gravity:0.8
    }

this.x = x
this.y = y
this.image = loadImage("snow4.webp")

this.body=Bodies.rectangle(this.x, this.y,options)
World.add(world,this.body)
}
display(){
    var pos = this.body.position
    translate(pos.x, pos.y);
    rectMode(CENTER)
    fill(255,0,255)
    ellipse(0,0,this.r, this.r);
    
   
   
    
}





}