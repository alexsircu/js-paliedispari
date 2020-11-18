// Palindroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

// var parola = prompt("Inserisci una parola");
// console.log(parola);

// prima soluzione veloce
// function checkPalindrom (str) {
//   return str == str.split('').reverse().join('');
// }
//
// var prova = checkPalindrom (parola);
// if (prova) {
//   console.log("La parola scritta è palindroma");
// } else {
//   console.log("La parola scritta non è palindroma");
// }

// seconda soluzione più completa
// function ePalindroma(arg) {
//
//   for (var i = arg.length - 1; i >= 0; i--) {
//     console.log(arg[i]);
//     if (arg[arg.length - 1] == arg[0] && arg[arg.length - 2] == arg[1] && arg[arg.length - 3] == arg[2] && arg[arg.length - 4] == arg[3]) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// var prova = ePalindroma(parola);
// console.log(prova);

// terza soluzione definitiva e migliore
function ePalindroma(arg) {

  var lunghezza = arg.length;
  for (var i = 0; i < (lunghezza / 2); i++) {
    if (arg[i] !== arg[lunghezza - 1 - i]) {
      return false;
    }
    return true;
  }
}

var testWord = document.getElementById("test-word");
testWord.addEventListener('click',
function () {
  var parola = document.getElementById("word").value;

  var verificaPolindroma = ePalindroma(parola);
  if (verificaPolindroma) {
    document.getElementById("paliornot").innerHTML = "è palindroma";
    console.log("La parola inserita è polindroma");
  } else {
    document.getElementById("paliornot").innerHTML = "non è palindroma";
    console.log("La parola inserita non è polindroma");
  }
}
)
