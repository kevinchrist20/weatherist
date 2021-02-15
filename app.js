if(process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const PORT = process.env.PORT || 3000

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.get('/weather', (req, res) => {
    console.log("Here")
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})