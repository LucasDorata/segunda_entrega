const productos = ['computadoras', 'consolas', 'vidojuegos'];

const computadoras = {
    marca: 'aorus',
    cantidad: 10,
    color: 'negro',
}

const consolas = {
    marca: 'sony',
    cantidad: 20,
    color: 'negro' 
}

const vidojuegos = {
    marca: 'sony',
    cantidad: 40,
    formato: 'fisico',
}

class producto {
    constructor() {
        this.id = productos.length + 1;
        this.nombre = prompt('ingrese el nombre del producto');
        this.precio = parseFloat(prompt('ingrese el precio'));
        this.cantidad = parseInt(prompt('ingrese cantidad'));
    }
}

const opciones = prompt('ingrese 1 para agregar productos, 0 para salir');

const agregarProductos = () =>{
    const nuevoProducto = new producto();
    productos.push(nuevoProducto);
    console.log(productos);
}


const menu = (opcion) => {
    switch (opcion){
        case '1':
            agregarProductos();
            break
        default:
            alert('ingreso un numnero incorrecto, intente de nuevo');
            opciones = prompt('ingrese 1 para agregar productos, 0 para salir');
            break
    }
    opciones = prompt('ingrese 1 para agregar productos, 0 para salir');
}

 while (opciones !== '0'){
     menu(opciones)
}