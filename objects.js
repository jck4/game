class Entity {
    constructor(name,x,y) {
        this.name = name
        this.x = x
        this.y = y
    }

    setX(x){
        this.x += x
    }

    setY(y){
        this.y += y
    }

    setXY(x,y){
        this.x += x
        this.y += y
    }
    
}

class Player extends Entity{
    constructor(name) {
        this.name = name
        this.x = (Math.random() * 800)
        this.y = (Math.random() * 600)
    }

    moveX(x){
        this.x += x
    }

    moveY(y){
        this.y += y
    }

    moveXY(x,y){
        this.x += x
        this.y += y
    }
}
