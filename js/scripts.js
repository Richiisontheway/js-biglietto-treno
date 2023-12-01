

//km da percorrere

const KilometriDaPercorrere = prompt ('quanti km vuoi percorrere')

console.log('km',KilometriDaPercorrere)

if (isNaN(KilometriDaPercorrere)) {
    alert('Scrivi un Numero Stronzo')
}

//Moneta

const Moneta = ('€')

//Prezzo

let Prezzo = (0.21 * KilometriDaPercorrere).toFixed(2)

console.log('prezzo',Prezzo + Moneta)

//Età

const Age = prompt ('quanti anni hai')
console.log('età',Age)

//Calcolo finale


if (isNaN(Age)) {
    alert('Scrivi un Numero')
}
if(Age > 65){
    Prezzo = ((0.21 * KilometriDaPercorrere)*0.6).toFixed(2)
    console.log('Per Vecchi',Prezzo)
}
if(Age < 18){
    Prezzo = ((0.21 * KilometriDaPercorrere)*0.8).toFixed(2)
    console.log('Per Giovini',Prezzo)
}

//stamp su html

document.getElementById ("prezzo-biglietto").innerHTML = Prezzo + Moneta