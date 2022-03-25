let numeroUno=parseInt(prompt("Inserisci un numero"));
let numeroDue=parseInt(prompt("Inserisci un numero"));
alert("Calcolo numero maggiore tra: " + numeroUno + " E " + numeroDue);
if(numeroUno > numeroDue){
    alert("Il numero maggiore è " + numeroUno);
}else if(numeroDue > numeroUno){
    alert("Il numero maggiore è " + numeroDue);
}else{
    alert("I numeri sono uguali");
}