 var mensaje=function(){
   return 'Luego de saludar se ejecuta el callback';
 } 

let Saludar=(nombre, apellido,callback) => {
   let saludo=`Hola ${nombre}`+` ${apellido}`;
   console.log(saludo);
   console.log(callback);
}

Saludar("leonel","messi",mensaje());
