/*

Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

*/

// Array oggetti
const biciDaCorsa = [
    {
        nome: 'Bici gialla',
        peso: '7',
    }, {
        nome: 'Bici rossa',
        peso: '12',
    }, {
        nome: 'Bici blu',
        peso: '11',
    }, {
        nome: 'Bici arancione',
        peso: '8',
    }, {
        nome: 'Bici marrone',
        peso: '4',
    }, {
        nome: 'Bici nera',
        peso: '19',
    }, {
        nome: 'Bici bianca',
        peso: '17',
    }
];

const containerHtml = document.querySelector(".container");

// Destructuring con forEach
biciDaCorsa.forEach((element, index) => {

    // Inizializzo su una variabile nome e peso bici
    const nome = element.nome
    const peso = element.peso

    // Stampo in console: Nome bici e peso
    console.log(nome, parseFloat(peso))

});