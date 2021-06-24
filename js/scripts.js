//FUNCION DE EMULADOR//
function convertir()
{
    var valor = parseFloat($("#cantidad").val());
    var convertirDe = $("#convertirDe").val();
    var convertirA = $("#convertirA").val();
    var dolar = 95.35;
    var euro = 113.61;
    var bitcoin = 3727229.26;
    var ethereum = 230454.09;
    resultado = 0;



    //PESO Y DOLAR
   //Peso a Dolar
   if(convertirDe==1&&convertirA==2){
       resultado=valor/dolar;
   }

 //dolar a peso
   else if(convertirDe==2&&convertirA==1){
    resultado=valor*dolar;
}



//PESO Y EURO
   //peso a euro
   else if(convertirDe==1&&convertirA==3){
       resultado=valor/euro;
   }

  //euro a peso
else if(convertirDe==3&&convertirA==1){
    resultado=valor*euro;
}



//DOLAR Y EURO
//dolar a euro
else if(convertirDe==2&&convertirA==3){
    resultado=valor*(dolar/euro);
}

//euro a dolar
else if(convertirDe==3&&convertirA==2){
    resultado=valor*(euro/dolar);
}



//BITCOIN Y PESO
//peso a btc
else if(convertirDe==1&&convertirA==4){
    resultado=valor/bitcoin;
}

//btc a peso
else if(convertirDe==4&&convertirA==1){
    resultado=valor*bitcoin;
}



//ETHEREUM Y PESO
//peso a eth
else if(convertirDe==1&&convertirA==5){
    resultado=valor/ethereum;
}

//eth a peso 
else if(convertirDe==5&&convertirA==1){
    resultado=valor*ethereum;
}



//BITCOIN Y ETHEREUM
//btc a ethereum
else if(convertirDe==4&&convertirA==5){
    resultado=valor*(bitcoin/ethereum);
}

//eth a btc
else if(convertirDe==5&&convertirA==4){
    resultado=valor*(ethereum/bitcoin);
}



//BTC Y DOLAR
//btc a dolar
else if(convertirDe==4&&convertirA==2){
    resultado=valor*(bitcoin/dolar);
}

//dolar a btc
else if(convertirDe==2&&convertirA==4){
    resultado=valor*(dolar/bitcoin);
}


//ETH Y DOLAR
//eth a dolar
else if(convertirDe==5&&convertirA==2){
    resultado=valor*(ethereum/dolar);
}

//dolar a eth
else if(convertirDe==2&&convertirA==5){
    resultado=valor*(dolar/ethereum);
}


//BTC Y EURO
//btc a euro
else if(convertirDe==4&&convertirA==3){
    resultado=valor*(bitcoin/euro);
}

//euro a btc
else if(convertirDe==3&&convertirA==4){
    resultado=valor*(euro/bitcoin);
}

//ETH Y EURO
//eth a euro
else if(convertirDe==5&&convertirA==3){
    resultado=valor*(ethereum/euro);
}
//euro a eth
else if(convertirDe==3&&convertirA==5){
    resultado=valor*(euro/ethereum);
}

//peso a peso, dolar a dolar, euro a euro, btc a btc y eth a eth;
else{
    resultado=valor;
}
document.getElementById("resultado").innerHTML="Resultado $"+resultado.toFixed(2);
}


////FUNCION DE ICONOS CON JQUERY/////
$("#seccionValores").prepend("<h5 style='text-align: center; margin-top: 45px;'>Click en los iconos para ver sus valores!</h5>");

$("#muestraValorDolar").click(function(){
    $("#valorDolar").fadeIn(1000)});

$("#muestraValorEuro").click(function(){
    $("#valorEuro").fadeIn(1000)});

$("#muestraValorBTC").click(function(){
    $("#valorBTC").fadeIn(1000)});

$("#muestraValorETH").click(function(){
    $("#valorETH").fadeIn(1000)
});
    





//////////////////////////////////////////////////


















//function verValorDelDolar () {
 //   let valorDolar = document.getElementById("valorDolar");
   // valorDolar.innerText="Valor del dolar: $95.06";
//}

//function verValorDelEuro () {
   // let valorEuro = document.getElementById("valorEuro");
   // valorEuro.innerText="Valor del Euro: $113.61";
//}

//function verValorDelBTC () {
   // let valorBTC = document.getElementById("valorBTC");
   // valorBTC.innerText="Valor del BTC: $3727229.26";
//}

//function verValorDelETH () {
    //let valorETH = document.getElementById("valorETH");
    //valorETH.innerText="Valor del ETH: $230454.09";
//}

