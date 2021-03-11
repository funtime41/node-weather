const request = require('request')

const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=2&access_token=pk.eyJ1IjoiZnVudGltZTIxIiwiYSI6ImNrbHprZmRhNzN2MGcyeHBtbTZxenEzd2IifQ.Xb6M8gPrH8Ifz_RbO1F4_w&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('unable to connect to Location Service site', undefined)

        } else if (response.body.features.length === 0) {
            callback('geocodeURL site error. unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {

                    // rev swapped these
                    latitude: response.body.features[0].center[1],
                    longitude: response.body.features[0].center[0],
                    location: response.body.features[0].place_name
                })
                //JSON.parse(response.body.features[0].center[1])
        }
    })
}

module.exports = geocode