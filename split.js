// funcion con split trancional
/*function separarCodigo(codigo){
    nombre = codigo.split(":")
    return (`El nombre es ${nombre[1] }`)
}
console.log(separarCodigo("ARQ2045: Juan: Felipe")) */


//  funcion Flecha
let separarCodigo=(codigo)=>{
    nombre = codigo.split(":")
    return (`El nombre es ${nombre[1] }`)
}
console.log(separarCodigo("ARQ2045: Hans Solo"))