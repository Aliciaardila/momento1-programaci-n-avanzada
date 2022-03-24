    
//function sables(sable){
    let sables=[
        {color:"verde",energia:50,portador:"Obi Wan1"},
        {color:"rojo",energia:10,portador:"Obi Wan2"},
        {color:"verde",energia:50,portador:"Obi Wan3"},
        {color:"morado",energia:20,portador:"Obi Wan4"},
        {color:"rosa",energia:9,portador:"Obi Wan5"},
        {color:"azul",energia:40,portador:"Obi Wan6"},
        {color:"amarillo",energia:19,portador:"Obi Wan7"},
        {color:"gris",energia:45,portador:"Obi Wan8"},
        {color:"verde",energia:49,portador:"Obi Wan9"},
        {color:"fucsia",energia:5,portador:"Obi Wan10"},
        {color:"verde",energia:50,portador:"Obi Wan11"},
        {color:"rojo",energia:10,portador:"Obi Wan12"},
        {color:"verde",energia:50,portador:"Obi Wan13"},
        {color:"morado",energia:20,portador:"Obi Wan14"},
        {color:"rosa",energia:9,portador:"Obi Wan15"},
        {color:"azul",energia:40,portador:"Obi Wan6"},
        {color:"amarillo",energia:19,portador:"Obi Wan17"},
        {color:"gris",energia:45,portador:"Obi Wan18"},
        {color:"verde",energia:49,portador:"Obi Wan19"},
        {color:"fucsia",energia:5,portador:"Obi Wan20"},
       
    ]

   


let filtrado=sables.filter(sable=>sable.energia<20) 
    let suma = 0
    sables.forEach (function(sable){
        suma += sable;
    });
    
    
    console.log(suma)
    console.log(filtrado)
    console.log(`Los sables con energia menor a 20 son: ${filtrado.length}`);

    

    