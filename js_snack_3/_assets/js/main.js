/*

Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).

l'array egnerato da parte vostra dovrà essere di ad esempio nomi o cose: ['alberto', 'michele','angelo','simone']

se come numeri ad esemio ho 2 e 4 devo inserire in un array nuovo l'elemento in posizione 3

La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

Usiamo i nuovi metodi degli array foreach o filter.

*/

// Definiamo la funzione arrayInRange che accetta tre argomenti: un array, un numero a e un numero b. Questa funzione restituisce un nuovo array contenente gli elementi dell'array con posizione compresa tra a e b.
function arrayInRange(array, a, b) {
    // Metodo filter, Questo metodo restituisce un nuovo array contenente solo gli elementi che soddisfano una data condizione.
    return array.filter((_, index) => index >= a && index <= b);
}


// Definiamo un array di stringhe contenente quattro nomi.
const nomi = ['alberto', 'michele', 'angelo', 'simone'];