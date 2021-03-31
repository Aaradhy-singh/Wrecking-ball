class Box{

    constructor(x,y,width,height){
    
    var Option = {restitution:0.8,friction:1.0,density:0.04}
    this.body = Bodies.rectangle(x,y,width,height,Option)
    this.width = width
    this.height = height
    World.add(world,this.body)
    
    
    }
    display(){
        push()
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
rectMode(CENTER)
    stroke("green")
    strokeWeight(4)
    rect(0,0,this.width,this.height)
    fill("brown")
  pop()
    
    
    }
    
    
    }