exports.mensaje=function(){
    return 'Luego de saludar se ejecuta el callback';
  } 
 
 exports.Saludar=(nombre, apellido,callback) => {
    let saludo=`Hola ${nombre}`+` ${apellido}`;
    console.log(saludo);
    console.log(callback);
 }