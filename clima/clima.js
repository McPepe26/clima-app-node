const axios = require('axios');

const getClima = async (lat, lng) =>{
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=94e6e071c0b9f165c8c34f9f54466b0f&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}