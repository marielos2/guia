//ejercicio 4.1
const libro = {
    titulo: "los pajaritos",
    autor: "Marìa Lopez",
    año: 2025
};

const libroJSON = JSON.stringify(libro);
console.log(libroJSON);

//ejercicio 2

const jsonStr = '{"nombre": "Marielos", "edad": "15", "ciudad": "Arce"}';
const persona = JSON.parse(jsonStr);
console.log("Edad:", persona.edad);

//ejercicio 3
const productosJSON = '[{"id": 1, "producto": "Lápiz"}, {"id": 2, "producto": "Borrador"}]';
const productos = JSON.parse(productosJSON);
productos.forEach(producto => {
    console.log(producto.producto);
});
