// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.
var pariODispari = prompt('Scegli tra pari e dispari');
console.log(pariODispari);
var scegliNumero = parseInt(prompt('Scegli un numero tra 1 e 5'));
console.log(scegliNumero);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

var numeroPC = numeroRandom(1, 5);
console.log(numeroPC);

// Sommiamo i due numeri.
var somma = scegliNumero + numeroPC;
console.log(somma);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
function pariODispariSomma(nostraSomma) {
  if (nostraSomma % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

var risultatoSomma = pariODispariSomma(somma);
if (risultatoSomma) {
  console.log('La somma è pari');
  risultatoSomma = 'pari';
} else {
  console.log('La somma è dispari');
  risultatoSomma = 'dispari';
}

// Dichiariamo chi ha vinto.
if (pariODispari == risultatoSomma) {
  console.log("Ha vinto l'utente");
} else {
  console.log('Ha vinto il PC');
}
