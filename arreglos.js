///ejercicio 2
function sumdeArray() {
    let number = [3, 7, 2, 9, 5];
    let sum = 0;
    for (let num of number) {
        sum += num;
    }
    console.log("Suma:", sum);
}

sumdeArray();

///ejercicio 2

function Mayor() {
    let number = [12, 45, 6, 89, 23];
    let mayor = number[0];
    for (let num of number) {
        if (num > mayor) {
            mayor = num;
        }
    }
    console.log("Número mayor:", mayor);
}

Mayor();

///ejercicio 3

function Menores() {
    let number = [15, 3, 8, 12, 1];
    let menores = [];
    for (let num of number) {
        if (num < 10) {
            menores.push(num);
        }
    }
    console.log("Números menores a 10:", menores);
}

Menores()