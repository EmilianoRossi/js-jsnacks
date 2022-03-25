let utenteVinto=false;
while(utenteVinto == false){
    let numeroUtente=parseInt(prompt("Inserisci numero da 1 a 10"));
    let numeroComputer=Math.floor((Math.random(1)*10));
    alert("Numero computer: " + numeroComputer); 
    
    if(numeroUtente == numeroComputer){
        alert("Hai vinto");
        utenteVinto=true;
    }else{
        alert("Hai perso");
    }
}