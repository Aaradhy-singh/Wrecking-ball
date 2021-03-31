class Rope{

constructor(body1,pointB){

var Option = {

    bodyA : body1,
    pointB : pointB,
    stiffness:1.2,
    length:250

}
this.pointB = pointB
this.body = Constraint.create(Option)
World.add(world,this.body)

}
display(){

push()
stroke("green")
strokeWeight(3)
line(this.pointB.x,this.pointB.y,this.body.bodyA.position.x,this.body.bodyA.position.y)
pop()
}

}