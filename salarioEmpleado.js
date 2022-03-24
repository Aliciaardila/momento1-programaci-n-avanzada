// calcular salario empleado


//funcion tradicional

//let nave=Math.random(1,5);
/*function salario(salarioBase,comision,nave){
    let salarioMensual   
    comision=comision*nave         
    deducciones=(comision*0.05)
    salarioMensual=salarioBase+(comision-deducciones)
    return salarioMensual
    
}
let salarioMensual=salario(3500000,1500000,1)
//console.log(`Naves vendidad fueron: ${nave}`)
console.log(`La asignación salarial es de: ${salarioMensual}`);*/

// funcion flecha larga

let salario=(salarioBase,comision,nave)=>{
    
    let salarioMensual=salarioBase+(comision-((comision*nave)*0.05))
    return salarioBase+(comision-((comision*nave)*0.05))
    
}
let salarioMensual=salario(3500000,1500000,1)
//console.log(`Naves vendidad fueron: ${nave}`)
console.log(`La asignación salarial es de: ${salarioMensual}`);

// funcion flecha corta
/*let salarioMensual=salario(3500000,1500000,1)
//console.log(`Naves vendidad fueron: ${nave}`)
console.log(`La asignación salarial es de: ${salarioMensual}`);*/

