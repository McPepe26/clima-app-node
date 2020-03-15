const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion).then(resp => {
//     console.log(resp);
// });

// clima.getClima(20.1, -98.7099999)
// .then(console.log)
// .catch(console.log);
// console.log(argv.direccion);

const getInfo = async (direccion) =>{
    try{
        let datosDir = await lugar.getLugarLatLng(direccion);
        let climadir = await clima.getClima(datosDir.lat, datosDir.lng);
        return `El clima en ${direccion} es de ${climadir} °C`;
    }catch(e){
        return `No se pudo determinar el clima de  ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(resp =>{
        console.log(resp);
    })
    .catch(err =>{
        console.log(err);
    })