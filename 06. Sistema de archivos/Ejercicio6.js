const readline = require('readline');
const fs = require('fs');
//const funciones = require('./Ejercicio4');

var rl = readline.createInterface(process.stdin, process.stdout);

const preguntas = 
    'Elige una opción ingresando el número correspondiente\n'
    + '1) Crear un archivo \n'
    + '2) Crear una carpeta \n'
    + '3) Renombrar un archivo \n'
    + '4) Eliminar un archivo \n'
    + '5) Mover Archivos\n'


rl.question(preguntas, (answer) =>{
    switch(answer){
        case '1': 
            rl.question('Ingresa el nombre del archivo\n', (answer) =>{
                nombre = answer;
                rl.setPrompt('Ingresa el contenido del archivo\n');
                rl.prompt();
                 rl.on('line', answer =>{
                    contenido = answer;
                    crearArchivo(nombre, contenido);   
                              
            })
            })
             break;
        case '2':
            rl.question('Ingresa el nombre de la carpeta\n', (answer) =>{
                nombre = answer;
                fs.mkdir(`./Files/${nombre}`, err =>{
                    if (err) console.log(err);
                    console.log('carpeta creada');
                    
                });
            })
            break;
        case '3':
            rl.question('Ingresa el nombre del archivo que deseas renombrar\n', (answer) =>{
                nombre = answer;
                renombrarArchivo(nombre);
                
                
            });
            break;
        case '4':
            rl.question('Ingresa el nombre del archivo que quieres eliminar\n', answer =>{
                nombre = answer;
                eliminarArchivo(nombre);    
                
                
            })
            break;
        case '5' : 
            rl.question('Ingresa el nombre del archivo que quieres mover\n', answer =>{
                nombre = answer;
                moverArchivo(nombre);
                
                
            })
        }

        
});


function crearArchivo(nombre, contenido){
    this.nombre = nombre;
    this.contenido = contenido;
    fs.writeFile(`./Files/${nombre}`, contenido, err =>{
        if (err) console.log(err);
        console.log('Archivo creado');
    }  )  
    
}

function renombrarArchivo(nombre){
    this.nombre = nombre;
    if(fs.existsSync(`./Files/${nombre}`)){
        rl.setPrompt('Ingresa el nuevo nombre\n');
        rl.prompt();
        rl.on('line', answer =>{
        nuevoNombre = answer;

        fs.rename(`./Files/${nombre}`, `./Files/${nuevoNombre}`, err =>{
            if(err) console.log(err);
            console.log('Archivo renombrado')
        })

    })
    }else{
        console.log('No existe ese archivo');
        
    }

}

function eliminarArchivo(nombre){
    this.nombre = nombre;

    if(fs.existsSync(`./Files/${nombre}`)){
        fs.unlink(`./Files/${nombre}`, err =>{
            if (err) throw err;
            console.log('Archivo eliminado');
        })
    }else{
        console.log('No existe ese archivo')
    }
}

function moverArchivo(nombre){
    this.nombre = nombre;
    

    if(fs.existsSync(`./Files/${nombre}`)){
        rl.question('Ingresa el nombre de la carpeta a mover\n', answer =>{
            mover = answer;
            if(fs.existsSync(`./Files/${mover}`)){
                fs.renameSync(`./Files/${nombre}`, `./Files/${mover}/${nombre}`, err =>{
                    if(err) console.log(err);
                    console.log('Se ha movido el archivo'); 
                })   
            }else{
                console.log('No existe esa carpeta');
                
            }
        })
    }else{
        console.log('No existe ese archivo');
        
    }
}


var nuevoNombre;
var nombre;
var contenido;
var mover;