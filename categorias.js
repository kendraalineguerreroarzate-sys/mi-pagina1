function filtrar(categoria){
    let productos = document.querySelectorAll(".categorias");
    let mensaje = document.getElementById('mensaje-categoria');
     
    productos.forEach(producto=>{
        if(categoria==='todos'){
            producto.style.display='inline-block';

        }else{
            if(producto.classList.contains(categoria)){
                producto.style.display='inline-block';
            }else{
                producto.style.display='none';
            }
        }
    });

    
}