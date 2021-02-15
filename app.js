if(process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const PORT = process.env.PORT || 3000
const WEATHER_API_KEY = process.env.WEATHER_API_KEY

const axios = require('axios')
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.post('/weather', (req, res) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${req.body.lat},${req.body.lng}`
    axios({
        url: url,
        responseType: 'json'
    }).then(result => res.json(result.data.current))
    .catch(err => console.log(err))
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})