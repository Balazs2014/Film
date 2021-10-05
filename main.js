let lista = [];

class Film {

    constructor(nev, rendezo, kiadas_eve) {
        this.nev = nev;
        this.rendezo = rendezo;
        this.kiadas_eve = kiadas_eve;
    }
}

function listaFeltolt() {
    let nev = document.getElementById('nev').value;
    let rendezo = document.getElementById('rendezo').value;
    let kiadas_eve = document.getElementById('kiadas_eve').value;

    filmTomb.push(new Film(nev, rendezo, kiadas_eve));

    document.getElementById('nev').value = "";
    document.getElementById('rendezo').value = "";
    document.getElementById('kiadas_eve').value = "";
}

document.getElementById('hozzaad').addEventListener('click', listaFeltolt);