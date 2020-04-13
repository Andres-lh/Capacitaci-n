const fs = require('fs');
const readline = require('readline');

var nombre;
var nombre2;
var buffer;
var buffer2 = Buffer.from('Este es el elemento copiado');
var posición;
var contenido;


const rl = readline.createInterface(process.stdin, process.stdout);

var opciones = 'Que quieres hacer con este archivo\n' +
                "1) Mostrar su contenido y tamaño en bytes\n" +
                "2) Convertirlo en un JSON\n" +
                "3) Modificarlo\n" + 
                "4) Comparar con otro buffer y agregar un copia de este\n" +
                "5) Cortar\n"


rl.question('Ingresa el nombre del archivo el cual quieres leer \n', answer =>{
    nombre = answer;

    rl.question(opciones, answer =>{
        switch(answer){
            case '1':
                fs.readFile(`./${nombre}`, (err, data )=>{
                    if(err){
                        console.log(err)
                    }else{
                        console.log("Archivo leido")
                    }
        
                    buffer = data.toString();
                    
                    console.log(buffer +"\n Tamaño :" + " " + buffer.length + " Bytes");
                })
                break;

            case '2':
                fs.readFile(`./${nombre}`, (err, data )=>{
                    if(err){
                        console.log(err)
                    }else{
                        console.log("Archivo convertido")
                    }
        
                    buffer = data.toJSON();
                    console.log(buffer)
                    
                    
                })
                break;
            case '3':
                rl.question('Escribe el contenido que quieres agregar\n', answer =>{
                    contenido = answer;
                    rl.question('Esciber la posición en que lo quieres agregar\n', answer =>{
                     posición= parseInt(answer);
                    
                    fs.readFile(`./${nombre}`, (err, data )=>{
                        if(err){
                            console.log(err)
                        }else{
                            console.log("Contenido agregado");
                            data.write(contenido, posición);
                        }
            
                        buffer = data.toString();
                        console.log(buffer);
                    });
                })
                })
                 break;
            case '4':
                fs.readFile(`./${nombre}`, (err, data )=>{
                    if(err){
                        console.log(err)
                    }else{
                        console.log("Copiado");
                    }
                    buffer2.copy(data);
                    
                    console.log(data.toString());

                    var compare = Buffer.compare(data, buffer2);

                    if(compare === 0){
                        console.log('Los buffers son iguales');
                    }else{
                        console.log('Los buffer son diferentes');
                        
                    }   
                }); 
                break;
            case '5':

                rl.question('Ingrese la posición inicial desda la que quieres cortar\n', answer =>{
                    posición = answer;

                    rl.question('Ingrese la posición final', answer =>{
                       
                        fs.readFile(`./${nombre}`, (err, data )=>{
                           
                            var posición2 = answer;
                           
                            if(err){
                                console.log(err)
                            }else{
                                console.log("Contenido cortado");
                            }
                            
                            buffer = data.slice(posición, posición2);
                            console.log(buffer.toString());
                            
                            
                        });
                    })
                })
                 
                

        }
    })
})



