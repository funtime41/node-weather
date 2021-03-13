// change forecasttttttttttttttttt

const request = require('request')

const forecast = (lat, long, callback) => {


    //const url = 'http://api.weatherstack.com/current?access_key=2bafabc2106816e7bab08421a4923364&query=37.8267,-122.4233&units=f'

    //

    // const lat = 37.8267
    // const long = -122.4233
    const url = 'http://api.weatherstack.com/current?access_key=2bafabc2106816e7bab08421a4923364&query=' + lat + ',' + long + '&units=f'

    request({ url: url, json: true }, (error, response) => {

        if (
            (error)
        ) {

            callback('error: unable to connect to weather site.', undefined)
                //console.log('error: unable to connect to weather site.')

        } else if (
            response.body.error
        ) {
            callback('error: weather site error. unable to find location.', undefined)
                //console.log('error: weather site error. unable to find location.')
        } else {
            console.log(response.body.location)
            callback(undefined, 'Success Location is: ' + response.body.location.name + ' where the temperature is: ' + response.body.current.temperature + ' and weather_descriptions are: ' + response.body.current.weather_descriptions[0] + '. It feels like:  ' + response.body.current.feelslike + '. Localtime is: ' + response.body.location.localtime)

            //console.log('YES Location is: ' + response.body.location.name + ' where the temperature is: ' + response.body.current.temperature + ' and weather_descriptions are: ' + response.body.current.weather_descriptions[0] + '. It feels like:  ' + response.body.current.feelslike)
        }

    })
}




module.exports = forecast