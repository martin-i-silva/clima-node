const axios = require('axios')

const getLugarLatLon = async (direccion)=>{
    
    const encodeUrl = encodeURI(direccion)
    
    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&appid=ba2a9c31b4f86f41c2068b930f8dd573&units=metric`,
        headers: {'x-rapidapi-key': 'e6690c3198msh08a3e526b210ee5p143ac1jsnebf2d4e44ce0'}
      });
    

    
    const resp = await instance.get()

    //   if (resp.data.length === 0 ){
    //       throw new Error(`No hay resultados para ${direccion}`)
    //   }
     
      const ciudad = resp.data.name;
      const lat = resp.data.coord.lat;
      const lng = resp.data.coord.lon;

      //console.log(resp.data)
      return {
          ciudad,
          lat,
          lng
      }
}


module.exports = {
    getLugarLatLon
}