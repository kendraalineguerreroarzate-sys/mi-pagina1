const flecha = document.getElementById("flecha");
const imageneActual = document.getElementById("imagen-actual");
let imagenes=["IMAGENES/azul.jpg","IMAGENES/rosa.jpg"];
let indiceImagen=0;


flecha.addEventListener("click", ()=>{
    indiceImagen=(indiceImagen + 1)% imagenes.length;
    imageneActual.src=imagenes[indiceImagen];
    if(indiceImagen===0){
        flecha.textContent=">";
    }else{
        flecha.textContent="<"
    }

});
const iconcart=document.getElementById('cari');
const menu=document.getElementById('menu2');
const cerrar=document.getElementById('cerrar');

iconcart.addEventListener("click",()=>{
    
console.log("carro")
    menu.classList.toggle("oculto");
});
cerrar.addEventListener("click",()=>{
    menu.classList.add("oculto");

});


