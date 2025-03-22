//ejercicio 6
function esperarSegundos(segundos) {
    console.log("Esperando...");
    setTimeout(function() {
        console.log("tiempo trascurrido ${segundos} segundos.");
    }, segundos * 1000);
}

esperarSegundos(3);