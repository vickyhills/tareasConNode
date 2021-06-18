require('colors');
const { guardarInfo, 
  leerDB } = require('./helpers/guardararchivo');
const {inquirerMenu,
       pausa, 
       leerInput,
      listadoPorBorrar, 
      confirmar,
      checkList, 
     }= require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


const main = async() => {

   let opt= '';
  const tareas = new Tareas(); 
  const tareasDB = leerDB();

  if (tareasDB) {
    tareas.cargarTareasDesdeArray(tareasDB);
  }
  do{
       opt = await inquirerMenu(); 
  
      switch (opt) {
        case '1':
          const desc = await leerInput('Descripción: ');
          tareas.crearTarea(desc);
        break;
        case '2': 
        // console.log(tareas.listadoArr);
        tareas.listadoCompleto();
          break;
          case '3':
        tareas.listarPendientesCompletas(true);
          break;
          case '4':
        tareas.listarPendientesCompletas(false);
          break;
          case '5': 
        const ids = await checkList( tareas. listadoArr);
        tareas.toggleCompletas( ids);
          break;
           case '6':
          const id = await listadoPorBorrar(tareas.listadoArr);
          if ( id !== '0') {
          const ok = await confirmar('Está seguro?');
          if(ok) {
          tareas.borrarTarea(id);
          console.log('TAREA BORRADA'.red.bold)
             }
          }
            break;
      }
    
    guardarInfo(tareas.listadoArr);
  
   
     await pausa();

  }while( opt !== '0');

}

main();
