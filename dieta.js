//Cree un programa que permita recibir 50 alimentos diferentes y mediante una función 
//primaria después de 5 segundos se pueda obtener solo los alimentos de tipo 
//vegetal que entreguen mas de 200 unidades de energía. 
//Finalmente, una función callback debe permitir entregar 
//la sumatoria de niveles de energía entregados por los alimentos vegetales consumidos en la dieta de Grogu.

function registrarDieta(alimentos,callback) {
    
    setTimeout(function () {
  
       //Proceso principal
       let  calorias=alimentos.filter(function(alimento){
      
        return(alimento.tipoAlimento=="vegetal" && alimento.nivelEnergia>=200)
          
      })
        //llamadno al Callback
      callback(calorias)
    }, 5000)
  }
  
  //llamo la funcion principal
  
  let menu=[

      {nombre:"coliflor",tipoAlimento:"vegetal",nivelEnergia: 300},
      {nombre:"carne",tipoalimento:"animal",nivelEnergia: 500},
      {nombre:"mantiz",tipoAlimento:"insecto",nivelEnergia: 300},
      {nombre:"lechuga",tipoAlimento:"vegetal",nivelEnergia: 500},
      {nombre:"carne",tipoAlimento:"animal",nivelEnergia: 500},
      {nombre:"mariquita",tipoAlimento:"insecto",nivelEnergia: 300},
      {nombre:"apio",tipoalimento:"vegetal",nivelEnergia: 300},
      {nombre:"salmon",tipoalimento:"animal",nivelEnergia: 500},
      {nombre:"grillo",tipoAlimento:"insecto",nivelEnergia: 300},
      {nombre:"tomate",tipoAlimento:"vegetal",nivelEnergia: 200},
      {nombre:"cerdo",tipoAlimento:"animal",nivelEnergia: 600},
      {nombre:"salta monte",tipoAlimento:"insecto",nivelEnergia: 200},
      {nombre:"lechuga",tipoAlimento:"vegetal",nivelEnergia: 200},
      {nombre:"calabazin",tipoAlimento:"vegetal",nivelEnergia: 300},
      {nombre:"pimenton",tipoAlimento:"vegetal",nivelEnergia: 200},
      {nombre:"aguacate",tipoAlimento:"vegetal",nivelEnergia: 200},
      {nombre:"repollo",tipoAlimento:"vegetal",nivelEnergia: 200},
      {nombre:"cebolla",tipoalimento:"vegetal",nivelEnergia: 300},
      {nombre:"carne",tipoalimento:"animal",nivelEnergia: 500},
      {nombre:"mantiz",tipoAlimento:"insecto",nivelEnergia: 300},
      {nombre:"lechuga",tipoAlimento:"vegetal",nivelEnergia: 500},
      {nombre:"carne",tipoAlimento:"animal",nivelEnergia: 500},
      {nombre:"mariquita",tipoAlimento:"insecto",nivelEnergia: 300},
      {nombre:"apio",tipoalimento:"vegetal",nivelEnergia: 300},
      {nombre:"salmon",tipoalimento:"animal",nivelEnergia: 500},
      {nombre:"grillo",tipoAlimento:"insecto",nivelEnergia: 300},
      {nombre:"tomate",tipoAlimento:"vegetal",nivelEnergia: 200},
      {nombre:"cerdo",tipoAlimento:"animal",nivelEnergia: 600},
      {nombre:"salta monte",tipoAlimento:"insecto",nivelEnergia: 200},
      {nombre:"lechuga1",tipoAlimento:"vegetal",nivelEnergia: 200},
      {nombre:"calabazin",tipoAlimento:"vegetal",nivelEnergia: 300},
      {nombre:"pimenton",tipoAlimento:"vegetal",nivelEnergia: 200},
      {nombre:"aguacate",tipoAlimento:"vegetal",nivelEnergia: 200},
      {nombre:"repollo",tipoAlimento:"vegetal",nivelEnergia: 200},
      {nombre:"brocoli",tipoalimento:"vegetal",nivelEnergia: 300},
      {nombre:"carne",tipoalimento:"animal",nivelEnergia: 500},
      {nombre:"mantiz",tipoAlimento:"insecto",nivelEnergia: 300},
      {nombre:"lechuga",tipoAlimento:"vegetal",nivelEnergia: 500},
      {nombre:"carne",tipoAlimento:"animal",nivelEnergia: 500},
      {nombre:"mariquita",tipoAlimento:"insecto",nivelEnergia: 300},
      {nombre:"apio",tipoalimento:"vegetal",nivelEnergia: 300},
      {nombre:"salmon",tipoalimento:"animal",nivelEnergia: 500},
      {nombre:"grillo",tipoAlimento:"insecto",nivelEnergia: 300},
      {nombre:"tomate",tipoAlimento:"vegetal",nivelEnergia: 200},
      {nombre:"cerdo",tipoAlimento:"animal",nivelEnergia: 600},
      {nombre:"salta monte",tipoAlimento:"insecto",nivelEnergia: 200},
      {nombre:"lechuga",tipoAlimento:"vegetal",nivelEnergia: 200},
      {nombre:"calabazin",tipoAlimento:"vegetal",nivelEnergia: 300},
      {nombre:"pimenton",tipoAlimento:"vegetal",nivelEnergia: 200},
      {nombre:"aguacate",tipoAlimento:"vegetal",nivelEnergia: 200},
      {nombre:"pepino",tipoalimento:"vegetal",nivelEnergia: 300}
      
    ]
    registrarDieta(menu,function(calorias){
     
      let suma = 0
      calorias.forEach(function(alimento){
          suma = suma + alimento.nivelEnergia
  
      })
      console.log(calorias)
      console.log(`El nivel de energia suministrada por los vegetales de la 
      dieta consumida por Grogu es de: ${suma}`)
  
  })
  