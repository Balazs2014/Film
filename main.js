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

    if (nev != "" && rendezo != "" && kiadas_eve != "") {
        let f = new Film(nev, rendezo, kiadas_eve);
        lista.push(f);
    }
    
    filmekKilistazas();

    document.getElementById('nev').value = "";
    document.getElementById('rendezo').value = "";
    document.getElementById('kiadas_eve').value = "";  
}

function filmekKilistazas() {
    if (lista.length !== 0) {
        let s = "<table class='table text-center table-striped'><tr><th>Név</th><th>Rendező</th><th>Kiadási év</th></tr>";
        for (let i = 0; i < lista.length; i++) {
            s += "<tr><td>" + lista[i].nev + "</td><td>" + lista[i].rendezo + "</td><td>" + lista[i].kiadas_eve + "</td></tr>";
        }

        s += "</table>";

        document.getElementsByTagName('table').innerHTML = "";
        document.getElementById('tablazat').innerHTML = s;
    }
}

document.getElementById('hozzaad').addEventListener('click', listaFeltolt);