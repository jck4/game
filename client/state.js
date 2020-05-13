class Monster {
    constructor() {
        this.name = "Yeeter"
        this.x = (Math.random() * 800)
        this.y = (Math.random() * 600)
    }
}



class Player {
    constructor() {
        this.name = "Swagdawicktus"
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



export default class State {


    constructor() {
        this.players = []
        this.monsters = []
    }

    addMonster() {
        var monster = new Monster()
        this.monsters.push(monster)
        console.log(`Monster added at ${monster.x}`)
    }

    addPlayer(){
        var player = new Player()
        this.players.push(player)
        console.log(`player added at ${player.x}`)
    }

    setPlayerName(id,name){
        this.players[id].name= name
    }

    setPlayerX(id,x){
        this.players[id].x= x
    }

    setPlayerY(id,y){
        this.players[id].y = y
    }

    
    getPlayerName(id){
        return this.players[id].name
    }

    getPlayerX(id){
        return this.players[id].x
    }

    getPlayerY(id){
        return this.players[id].y
    }


    getPlayers(){
        return this.players
    }

    getPlayer(id){
        return this.players[id]
    }


    getMonsters() {
        return this.monsters
    }

}