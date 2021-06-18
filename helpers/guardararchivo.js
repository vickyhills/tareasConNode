const fs = require('fs');
const archivo = './dment/data.json';

const guardarInfo = (data) => {
    
    fs.writeFileSync(archivo, JSON.stringify(data));

}

const leerDB  = () => {
   
    console.log('asd'); 
    if (!fs.existsSync( archivo)) {
        return null; 
     } 
    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
    console.log(info);
    const datab = JSON.parse(info);
    console.log(datab);

        return datab;
}

module.exports = {
  guardarInfo, leerDB
} 