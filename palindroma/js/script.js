// Palindroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

var parola = prompt("Inserisci una parola");
console.log(parola);

function ePalindroma(arg) {

  for (var i = arg.length - 1; i >= 0; i--) {
    console.log(arg[i]);
    if (arg[arg.length - 1] == arg[0] && arg[arg.length - 2] == arg[1] && arg[arg.length - 3] == arg[2] && arg[arg.length - 4] == arg[3]) {
      return true;
    } else {
      return false;
    }
  }
}
var prova = ePalindroma(parola);
console.log(prova);
