class Ground{

constructor(x,y,width,height){

var Option = {isStatic:true}
this.body = Bodies.rectangle(x,y,width,height,Option)
this.width = width
this.height = height
World.add(world,this.body)


}
display(){
rectMode(CENTER)

rect(this.body.position.x,this.body.position.y,this.width,this.height)
fill("brown")

}


}