const fs = require('fs'); //File System
const raiz = '.\\Ordenar';
fs.readdir(`${raiz}`,async(err, files)=>{
    if (!err) {
        for (let i = 0; i < files.length; i++) {
            var element = files[i];
            var ext = traerExtencion(element);
            var carpeta = crearCarpeta(ext);
            if(carpeta != 'none'){
                fs.copyFileSync(`${raiz}\\${element}`,`${raiz}\\${carpeta}\\${element}`);
                fs.unlinkSync(`${raiz}\\${element}`);
            }
        }
    }else{
        console.log('El directorio esta vacio')
    }
})

function traerExtencion(params) {
    let file = params.split('.');
    if (file.length == 2) {
        return file[1];
    }else{
        return 'none';
    }
}

function crearCarpeta(e){
    if (e == 'jpg' || e == 'gif' || e == 'png' || e == 'ico' || e == 'jpeg') {
        if(!fs.existsSync(`${raiz}\\Imágenes`)){
            fs.mkdirSync(`${raiz}\\Imágenes`);
        }
        return 'Imágenes';
    }else if(e == 'mp3' || e == 'wav' || e == 'wma' || e == 'ogg' || e == 'wmv'){
        if(!fs.existsSync(`${raiz}\\Música`)){
            fs.mkdirSync(`${raiz}\\Música`);
        }
        return 'Música';
    }else if(e == 'avi' || e == 'dvd' || e == 'mov' || e == 'mp4' || e == 'mkv' || e == 'vob'){
        if(!fs.existsSync(`${raiz}\\Videos`)){
            fs.mkdirSync(`${raiz}\\Videos`);
        }
        return 'Videos';
    }else if(e == 'rar' || e == 'iso' || e == 'zip' || e == 'tgz' || e == 'tar'){
        if(!fs.existsSync(`${raiz}\\Comprimidos`)){
            fs.mkdirSync(`${raiz}\\Comprimidos`);
        }
        return 'Comprimidos';
    }else if(e == 'accdb' || e == 'doc' || e == 'docx' || e == 'xlsx' || e == 'pptx' || e == 'xls' || e == 'xlsm' || e == 'ppt'){
        if(!fs.existsSync(`${raiz}\\Microsoft`)){
            fs.mkdirSync(`${raiz}\\Microsoft`);
        }
        return 'Microsoft';
    }else if(e == 'txt' || e == 'dic' || e == 'diz' || e == 'exc' || e == 'pdf' || e == 'wtx'){
        if(!fs.existsSync(`${raiz}\\Texto`)){
            fs.mkdirSync(`${raiz}\\Texto`);
        }
        return 'Texto';
    }
    return 'none';
}