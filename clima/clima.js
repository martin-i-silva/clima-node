const axios = require('axios')

const getClima = async (lat, lon)=>{
    
       
    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ba2a9c31b4f86f41c2068b930f8dd573&units=metric`,
        headers: {'x-rapidapi-key': 'e6690c3198msh08a3e526b210ee5p143ac1jsnebf2d4e44ce0'}
      });

    const resp = await instance.get()

    //   if (resp.data.length === 0 ){
    //       throw new Error(`No hay resultados para ${direccion}`)
    //   }
     
      const ciudad = resp.data.name;
      const temp = resp.data.main.temp;
      const senTemp = resp.data.main.feels_like;


      //console.log(resp.data)
      return {
          ciudad,
          temp,
          senTemp,

      }
}


module.exports = {
    getClima
}