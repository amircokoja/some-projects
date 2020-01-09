function getPoziv(mojUrl, pokFunk) {
    var zahtjev = new XMLHttpRequest();

    zahtjev.onload = function () {
        if (zahtjev.status === 200) {
            pokFunk(zahtjev.responseText);
        }
        else {
            alert("Server javlja grešku: " + req.statusText);
        }
    }
    zahtjev.onerror = function () {
        alert("Greška u komunikaciji sa serverom.");
    };
    zahtjev.open("GET", mojUrl, true);
    zahtjev.send(null);
}

function dodajPrebivalista(x) {
    var niz = JSON.parse(x);
    for (var i = 0; i < niz.length; i++) {
        var r = niz[i];
        var noviRed = ("<option value='" + r.id +"'>" + r.opis + "</option>");
        document.getElementById("OpstinaP").innerHTML += noviRed;
        document.getElementById("OpstinaR").innerHTML += noviRed;
    }
}


function btnDownload() {
    var mojUrl = 'https://wrdstudentformaplikacija2.azurewebsites.net/Home/OpstinaGetAllJson';
    getPoziv(mojUrl, dodajPrebivalista);
}

btnDownload();

