//run wmain.js to use the program
const http = require('http')
const https = require("https")
const apiInfo = require('./apiInfo')
const wmain = require('./wmain')

function displayError(error){
    console.error(`the problem is  ${error.message}`)
}

function printWeather(city ,temp, humidity,wind){
    const weatherMsg = `The Temperature in ${city} is ${temp} and the humidity is ${humidity}and the speed of the wind is ${wind} `
    console.log(weatherMsg)
}

function get(city){
 try{
const parameters = {
    appid : api.key,
    units : 'metric'
}

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${parameters.appid}&units=${parameters.units} `       

const request = https.get(url, res =>{
    let body = ""
    res.on('data', chunk =>{
        body += chunk
    })
    
    res.on('end', () => {
        const weather = JSON.parse(body)
        printWeather(city,weather.main.temp.toFixed(0), weather.main.humidity, weather.wind.speed)
        
    })
})
request.on('error', error =>
    console.error(`the problem is you have entered ${error.message}`))
}catch(error){
    displayError(error)
}
    


  

}

module.exports.get= get;


/* console.log(parameters.appid ); */


