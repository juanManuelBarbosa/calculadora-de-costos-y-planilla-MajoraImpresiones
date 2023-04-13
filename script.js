//creacion de variables para trabajar con los elementos
let nombreProducto;
let costomaterial ;
let cantidadHoras;
let pintado;
let costoExtra;

//persistencia de datos del local storage
let lista = localStorage.getItem("PRODUCTOS");
let contenedorProductos = document.querySelector(".contenedor-productos");

contenedorProductos.innerHTML = localStorage.getItem("PRODUCTOS");

//enlazando los elementos que van a mostrar el resultado de la calculadora 
let resFilamento = document.querySelector("#resFilamento");
let resLuz = document.querySelector("#resLuz");
let resGanMajora = document.querySelector("#resGanMajora");
let resGanJuanma = document.querySelector("#resGanJuanma");
let resGanLudmi = document.querySelector("#resGanLudmi");
let resCostoTotal = document.querySelector("#resCostoTotal");
//asignacion de los botones 
let botonCalcular = document.querySelector("#calcular");
let botonAgregarPlanilla = document.querySelector('#agregarPlanilla')

//muestra los valores en la vista de la calculadora


function CalcularValores(){
    resFilamento.innerText = costomaterial
    resLuz.innerText = (parseInt(cantidadHoras) * 3);

    if(pintado == "No"){
        resGanMajora.innerText = (  (parseInt(cantidadHoras) * 3) + parseInt(costomaterial)) * 2 ;
        resGanJuanma.innerText = (  (parseInt(cantidadHoras) * 3) + parseInt(costomaterial)) * 2 ;
        resGanLudmi.innerText = (  (parseInt(cantidadHoras) * 3) + parseInt(costomaterial)) * 2 ;
        resCostoTotal.innerText = ( ( (parseInt(cantidadHoras) * 3) + parseInt(costomaterial)) * 2) * 3 + parseInt(costoExtra);
    } else if(pintado == "Si"){
        resGanMajora.innerText = (((parseInt(cantidadHoras) * 3) + parseInt(costomaterial)) * 2) + ((((parseInt(cantidadHoras) * 3) + parseInt(costomaterial)) * 2))/2;
        resGanJuanma.innerText = (((parseInt(cantidadHoras) * 3) + parseInt(costomaterial)) * 2) + ((((parseInt(cantidadHoras) * 3) + parseInt(costomaterial)) * 2))/4
        resGanLudmi.innerText = (((parseInt(cantidadHoras) * 3) + parseInt(costomaterial)) * 2) + ((((parseInt(cantidadHoras) * 3) + parseInt(costomaterial)) * 2))/4
        resCostoTotal.innerText = ( ( (parseInt(cantidadHoras) * 3) + parseInt(costomaterial)) * 2) * 4 + parseInt(costoExtra);
    }
}
//evento para calcular el costo de los productos 


function setearValores(){
    nombreProducto = document.querySelector("#nombreProducto").value;
    costomaterial = document.querySelector("#material").value;
    cantidadHoras = document.querySelector("#cantidadHoras").value;
    pintado = document.querySelector("#pintado").value;
    costoExtra = document.querySelector("#costoExtra").value;
}


botonCalcular.addEventListener("click" ,()=>{
    setearValores()
    if(costomaterial == 0 || cantidadHoras == 0){
        alert("completa el formulario correctamente")
    }else{
        CalcularValores()
    }
});


//evento para agregar los productos a la planilla 
botonAgregarPlanilla.addEventListener("click" , ()=>{
//crea un nuevo producto en la planilla y lo almacena en el local storage 
  let productoNuevo = `<div class="planilla"> <p>${nombreProducto}</p> <p>${costomaterial}</p> <p>${resLuz.textContent}</p> <p>${resGanMajora.textContent}</p> <p>${resGanJuanma.textContent}</p> <p>${costoExtra}</p> <p>${pintado}</p> <p>${resCostoTotal.textContent}</p> </div> `;
  lista += productoNuevo ;
  localStorage.setItem("PRODUCTOS" , lista )
  contenedorProductos.innerHTML = localStorage.getItem("PRODUCTOS")

})


//borrar la planilla
let borrarPlanilla = document.querySelector("#borrarPlanilla");

borrarPlanilla.addEventListener( "click" ,()=>{
    localStorage.removeItem("PRODUCTOS");
    contenedorProductos.innerHTML = localStorage.getItem("PRODUCTOS")
} )