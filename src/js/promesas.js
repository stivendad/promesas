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

export const buscarHeroe = ( id ) => {

    const heroe = heroes[id];

    // Una forma de tratar con promesas
    // const promesa = new Promise();
    // return promesa;

    return new Promise( ( resolve, reject ) => {

        if( heroe ) {
            resolve( heroe );
        } else {
            reject( `No existe un heroe con el id ${ id }` );  
        }

    });

}