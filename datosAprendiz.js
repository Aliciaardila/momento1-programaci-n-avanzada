//Yoda el maestro jedí, necesita asignar a sus aprendices Padawans 2 actividades dependiendo de la edad de ellos:
//Manejo de la fuerza: Si el aprendiz es menor de 15 años
//Manejo del sable de luz: Si el aprendiz es mayor de 15 años

// declaro función principal


let destrezas = ["Manejo de fuerza", "Manejo de sable"];

function crearAprendices(nombre, planeta, edad, estatura, callback) {
    
  setTimeout(function () {
    //Proceso principal

    let aprendiz = {nombreAprendiz: nombre,planetaAprendiz: planeta,estaturaAprendiz: estatura,
      edadAprendiz: edad,
    };
    //llamadno al Callback
    callback(aprendiz);
  }, 1000);
}

//llamo la funcion principal

crearAprendices("Aprendiz", "Jupiter", 16, 1.54, function (aprendiz) {
      if ( aprendiz.edadAprendiz>=15) {
      console.log(aprendiz.nombreAprendiz, ",su destreza es: ",destrezas[1],
      ", tiene",aprendiz.edadAprendiz,"años,",aprendiz.planetaAprendiz,"es tu planeta"
      
        );
      } else {
        console.log(aprendiz.nombreAprendiz,",su destreza es: ",destrezas[0],", tiene",
      aprendiz.edadAprendiz,"años,",aprendiz.planetaAprendiz,"es tu planeta"
    );
  }
});


