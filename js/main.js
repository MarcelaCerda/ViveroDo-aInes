fetch('./js/productos.json') 
    .then(response => response.json()) 
    .then(data =>{   
        console.log("data:",data )
        let productos=data.arrayproductos;
       // console.log("auxiliar:"+auxiliar)
       // let productos=auxiliar

        console.log("productos:",productos)
        

        let cad='';

            /*html*/ 
            
            for(producto of productos){ 
            //    console.log("producto:", producto)
                cad += `
                        <div class="tarjeta">
                            <img src="${producto.imagen}" alt="${producto.nombre}">
                            <div class="cuerpo">
                                <h4>Producto:  ${producto.id} - ${producto.nombre}</h4>
                                <p>${producto.descripcion}</p>
                                <p>Precio:${producto.precio} </p>
                                <p>Stock:${producto.stock} </p>
                                
                            </div>
                        </div>   
                    `
                }
                cad += `</div>
                        `

            console.log(cad)
            document.getElementById("productos").innerHTML = cad;
            }
    );









/*

 

    









*/





/*let cad=`<div class="container">`

for(elemento of data){

    cad+=`
        <div class="tarjeta">
            <img src="${elemento.image}" alt="foto">
            <div class="cuerpo">
                <h4>Nombre:${elemento.id} - ${elemento.name}</h4>
                <p>Genero:${elemento.gender}</p>
                <p>Especie:${elemento.species} </p>
            </div>
        </div>
    `
}
cad+=`

console.log(cad)

document.getElementById("tarjetas").innerHTML=cad

*/




















/*let cad=`<div class="container">       `
for( personaje of data){
    cad +=`
        <div class="tarjeta">
            <img src="${personaje.image}" alt="${personaje.name}">
            <div class="cuerpo">
                <h4>Nombre: ${personaje.name}</h4>
                <p>Genero:${personaje.gender}</p>
                <p>Especie:${personaje.species} </p>
            </div>
        </div>
    `    
}
cad+=`</div>          `
console.log(cad)
document.getElementById("fotos").innerHTML=cad;
*/














/*let cad=`<div class="container">
       `
for(personaje of data){  // data es un arreglo que contiene a los personajes
    cad+=`<div class="tarjeta">
            <img src="${personaje.image}" alt="${personaje.name}">
            <div class="cuerpo">
                <h4>Personaje:${personaje.id} - ${personaje.name}</h4>
                <p>Genero:${personaje.gender}</p>
                <p>Especie:${personaje.species}</p>
            </div>
        </div>
    `
}
cad+=`</div>
      `       // le agrego el cierre de la etiqueta div
console.log(cad)
document.getElementById("fotos").innerHTML=cad
*/

