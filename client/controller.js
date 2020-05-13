export default class Controller {

  constructor(state) {

    this.state = state
    this.addEventListeners()

  }

  addEventListeners() {
    var state = this.state
    var player = state.getPlayer(0)


    var map = {
      w: false,
      a: false,
      s: false,
      d: false
    }


    document.addEventListener("keydown", (e) => {
      if (e.key in map){

        map[e.key] = true

        //UP
        if (map.w)
        player.moveY(-5)

        //LEFT
        if (map.a)
          player.moveX(-5)
        //DOWN
        if (map.s)
        player.moveY(5)

        //RIGHT
        if (map.d)
          player.moveX(5)
  
      }

    })

    document.addEventListener("keyup", (e) => {
      if (e.key in map)
        map[e.key] = false
    })

  }

}

