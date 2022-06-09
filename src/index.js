const fs = require('fs'); //File System
const fecha = new Date();
const sFecha = fecha.getFullYear();
var anio=[];
var cont = 0; 
var nAnio = 0;
var numMesAnio = 0;
const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const raiz = '.\\Tarea';
//Carpeta contenedora
if(!fs.existsSync(`${raiz}`)){
    fs.mkdirSync(`${raiz}`);
}

//Crear vector para años desde 2017
for(var k=2017;k<=sFecha;k++){
    anio[cont]=k.toString();
    cont++;
}

//Crear directorio para años
for(var i=0;i<anio.length;i++){
    nAnio = parseInt(anio[i],10);
    if(!fs.existsSync(`${raiz}\\${anio[i]}`)){
        fs.mkdirSync(`${raiz}\\${anio[i]}`);
    }
    //Crear directorio para meses
    for(var j=0;j<meses.length;j++){
        if(!fs.existsSync(`${raiz}\\${anio[i]}\\${meses[j]}`)){
            fs.mkdirSync(`${raiz}\\${anio[i]}\\${meses[j]}`);
        }
        //Crear archivos con los dias para cada mes y anio
        numMesAnio = getNumberOfDays(nAnio,j);
        for(var l = 1;l<=numMesAnio;l++){
            if(!fs.existsSync(`${raiz}\\${anio[i]}\\${meses[j]}\\${l.toString()}.txt`)){
                fs.writeFileSync(`${raiz}\\${anio[i]}\\${meses[j]}\\${l.toString()}.txt`, 'Autor: Marco Aseicha'); 
            }    
        }
    }
}

//Calcular numero de dias por mes y año
function getNumberOfDays(year, month) {
    var isLeap = ((year % 4) == 0 && ((year % 100) != 0 || (year % 400) == 0));
    return [31, (isLeap ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}