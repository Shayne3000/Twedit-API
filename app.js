const express = require('express')
const bodyParser = require('body-parser')
const mountRoutes = require('./routes')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({
        info: 'TweetBackend Starting...'
    })
})
mountRoutes(app)

app.listen(port, () => {
    console.log(`TweetBackend running on port ${port}.`)
})
