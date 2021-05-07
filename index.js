require('dotenv').config()

const express = require('express')

const server = express()

const PORT = process.env.PORT || 5000

server.use(express.json())

server.get('/api/craig', (req, res) => {
    res.json({
        Hello: 'Craig',
    })
})
server.get('/api/gabe', (req, res) => {
    res.json({
        Hello: 'Gabe, the best node.js teacher in the world ',
    })
})
server.get('*', (req, res) => {
    res.json({
        message: 'please use one of these end points /api/craig/ , /api/gabe'
    })
})

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})

