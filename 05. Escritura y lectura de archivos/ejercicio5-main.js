const automovil = require('./ejercicio3');
const readLine = require("readline");
const fs = require('fs');

let carro = new automovil();

var rl = readLine.createInterface(process.stdin, process.stdout);


rl.question('¿Cual es la marca del automovil? \n', respuesta =>{
    carro.marca = respuesta.toString();

    rl.question('¿Que modelo es? \n', respuesta =>{
        carro.modelo = respuesta.toString();

        rl.question('¿De que año es? \n', respuesta =>{
            carro.año = respuesta.toString();

            rl.question('¿De que color es? \n', respuesta =>{
                carro.color = respuesta.toString();

                rl.setPrompt('¿Cuanto kilometraje tiene? \n');
                rl.prompt();
        
                rl.on('line', (input) =>{
                
                    if(input.trim() === 'exit'){
                         rl.close();
                         return
                    }
            
                    rl.setPrompt('Si quieres salir escribe exit : \n');
                    rl.prompt();
                    carro.km = input.toString();
            })
        })      
        })
    })
  
})

rl.on("close", () =>{

    console.log(`la marca del carro es ${carro.marca}`)
    
    carro.emit('datos', datosCarro());
    
})

carro.on('datos', function(datos) {
    
    fs.writeFile('./Datos-carro.txt', datos, (err)=>{
        if(err) console.log(err);
        console.log("Archivo creado");
    });
})

function datosCarro(){
    return `Datos del automovil:
    Marca : ${carro.marca}
    Modelo : ${carro.modelo}
    Año : ${carro.año}
    color : ${carro.color}
    km : ${carro.km}`;
}
    




