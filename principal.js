//--------yargs config------------

//options for yargs menu
let options = {
    id: {
        alias: 'i',
        demand: true
    },
    nombre: {
        alias: 'n',
        demand: true
    },
    cedula: {
        alias: 'c',
        demand: true
    },
}//End of options

//variable to manage yargs

const argv = require('yargs')
                .command('inscribir','Inscripción a los cursos',options)
                .argv;

//Require inscription module
const inscription = require('./inscription');

inscription.savedata(argv.id, argv.nombre, argv.cedula);