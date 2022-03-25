let nomeInvitato=prompt("La prego di comunicarmi il nome");
let listaFestaGatsby=["Emiliano" , "Rocco" , "Peter" , "Mark" , "Penelope" , "Carl"];
let valore=0;
//con la variabile valore impostata a 0 mettiamo un controllo per quanto riguarda l'accettazione del nome, scorrendo quindo e trovando
//un nome corrispondente il valore diventa 1
for(let i= 0 ; i< listaFestaGatsby.length; i++){
    if(listaFestaGatsby[i]==nomeInvitato){
        valore++;
        alert("Può partecipare alla festa, benvenuto/a!");
        break;
    }
}
// se non ha trovato il nome dell'invitato corrispondente, il valore sarà 0 e quindi mandare il messaggio invito non accettato
if(valore==0){
    alert("Mi dispiace ma il suo nome non è in lista");
}
        
