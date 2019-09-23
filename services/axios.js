const axios = require('axios') //Esta libreria es para hacer peticiones http y permite usar promesas

//Ejemplo de alguna configuracion de axios
const instance = axios.create({
    baseURL: 'https://www.miapp.com'
})

module.exports = axios;
//module.exports = instance  //Asi usamos la configuracion que hicimos arriba