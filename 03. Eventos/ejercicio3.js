const eventEmitter = require("events").EventEmitter;
const readLine = require("readline");
const util = require("util");

var Persona = function(){

}

let persona = new Persona();


var rl = readLine.createInterface(process.stdin, process.stdout);


rl.question('Cual es tu nombre: \n', (respuesta) =>{
    persona.nombre = respuesta;
    rl.setPrompt('¿Cual es tu edad? : \n');
    rl.prompt();
   

    rl.on('line', (input) =>{
        
        if(input.trim() === 'exit'){
             rl.close();
             return
        }

        rl.setPrompt('Si quieres salir escribe exit : \n');
        rl.prompt();
        persona.edad = input;
      
    })
})


rl.on("close", () =>{
    
    console.log(`tu nombre es ${persona.nombre}, y tu edad es ${persona.edad}`);
    
    persona.emit('Saludar', 'Hello');
    persona.emit('Despertar', '7:30 am');
    persona.emit('Caminar', 5000);
    persona.emit('Gastar', 100000);
    persona.emit('Viajar', 'Irlanda');

    
})


util.inherits(Persona, eventEmitter);

persona.on('Despertar', (hora) =>{
    console.log(`${persona.nombre}:  se despertó a las ${hora}`);
});

persona.on('Caminar', (pasos) =>{
    console.log(`${persona.nombre}: caminó ${pasos} pasos`);
});

persona.on('Gastar', (pesos) =>{
    console.log(`${persona.nombre}: Gastó hoy ${pesos} pesos`);
});

persona.on('Viajar', (pais) =>{
    console.log(`${persona.nombre}: viajó a ${pais}`);
});

persona.on('Saludar', (saludo) =>{
    console.log(`${persona.nombre}: ${saludo}`);
});







