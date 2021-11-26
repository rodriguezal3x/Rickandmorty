
console.time('el tiempo fue')

fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(json => {
        getData(json)
    });

async function getData(data) {
    try {
        var responseData = await data.results;
        var stringE = JSON.stringify(responseData);
        var cMayus = stringE.toLowerCase();
        var letra = cMayus.match(/c/gi);
        var cuenta = 0;
        var x = letra[0];
        var letras = [];
        var conteo = [];

        for (let i = 0; i <= letra.length; i++) {
            if (x == letra[i]) {
                cuenta = cuenta + 1;
            } else {
                letras.push(x);
                conteo.push(cuenta);
                x = letra[i];
                cuenta = 0;
            }
        }

        var total = Math.max(...conteo);
        var totalL = conteo.indexOf(total);
        var rsp = "La lertra: " + letras[totalL] + " com " + total;
        console.log(rsp)

        document.getElementById("container1").innerHTML = rsp

    } catch (errors) {
        console.log(errors);
    }
};

fetch('https://rickandmortyapi.com/api/location')
    .then(response => response.json())
    .then(json => {
        getData2(json)
    });

async function getData2(data) {
    try {
        var responseData = await data.results;
        var stringE = JSON.stringify(responseData);
        var cMayus = stringE.toLowerCase();
        var letra = cMayus.match(/l/gi);
        var cuenta = 0;
        var x = letra[0];
        var letras = [];
        var conteo = [];

        for (let i = 0; i <= letra.length; i++) {
            if (x == letra[i]) {
                cuenta = cuenta + 1;
            } else {
                letras.push(x);
                conteo.push(cuenta);
                x = letra[i];
                cuenta = 0;
            }
        }

        var total = Math.max(...conteo);
        var totalL = conteo.indexOf(total);
        var rsp = "La lertra: " + letras[totalL] + " com " + total;
        console.log(rsp)

        document.getElementById("container2").innerHTML = rsp


    } catch (errors) {
        console.log(errors);
    }
};

fetch('https://rickandmortyapi.com/api/episode')
    .then(response => response.json())
    .then(json => {
        getData3(json)
    });

async function getData3(data) {
    try {
        var responseData = await data.results;
        var stringE = JSON.stringify(responseData);
        var cMayus = stringE.toLowerCase();
        var letra = cMayus.match(/e/gi);
        var cuenta = 0;
        var x = letra[0];
        var letras = [];
        var conteo = [];

        for (let i = 0; i <= letra.length; i++) {
            if (x == letra[i]) {
                cuenta = cuenta + 1;
            } else {
                letras.push(x);
                conteo.push(cuenta);
                x = letra[i];
                cuenta = 0;
            }
        }

        var total = Math.max(...conteo);
        var totalL = conteo.indexOf(total);
        var rsp = "La lertra: " + letras[totalL] + " com " + total;
        console.log(rsp)


        document.getElementById("container3").innerHTML = rsp

    } catch (errors) {
        console.log(errors);
    }
}

console.timeEnd('el tiempo fue')