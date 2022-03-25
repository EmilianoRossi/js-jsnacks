let stringaUno=prompt("Inserire la prima stringa");
let stringaDue=prompt("Inserire la seconda stringa");
if(stringaUno.length>stringaDue.length){
    alert(stringaUno + "è piu lunga");
}else if(stringaDue.length>stringaUno.length){
    alert(stringaDue + "è piu lunga");
}else{
    alert("Le stringe hanno la stessa lunghezza");
}