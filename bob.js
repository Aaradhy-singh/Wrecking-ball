class Bob{

constructor(x,y,r){

var Option = {density:1,frictioAir:0.005}
this.body = Bodies.circle(x,y,r,Option)
this.r = r*2
World.add(world,this.body)
}
display(){

push()
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
ellipse(0,0,this.r,this.r)
pop()
}

}