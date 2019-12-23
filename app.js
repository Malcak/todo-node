const argv = require('./config/yargs').argv;
const porHacer = require('./to-do/to-do');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.desc);
        console.log(tarea);
        break;
    case 'listar':

        let listado = porHacer.getListado();
        console.log('==========POR HACER=========='.green);
        for (const tarea of listado) {
            console.log('============================='.grey);
            console.log('desc:'.blue, tarea.descripcion);
            console.log('estado:'.blue, tarea.completado);
            console.log('============================='.grey);
        }
        console.log('============================='.green);
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.desc, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.desc);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
        break;
};