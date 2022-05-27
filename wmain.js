
const weather =  require('./weather')
var city = process.argv.slice(2);
city.forEach(weather.get)
