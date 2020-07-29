/**
 * Js-  Entendendo e manipulando FOR
 * PROJETO: Calculadora
 * @autor Roque Rafael
 */

 /*
 var valor = 9; 
 //apenas altere o valor da variavel para saber a tabuada deste

 for(var i = 1; i < 11; i++){
    document.write(valor + " x " + i + " = " + (valor * i) +  '<br>');

    ---acima unitário--abaixo completo
 }*/

 for (var i = 1; i < 11; i++){
     document.write('<p> Tabuada do  ' + i + '</p>');
     for( var j = 1; j < 11; j++){
         document.write(i + " x " + j + " = " + (i*j) +"<br>");
     }

 }