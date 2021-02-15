const searchElement = document.querySelector("[data-city]")
const searchBox = new google.maps.places.SearchBox(searchElement)

searchBox.addListener('places_changed', () => {
    const place = searchBox.getPlaces()[0]
    if(place == null) return

    const lat = place.geometry.location.lat()
    const lng = place.geometry.location.lng()

    fetch('/weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            lat: lat,
            lng: lng
        })
    }).then(res => res.json()).then(data => {
        setWeatherData(data, place.formatted_address)
    })
})


const locationElement = document.querySelector('[data-location]')
const tempElement = document.querySelector('[data-temp]')
const statusElement = document.querySelector('[data-status]')
const windElement = document.querySelector('[data-wind]')
const humidityElement = document.querySelector('[data-humidity]')


function setWeatherData(data, place)  {
    locationElement.textContent = place
    statusElement.textContent = data.condition.text
    tempElement.textContent = data.temp_c
    windElement.textContent = data.wind_kph
    humidityElement.textContent = data.humidity
}