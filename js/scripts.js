$(document).ready(function() {
    //dolar Oficial
    const dolarOficialAPI = 'https://api-dolar-argentina.herokuapp.com/api/dolaroficial';
    $.ajax({
        method: "GET",
        url: dolarOficialAPI,
        success: function(data) {
                console.log("Data que retorna dolar:");
                console.log(data);
                $("#dolarValorAPI").prepend("<tr><td>"+ "Dolar Oficial" +"</td><td>" + data.compra + "</td><td>" + data.venta +"</td><td>"+data.fecha + "</td></tr>");
                $("#dolarAPI").prepend("<h3>"+"$"+ data.compra + "</h3>");
            }
            
    });
    //dolar Blue
    const dolarBlueAPI = 'https://api-dolar-argentina.herokuapp.com/api/dolarblue';
    $.ajax({
        method: "GET",
        url: dolarBlueAPI,
        success: function(data) {
                console.log("Data que retorna dolar:");
                console.log(data);
                $("#dolarValorAPI").prepend("<tr><td>"+ "Dolar Blue" +"</td><td>" + data.compra + "</td><td>" + data.venta +"</td><td>"+data.fecha + "</td></tr>");
            }
        
    });

    //Euro
    const euroAPI = 'https://api-dolar-argentina.herokuapp.com/api/euro/nacion';
    $.ajax ({
        method: "GET",
        url: euroAPI,
        success: function(data) {
            console.log("Data que retorna euro:");
                console.log(data);
                $("#dolarValorAPI").append("<tr><td>"+ "Euro Banco Nacion" +"</td><td>" + data.compra + "</td><td>" + data.venta +"</td><td>"+data.fecha + "</td></tr>");
                $("#euroAPI").prepend("<h5>"+ "$"+ data.compra + "</h5>");
            
        }
    });

    const realAPI = 'https://api-dolar-argentina.herokuapp.com/api/real/nacion';
    $.ajax ({
        method: "GET",
        url: realAPI,
        success: function(data){
            console.log("Data que retorna real: ");
            console.log(data);
            $("#dolarValorAPI").append("<tr><td>"+ "Real Banco Nacion" +"</td><td>" + data.compra + "</td><td>" + data.venta +"</td><td>"+data.fecha + "</td></tr>");

        }
    });


    const ethAPI = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum";
    $.ajax ({
        method: "GET",
        url: ethAPI,
        success: function(data){
            console.log("Data que retorna ETH: ");
            console.log(data);
            let datos = data;
            datos.forEach(ethValor => {
                $("#dolarValorAPI").append("<tr><td>" + ethValor.name + "</td><td>" + ethValor.current_price+" USD" +"</td><td>"+" - " + "</td><td>" + ethValor.last_updated + "</td></tr>");
                $("#_ethAPI").prepend("<h3>"+ ethValor.current_price+" USD" + "</h3>");
            });

        }
    });
    const btcAPI = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin";
    $.ajax ({
        method: "GET",
        url: btcAPI,
        success: function(data){
            console.log("Data que retorna BTC: ");
            console.log(data);
            let datos2 = data; 
            datos2.forEach(btcValor => {
                $("#dolarValorAPI").append("<tr><td>" + btcValor.name + "</td><td>" + btcValor.current_price+" USD" +"</td><td>"+" - " + "</td><td>" + btcValor.last_updated + "</td></tr>");
                $("#_btcAPI").prepend("<h3>"+ btcValor.current_price+" USD" + "</h3>");
            });
        }
    });
   


    
});


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
$("#resultado").html("Resultado $" + resultado.toFixed(2));
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























