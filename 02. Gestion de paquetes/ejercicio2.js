const os = require("os");
const path = require("path");
const fs = require("fs");

fs.writeFile('./texto1.txt', datos(), (err, data)=>{
    if(err) console.log(err);
    console.log("Archivo creado");
});



function datos(){
   var a =  os.freemem();
   var b = os.platform();
   var c = path.join(__filename);
  
   return "Memoria libre : "  + a + "\n Plataforma  : " + b + "\n Path del archivo: " + c;
}

/* la aplicación importa los módulos os, path, y fs. Mediante una función se obtienen los datos de la memoria libre del sistema,
    la plataforma en la que se ejecuta la aplicación y el lugar donde se encuentra, luego con la función .writefile del modulo fs
    importa esta información a un archivo de texto, pasandole la función anteriormente creada como argumento. Si la creación del archivo
    es exitosa en la cosola saldra un texto diciendo "Archivo creado".
    */