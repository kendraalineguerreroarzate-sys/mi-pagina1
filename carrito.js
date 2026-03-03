const contador1=document.getElementById("contador")
const lista=document.getElementById("lista-carrito")
const total=document.getElementById("totall")

let contadorCarrito=0;
let total1=0;
let carrito ={};

function mostrarMensaje(nombre,precio){

    if(carrito[nombre]){
        carrito[nombre].cantidad++;
        }else{
            carrito[nombre]={precio,cantidad:1};
        }

    actualizarCarrio();


    contadorCarrito++;
    contador1.textContent=contadorCarrito;

    total1+= precio;
    total.textContent=total1.toFixed(2)
    


}

function eliminarDelCarrito(item, nombre, precio){
if(carrito[nombre].cantidad>1){
    carrito[nombre].cantidad--;
}else{
    delete carrito[nombre];
}

actualizarCarrio();

contadorCarrito--;
contador1.textContent=contadorCarrito;

total1-= precio;
total.textContent=total1.toFixed(2)

}

function actualizarCarrio(){
    lista.innerHTML="";

    for(let producto in carrito){
        const itemCarrito=document.createElement('li');
        itemCarrito.textContent=`${producto} - $${carrito[producto].precio} + ${carrito[producto].cantidad}`;

        const btnEliminar=document.createElement('button');
        btnEliminar.textContent="x";
        btnEliminar.classList.add('eliminar');

        btnEliminar.onclick=function(){
            eliminarDelCarrito(itemCarrito,producto,carrito[producto].precio);
        }
    itemCarrito.appendChild(btnEliminar);
    lista.appendChild(itemCarrito);
    }
}
const button = document.querySelectorAll(".btn-agregar");
const cart = button.querySelector(".icono-car");

button.addEventListener('click', () => {
  cart.style.transition = 'transform 0.8s ease, opacity 0.8s';
  cart.style.transform = 'translateX(100px) scale(1.2)';
  cart.style.opacity = '0.5';

  setTimeout(() => {
    cart.style.transform = 'translateX(0) scale(1)';
    cart.style.opacity = '1';
  }, 800);
});