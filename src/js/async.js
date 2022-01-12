import {buscarHeroe, buscarHeroeAsync} from './js/promesas';


// promesaLenta.then(console.log);                         // Dos formas de indicar lo mismo
// promesaMedia.then(mensaje => console.log(mensaje));     // Dos formas de indicar lo mismo
// promesaRapida.then(console.log);

// // Promise.race([ promesaLenta, promesaMedia, promesaRapida])
//             // .then(mensaje => console.log(mensaje));
// Promise.race([ promesaLenta, promesaMedia, promesaRapida])
//             .then(console.log);


buscarHeroe('capi2').then(heroe => console.log(heroe)).catch(console.warn);
buscarHeroeAsync('iron2').then(heroe => console.log(heroe)).catch(console.warn);