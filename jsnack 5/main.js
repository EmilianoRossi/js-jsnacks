let seiNumeriDispariArray=[];

for(let i=0 ; i < 6 ; i++){
    let numero=parseInt(prompt("inserisci un numero"));
    console.log=(numero);

    if(numero%2 == 0){
        alert("Inserire numero dispari");
    }else if(numero%2 == 1){
        seiNumeriDispariArray.push(numero);
    }else{
    alert("inserire un numero per favore");
    }
}
    alert(seiNumeriDispariArray);