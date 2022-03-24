//numeros menores a 10, recorrer el arrgle filtar solo los id<10
// analizar si el resultado del filtrado es 1 o mayor
//declarando la funcion principal

function filtrarPlanos(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,buscarplanos){
 //proceso funcion principal
 setTimeout(function(){
    let planos=[n1,n2,n3,n4,n5,n6,n7,n8,n9,n10]
    let planosFiltrados=planos.filter(function(plano)
    {
        return (plano>=1 && plano<=10)
    })  
    buscarplanos(planosFiltrados)
    },500)
}

    //llmando la funcion principal
    filtrarPlanos(50,20,15,16,40,2,5,1,13,22,function(planosFiltrados){
        if (planosFiltrados.length>0){
            console.log("Corre es hora de irte, ya tienes "+ planosFiltrados.length + " planos")
        }
        else{
            console.log("continua buscando")
        }
})

