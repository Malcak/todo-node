const desc = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la nueva tarea'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Estado de la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {
        desc
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        desc,
        completado
    })
    .command('listar', 'Muestra por pantalla todas las tareas')
    .command('borrar', 'Elimina de la lista la tarea indicadas', {
        desc
    })
    .help()
    .argv;

module.exports = {
    argv
};