//FUNCION DE EMULADOR//
function convertir()
{   
    //DOLAR OFICIAL
    $.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial').done(function(dolarOficialValor){

        //DOLAR BLUE
        $.get('https://api-dolar-argentina.herokuapp.com/api/dolarblue').done(function(dolarBlueValor){


            //EURO
            $.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion').done(function(euroValor){
    

                //REAL
                $.get('https://api-dolar-argentina.herokuapp.com/api/real/nacion').done(function(realValor){
        
                
            //BTC
            $.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin').done(function(BTCValor){
                console.log("VALOR QUE RETORNA BTC");
                console.log(BTCValor.current_price);
          
        
    
    var valor = parseFloat($("#cantidad").val());
    var convertirDe = $("#convertirDe").val();
    var convertirA = $("#convertirA").val();
    var dolar = dolarOficialValor.compra;
    var dolarBlue = dolarBlueValor.compra;
    var real = realValor.compra;
    var euro = euroValor.compra;
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



//PESO Y DOLAR BLUE
//peso a Dolar Blue
 else if(convertirDe==1&&convertirA==3){
     resultado=valor/dolarBlue;
 }
//dolar Blue a peso
 else if(convertirDe==3&&convertirA==1){
     resultado=valor*dolarBlue;
 }


//PESO Y EURO
   //peso a euro
   else if(convertirDe==1&&convertirA==5){
       resultado=valor/euro;
   }

  //euro a peso
else if(convertirDe==5&&convertirA==1){
    resultado=valor*euro;
}



//DOLAR Y EURO
//dolar a euro
else if(convertirDe==2&&convertirA==5){
    resultado=valor*(dolar/euro);
}

//euro a dolar
else if(convertirDe==5&&convertirA==2){
    resultado=valor*(euro/dolar);
}

//DOLAR BLUE Y EURO
//dolar Blue a euro
else if(convertirDe==3&&convertirA==5){
    resultado=valor*(dolarBlue/euro);
}

//euro a dolar Blue
else if(convertirDe==5&&convertirA==3){
    resultado=valor*(euro/dolarBlue);
}

//BITCOIN Y PESO
//peso a btc
else if(convertirDe==1&&convertirA==6){
    resultado=valor/bitcoin;
}

//btc a peso
else if(convertirDe==6&&convertirA==1){
    resultado=valor*bitcoin;
}



//ETHEREUM Y PESO
//peso a eth
else if(convertirDe==1&&convertirA==7){
    resultado=valor/ethereum;
}

//eth a peso 
else if(convertirDe==7&&convertirA==1){
    resultado=valor*ethereum;
}



//BITCOIN Y ETHEREUM
//btc a ethereum
else if(convertirDe==6&&convertirA==7){
    resultado=valor*(bitcoin/ethereum);
}

//eth a btc
else if(convertirDe==7&&convertirA==6){
    resultado=valor*(ethereum/bitcoin);
}



//BTC Y DOLAR
//btc a dolar
else if(convertirDe==6&&convertirA==2){
    resultado=valor*(bitcoin/dolar);
}

//dolar a btc
else if(convertirDe==2&&convertirA==6){
    resultado=valor*(dolar/bitcoin);
}

//BTC Y DOLAR BLUE
//btc a Dolar Blue
else if(convertirDe==6&&convertirA==3){
    resultado=valor*(bitcoin/dolarBlue);
}

//dolarblue a btc
else if(convertirDe==3&&convertirA==6){
    resultado=valor*(dolarBlue/bitcoin);
}


//ETH Y DOLAR
//eth a dolar
else if(convertirDe==7&&convertirA==2){
    resultado=valor*(ethereum/dolar);
}

//dolar a eth
else if(convertirDe==2&&convertirA==7){
    resultado=valor*(dolar/ethereum);
}

//ETH Y DOLAR BLUE
//eth a dolarBlue
else if(convertirDe==7&&convertirA==3){
    resultado=valor*(ethereum/dolarBlue);
}

//dolarBlue a eth
else if(convertirDe==3&&convertirA==7){
    resultado=valor*(dolarBlue/ethereum);
}


//BTC Y EURO
//btc a euro
else if(convertirDe==6&&convertirA==5){
    resultado=valor*(bitcoin/euro);
}

//euro a btc
else if(convertirDe==5&&convertirA==6){
    resultado=valor*(euro/bitcoin);
}

//ETH Y EURO
//eth a euro
else if(convertirDe==7&&convertirA==5){
    resultado=valor*(ethereum/euro);
}
//euro a eth
else if(convertirDe==5&&convertirA==7){
    resultado=valor*(euro/ethereum);
}



//REAL Y PESO
 //Peso a Real
 else if(convertirDe==1&&convertirA==4){
    resultado=valor/real;
}
//Real a Peso
else if(convertirDe==4&&convertirA==1){
    resultado= valor*real;
}


//REAL Y DOLAR
//real a dolar
else if(convertirDe==4&&convertirA==2){
   resultado=valor/dolar;
}

//dolar a real
else if(convertirDe==2&&convertirA==4){
   resultado=valor*dolar;
}

//REAL Y DOLAR BLUE
//real a dolar Blue
else if(convertirDe==4&&convertirA==3){
   resultado=valor/dolarBlue;
}

//dolarBlue a real
else if(convertirDe==3&&convertirA==4){
   resultado=valor*dolarBlue;
}

//REAL Y EURO
//real a euro
else if(convertirDe==4&&convertirA==5){
   resultado=valor/euro;
}

//euro a real
else if(convertirDe==5&&convertirA==4){
resultado=valor*euro;
}

//REAL Y BITCOIN
//real a btc
else if(convertirDe==4&&convertirA==6){
   resultado=valor/bitcoin;
}

//btc a real
else if(convertirDe==6&&convertirA==4){
   resultado=valor*bitcoin;
}

//REAL Y ETH
//real a eth
else if(convertirDe==4&&convertirA==7){
   resultado=valor/ethereum;
}

//eth a real
else if(convertirDe==7&&convertirA==4){
   resultado=valor*ethereum;
}




//peso a peso, dolar a dolar, euro a euro, btc a btc y eth a eth;
else{
    resultado=valor;
}
$("#resultado").html("Resultado $" + resultado.toFixed(2));
});
});
});
});
});
}

//APIS
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

//STORAGE Y JSON

const divisasDisponibles = [{ divisa: "dolar", valor: 95.35},
                            {divisa: "dolarblue", valor: 175.00},
                            { divisa: "BTC", valor:3727229.26},
                            {divisa: "euro", valor: 112.50},
                            {divisa: "ETH", valor:230454.09},
                            {divisa: "real", valor: 18.30}];
console.log(divisasDisponibles);

const guardarLocal = (clave, valor) => {localStorage.setItem(clave,valor)};

guardarLocal("Divisas Disponibles", JSON.stringify(divisasDisponibles));

class Divisas{
    constructor(obj){
        this.divisa = obj.divisa;
        this.valor= obj.valor;
    }
    sumarIva(){
        this.valor = this.valor*1.21;
    }
}

const divisasAlmacenadas = JSON.parse(localStorage.getItem("Divisas Disponibles"));
const misDivisas = [];

for(const objeto of divisasAlmacenadas){
    misDivisas.push(new Divisas(objeto));
}
console.log(misDivisas);