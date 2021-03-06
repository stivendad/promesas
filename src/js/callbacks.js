const heroes = {
    capi:{
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones',
    },
    iron:{
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero',
    },
    spider:{
        nombre: 'Spiderman',
        poder: 'la mejor reaccion alergica',
    },
}

export const buscarHeroe = ( id, callback ) => {

    const heroe = heroes[id];

    if( heroe ) {
        callback(null, heroe);
    } else {
        // Un error
        callback(`No existe un heroe con el id ${ id }`);
    }

    // callback(heroe)

}