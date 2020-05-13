//Game logic goes here

import Display from './display.js';

import Controller from './controller.js';

import State from './state.js';

var canvas = document.getElementById("game")

var state = new State()

state.addMonster()

var display = new Display(canvas, 800, 600, state)

var players = state.getPlayers() 

var player = players[0]


display.drawObjects()

state.addPlayer()

display.drawPlayer()

var controller = new Controller(state)

display.loadImage()

function gameLoop(){

    display.draw()
    requestAnimationFrame(gameLoop)
}
requestAnimationFrame(gameLoop)

