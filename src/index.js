import {obtenerHeroesArr, obtenerHeroeAwait, heroesCiclo, heroeIfAwait} from './js/await';


// console.time('await');
// obtenerHeroeAwait('capi1').then(heroe =>{

//     console.log(heroe);
    
//     console.timeEnd('await');
// }).catch(console.warn);

heroesCiclo();

heroeIfAwait('iron');