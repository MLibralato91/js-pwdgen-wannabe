const eta = '21';
// let nome = 'Michele';
// let cognome= 'Libralato';
// let myColor= 'Blue';

// console.log(nome);
// console.log(cognome);
// console.log(myColor);


let nome = prompt("Come ti chiami?");
let cognome = prompt("Qual è il tuo cognome?");
let colore = prompt("Qual è il tuo colore preferito?");

document.getElementById("app").innerHTML= nome + cognome + colore + eta;
console.log(nome);