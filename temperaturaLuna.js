// calcular temperatura media

//funcion tradicional

/*function temperaturaMedia(temperaturaMaxima,temperaturaMinima){
      
    //calcular temperatura media
    let temperatura;
    temperatura=(temperaturaMaxima+temperaturaMinima)/2;
    return temperatura;
}
let temperatura = temperaturaMedia (20,10)
console.log(`La Temperatura media es ${temperatura}` );*/



// funcion flecha

let temperaturaMedia=(temperaturaMaxima,temperaturaMinima)=>{
      
     let temperaturaM=(temperaturaMaxima+temperaturaMinima)/2;
    return temperaturaM;
}
let temperaturaM = temperaturaMedia (20,10)
console.log(`La Temperatura media de la luna es: ${temperaturaM}` );


// Flecha optimizada


/*let temperaturaMedia=(temperaturaMaxima,temperaturaMinima)=>temperaturaM=(temperaturaMaxima+temperaturaMinima)/2;
   

let temperaturaM = temperaturaMedia (20,10)
console.log(`La Temperatura media de la luna es: ${temperaturaM}` );*/



