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

// Weight
let weight = "Kg";

// Assumo la prima bici come la più leggera
let biciLeggera = biciDaCorsa[0];

// Seleziono il container nel DOM
const containerHtml = document.querySelector(".container");

// Destructuring e forEach per eseguire una funzione per ogni elemento presente nell'array
biciDaCorsa.forEach(({nome, peso}) => {
    if (parseFloat(peso) < parseFloat(biciLeggera.peso)) {
        biciLeggera = {nome, peso}; // Aggiorno la bici più leggera
    }
});

const biciHtml = `
    <div class="item">
        <p class="nome">${biciLeggera.nome} <b class="peso">${biciLeggera.peso} ${weight}</b></p>
    </div>
`;

// Stampo in pagina la bici più leggera
containerHtml.innerHTML = biciHtml;