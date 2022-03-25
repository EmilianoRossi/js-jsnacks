let dieciNumeri=[];
let numero=0;
let somma=0;
for(let i= 0 ; i<10 ; i++){
    numero=parseInt(prompt("inserisci un numero"));
    dieciNumeri.push(numero);
    somma=somma + dieciNumeri[i];
}
alert("numeri inseriti: " + dieciNumeri);
alert("La somma è: " + somma);


