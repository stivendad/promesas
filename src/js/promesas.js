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
            setTimeout(() => {
                resolve( heroe );
            }, 1000);
        } else {
            reject( `No existe un heroe con el id ${ id }` );  
        }

    });

}

export const buscarHeroeAsync = async( id ) => {

    const heroe = heroes[id];

        if( heroe ) {
            return heroe;
        } else {
            throw `No existe un heroe con el id ${ id }`;  
        }

}

const promesaLenta = new Promise( ( resolve, reject) => {
    setTimeout(() => resolve('Promesa lenta'), 3000);
});

const promesaMedia = new Promise( ( resolve, reject) => {
    setTimeout(() => resolve('Promesa Media'), 2000);
});

const promesaRapida = new Promise( ( resolve, reject) => {
    setTimeout(() => resolve('Promesa Rapida'), 1000);
});

export{
    promesaLenta, 
    promesaMedia, 
    promesaRapida
}