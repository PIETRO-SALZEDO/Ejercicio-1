var arrayLibros=[];

function agregarLibro (titulo, autor, genero, publicacion) {
    arrayLibros.push({titulo,autor,genero,publicacion});
}


function imprimirLibros (array) {
    for(let i =0;i<array.length;i++) {
        console.log(array[i]);
    }
}


let libros = agregarLibro("Hola", "Carlos", "Drama", 2010);
libros = agregarLibro("Adios", "Einer", "Horror", 2020);
libros = agregarLibro("Bienvenido", "German", "Misterio", 2015);
imprimirLibros(arrayLibros);

function buscarTitulo(titulo){
    for (let i = 0; i < arrayLibros.length; i++){
        if(arrayLibros[i].titulo.toLowerCase(). includes( titulo. toLowerCase()))
        if(arrayLibros[i].titulo.toLowerCase() === titulo.toLowerCase()){
            console.log(arrayLibros[i]);
        } else{ console.log( "este libro no esta en la base de datos")}
    }
}

let titulo2 = "";
buscarTitulo(titulo2)

function contarGenero(genero){
    let contador = 0;
    for ( let i = 0; i < arrayLibros.length; i++){
        if(arrayLibros[i].genero.toLowerCase() === genero.toLowerCase()){
            contador ++;
        }
    }
    console.log(`Hay ${contador} libros con este genero : ${genero}`)
}

contarGenero(titulo2);