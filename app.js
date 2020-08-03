const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')


const argv = require('yargs').options({
    direccion:{
        demand: true,
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima'
    }
}).argv

// argv.direccion

// lugar.getLugarLatLon(argv.direccion)
//         .then(console.log)

// clima.getClima( 40.42, -3.7)
//         .then(console.log)
//         .catch(console.log)

const getInfo = async (direccion)=>{


    try {
        const coords = await lugar.getLugarLatLon(direccion);
        const temp = await clima.getClima( coords.lat, coords.lng)

        return `El clima de ${coords.ciudad} es ${temp.temp}º`
    } 
    catch (e) {
        return `No se pudo determinar el clima de ${direccion}`

    }
   
         

    

//salida
// El clima de XXX es XXX
// No se pudo determinar el clima de xxxx
}

getInfo(argv.direccion)
.then(console.log)
.catch(console.log)  