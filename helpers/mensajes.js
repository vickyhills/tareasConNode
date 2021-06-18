require('colors');  
const inquire = require('inquirer');

const mostrarMenu  = () => {
      
    return new Promise( resolve => {
    
        console.clear();
        console.log('====================='.blue);
        console.log('Seleccione una opción'.green);
        console.log('=====================\n'.blue);

        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Tareas completas`);
        console.log(`${'4.'.green} Tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tareas`);
        console.log(`${'0.'.green} Salir`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione una opción:  ', (opt) =>
           { 
            readline.close();
            resolve(opt)}
        );
    
    })


}

const pausa = () => {
    return new Promise(resolve => {

   
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) =>
       {
        readline.close();
        resolve(opt);
    }

    );

})
}

module.exports = {
    mostrarMenu, pausa
}