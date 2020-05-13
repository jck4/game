const rootPath = "/usr/src/app"

const express = require('express')

class Routes {

    constructor(app) {
        this.app = app
        this.generateRoutes()
    }

    redirectLogin = (req, res, next) => {
        if (!req.session)
            res.redirect('/login')
        else
            next()
    }

    redirectGame = (req, res, next) => {
        if (req.session)
            res.redirect('/game')
        else
            next()
    }

    generateRoutes() {


        // this.app.get('/', this.redirectLogin, (req, res) => {


        // })

        //Routes
        this.app.get('/', (req, res) => {
            res.redirect('/game')
        })

        this.app.use(express.static('/assets'))

        this.app.use('/assets', express.static(rootPath + '/assets'));


        this.app.use('/client', express.static(rootPath + '/client'));


        this.app.get('/game', (req, res) => {
            res.sendFile((rootPath + '/client/index.html'))
        })


        this.app.get('/login', this.redirectGame, (req, res) => {
            res.sendFile((rootPath + '/client/login.html'))
        })


        this.app.post('/login', this.redirectGame, (req, res) => {

            const users = [
                { uid: 1, username: "yeet", password: "yeet" }
            ]

            const { username, password } = req.body

            if (username && password) {
                const user = users.find(
                    user => user.username === username && user.password === password
                )


                if (user) {
                    res.redirect('/game')
                }
            }

        })

    }


}

module.exports = Routes