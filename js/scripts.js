function convertir(){
    var USD = (document.conversor.dolar.value);

    var resultado = USD * 95.06;
    resultado = resultado.toFixed(2);
    document.conversor.pesos.value = resultado;
}

//CLASE 9 EVENTOS

let btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", convertiste);

function convertiste(){
    console.log("Su conversion ha sido exitosa!");
}


