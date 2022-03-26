var numeroInserito = parseInt(prompt("imserisci un numero di 4 cifre"));
somma = 0;

while (numeroInserito) {
    somma += numeroInserito % 10;
    numeroInserito = Math.floor(numeroInserito / 10);
}
alert(somma);