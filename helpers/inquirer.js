const inquirer = require('inquirer');
require('colors');

const leerInput = async(mensaje) => {
      const question = [
    {
        type: 'input',
        name: 'desc',
        message: mensaje,
        validate(value) {
            if(value.length === 0) {
                return 'Por favor ingrese una tarea';
            } return true
        }
    }
];

const {desc} = await inquirer.prompt(question);
return desc;
}


const inquirerMenu = async() => {
    console.clear();
    console.log('====================='.blue);
    console.log('Seleccione una opción'.white);
    console.log('=====================\n'.blue);


    const {opt} = await inquirer.prompt(preguntas);


    return opt; 
}

const pausa = async() => {
    const question = [
        {
         type: 'input',
         name: 'enter',
         message: `\nPresione ${'ENTER'.green} para continuar\n`
        }
    ]
    console.log('\n');

     await inquirer.prompt(question);

}

const preguntas = [
{
    type: 'list',
    name: 'opt',
    message: '¿Qué deasea hacer?',
    choices: [
        {
            value: '1',
            name: `${'1.'.magenta} Crear tarea`
        
        }, 
        {
            value: '2',
            name: `${'2.'.magenta} Lista de tareas`
        },
        {
            value: '3',
            name: `${'3.'.magenta} Ver tareas completas`
        },
        {
            value: '4',
            name: `${'4.'.magenta} Ver tareas por completar`
        },
        {
            value: '5',
            name: `${'5.'.magenta} Completar tareas`
        },
        {
            value: '6',
            name: `${'6.'.magenta} Borrar tareas`
        },
        {
            value: '0',
            name: `${'0.'.magenta} Salir`
        },
       
    ]
}
];

const listadoPorBorrar = async( tareas = [] ) => {
    
    const choices = tareas.map( (tarea, i) => {
       const idd = `${i + 1}`;
        return {
            value: tarea.id,
            name: `${idd} ${tarea.desc}`
        }
        
        });

        choices.unshift({
            value: '0',
            name: '0 ' + 'CANCELAR'

        })
    
        const preguntas = [
            {
            type: 'list',
            name: 'id',
            message: 'BORRAR',
            choices  
                  }
        ]
        const {id} = await inquirer.prompt(preguntas);
        return id;
}

const confirmar = async(message) => {
    const question = [
        {
            type: 'confirm', 
            name: 'ok',
            message       
         }
    ];
    const {ok} = await inquirer.prompt(question);
    return ok;


}
  


const checkList = async( tareas = [] ) => {
    
    const choices = tareas.map( (tarea, i) => {
    //   podria estar de mas
        const idd = `${i + 1}`;

        return {
            value: tarea.id,
            name: `${idd} ${tarea.desc}`,
            checked: ( tarea.completadoEn ) ? true : false
        }
        
        });

        
    
        const pregunta = [
            {
            type: 'checkbox',
            name: 'ids',
            message: 'SELECCIONE',
            choices  
                  }
        ]
        const {ids} = await inquirer.prompt(pregunta);
        return ids;
}



module.exports = {
    inquirerMenu,
    pausa,
    leerInput, 
    listadoPorBorrar, 
    confirmar,
    checkList
}