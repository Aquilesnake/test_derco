const express = require('express')
const api_helper = require('./api_helper')
const path = require('path');
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
/*
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
*/

app.get('/', (req, res) => {
    api_helper.make_API_call('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.send(error)
        })
})