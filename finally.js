//ejercicio 5.1
function dividir(a, b) {
    try {
        if (b === 0) throw new Error("División por cero no permitida.");
        console.log(a / b);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

dividir(10, 0);  
dividir(10, 2);  

//ejercicio 2

try {
    console.log(variableNoDefinida);
} catch (error) {
    console.log("Error:", error.message);
}

//ejercicio 3

try {
    console.log("Intentando...");
    throw new Error("El proceso salio mal");
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("el mensaje siempre estara.");
}