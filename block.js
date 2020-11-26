class Block{
    constructor(x,y){
        var options={
            restitution:0.5
        }
        this.box=Bodies.rectangle(x,y,30,41,options)
        this.width=30
        this.height=41
        World.add(world,this.box)
    }
    displaygrey(){
        rectMode(CENTER)
        fill(128,128,128)
        rect(this.box.position.x,this.box.position.y,30,40)
    }
    displaypink(){
        rectMode(CENTER)
        fill(225,192,203)
        rect(this.box.position.x,this.box.position.y,30,40)
    }
    displaydark(){
        rectMode(CENTER)
        fill(135,206,234)
        rect(this.box.position.x,this.box.position.y,30,40)
    }
    displayblue(){
        rectMode(CENTER)
        fill(63,224,208)
        rect(this.box.position.x,this.box.position.y,30,40)
    }
}