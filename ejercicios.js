// Primer ejercicio

var dividendo
var divisor

function division(dividendo,divisor){
 if(dividendo== 0 ||divisor==0  ){
     console.log("no se puede dividir estos dos numeros !!!")
 }else{
     console.log(dividendo/divisor)
 }
}

//Segundo Ejercicio
// Escribir un programa que en base a un número entero y muestre por pantalla si es par o impar.

var numero 
function multiploDeDos(numero){
    if(numero %2==0){
        console.log("Es un número par")
    }else{
        console.log("Es un número impar")
    }
}

// Tercer Ejercicio 

// Para tributar un determinado impuesto se debe ser mayor de 19 años y tener unos ingresos iguales o superiores a 2.500.000 mensuales. Escribir un programa que tenga 2 variables su edad y sus ingresos mensuales y muestre por pantalla si el usuario tiene que tributar o no.


var edad
var ingresos 

function tibutar(edad,ingresos){
    if(edad>=19 && ingresos>= 2500000){
        console.log("debes tributar!")
    }else{
        console.log("no debes tributar!")
    }
}

// cuarto ejercicio 

var renta 

function rentaAnual(renta){
    // switch(renta){
    //     case renta<10000:
    //         console.log("pagas tanto");
    //     case
    // }
    var pagar
    if(renta<10000){
        pagar = renta*0.05
        console.log("tienes que pagar", pagar)
    }else if(renta<20000){
        pagar = renta*0.15
        console.log("tienes que pagar", pagar)
    }else if(renta <35000){
        pagar = renta*0.2
        console.log("tienes que pagar", pagar)
    }else if(renta<60000){
        pagar = renta*0.3
        console.log("tienes que pagar", pagar)
    }else{
        pagar = renta*0.45
        console.log("tienes que pagar", pagar)
    }
}


//Quinto Ejercicio 

var imc
var altura
function imc(){
    var peso 
    peso = imc*altura**2
    console.log("el peso es ",peso)
}


//Sexto Ejercicio 
function ejercicio6(numero){
    if(numero>10){
        console.log("numero es mayor a 10")
    }else if (numero<10){
        console.log("numero es menor a 10")
    }else{
        console.log("el numero es 10")
    }
}

//Séptimo ejercicio

function ejercicio7(numero){
    if(typeof(numero)=="number"){
        if(numero>0){
            console.log("el numero es entero positivo")
        }else if(numero<0){
            console.log("el numero es entero negativo")
        }else{
            console.log("el numero es 0")
        }
    }else{
        console.log("not a numberrrr")
    }
  
}


function ejercicio8(numero){
  if (numero==1){
      console.log("lunes")
  }else if(numero == 2){
    console.log("martes")
  }else if (numero == 3){
    console.log("miercoles")

  }else if(numero == 4){
    console.log("jueves")

  }else if(numero == 5){
    console.log("viernes")
      
  }else if(numero == 6){
    console.log("sabado")

  }else if(numero == 7){
    console.log("domingo")
  }
}
