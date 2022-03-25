let arrayMedia=[];
let somma=0;
let numeri=mediaAritmetica(somma);
function mediaAritmetica(sommaArray){
    for(let i= 0 ; i<10 ; i++){
        let inserisciNumero=parseInt(prompt("inserisci numero"));
        arrayMedia.push(inserisciNumero);
        sommaArray=sommaArray + arrayMedia[i];
        mediaArray=sommaArray / 10;
    }
    alert(("La somma è: ") + sommaArray);
    alert(("La media è: ") + mediaArray);
}