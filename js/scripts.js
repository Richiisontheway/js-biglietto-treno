

//km da percorrere

const KilometriDaPercorrere = prompt ('quanti km vuoi percorrere')

console.log('km',KilometriDaPercorrere)

if (isNaN(KilometriDaPercorrere)) {
    alert('Scrivi un Numero Stronzo')
}

// Moneta

const Moneta = ('€')

// Prezzo

const PrezzoNormaleDaPagare = (0.21 * KilometriDaPercorrere).toFixed(2)

console.log('prezzo',PrezzoNormaleDaPagare + Moneta)

// Età

const Age = prompt ('quanti anni hai')
console.log('età',Age)

// Calcolo finale
let PrezzoPerVecchi

let PrezzoPerGiovini

if (isNaN(Age)) {
    alert('Scrivi un Numero')

}
if(Age > 65){
    PrezzoPerVecchi = ((0.21 * KilometriDaPercorrere)*0.6).toFixed(2)
    console.log('Per Vecchi',PrezzoPerVecchi)
}
if(Age < 18){
    PrezzoPerGiovini = ((0.21 * KilometriDaPercorrere)*0.8).toFixed(2)
    console.log('Per Giovini',PrezzoPerGiovini)
}