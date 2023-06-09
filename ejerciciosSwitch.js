//Ejercicios de switch case

// Este ejemplo utiliza un switch case para determinar el día de la semana en función de un número dado.
// Dependiendo del valor del número, se muestra un mensaje correspondiente al día de la semana.

function ejercicio1(num){
    switch (num){
        case 1:
            console.log("Lunes")
            break;
        case 2:
            console.log("Martes")
            break;
        case 3:
            console.log("Miércoles")
            break;
        case 4:
            console.log("Jueves")
            break;
        case 5:
            console.log("Viernes")
            break;
        case 6:
            console.log("Sabado")
            break;
        case 7:
            console.log("Domingo")
            break;
        default:
            console.log("Número no disponible!!!!")
            break;
    }
}

// ejercicio1(1);
// console.log("ana")

//Ejercicio 2
// En este caso, el switch case se utiliza para identificar el mes del año en función de un número dado.
//  Se muestra un mensaje según el número proporcionado correspondiente al mes.
function ejercicio2(num){
    switch (num){
        case 1:
            console.log("Enero")
            break;
        case 2:
            console.log("Febrero")
            break;
        case 3:
            console.log("Marzo")
            break;
        case 4:
            console.log("Abril")
            break;
        case 5:
            console.log("Mayo")
            break;
        case 6:
            console.log("Junio")
            break;
        case 7:
            console.log("Julio")
            break;
        case 8:
            console.log("Agosto")
            break;
        case 9:
            console.log("Septiembre")
            break;
        case 10:
            console.log("Octubre")
            break;
        case 11:
            console.log("Noviembre")
            break;
        case 12:
            console.log("Diciembre")
            break;
        default:
            console.log("Número no disponible!!!!")
            break;
    }
}

//Tercer ejercicio 

// Quinto ejercicio
/*El objetivo de este ejemplo es determinar la cantidad de días en un mes específico.
 Utilizando un switch case, se identifica el mes proporcionado y se muestra la cantidad de días correspondiente.*/
 



 //Cuerto ejercicio 

//  En este caso, el switch case se utiliza para convertir una calificación numérica en su equivalente en texto. Dependiendo del número de calificación, se muestra el mensaje correspondiente al nivel de rendimiento.


// 1  -  Muy deficiente

// 2  -  Insuficiente

// 3  -  Suficiente

// 4  -  Bien

// 5  -  Notable

// 6  -  Sobresaliente



function ejercicio4(num){
    switch(num){
        case 1: 
            console.log("muy deficiente ")
        break;
        case 2: 
            console.log("insuficiente")
        break;
        case 3 : 
            console.log("suficiente")
        break;
        case 4 : 
            console.log("Bien")
        break;
        case 5: 
            console.log("notable")
        break;
        case 6: 
            console.log("sobresaliente")
        break;
        default:
            console.log("no ingresó un número dentro del rango")
            break;
    }

}


//Quinto ejercicio 
// El objetivo de este ejemplo es determinar la cantidad de días en un mes específico.
//  Utilizando un switch case, se identifica el mes proporcionado y se muestra la cantidad de días correspondiente.

function ejercicio5(num){
    switch (num){
        case 1:
            console.log("Enero tiene 31 días")
            break;
        case 2:
            console.log("Febrero tiene 28-29 días depende de si es bisiesto!")
            break;
        case 3:
            console.log("Marzo tiene 31 días ")
            break;
        case 4:
            console.log("Abril tiene 30 días")
            break;
        case 5:
            console.log("Mayo tiene 31 ddías ")
            break;
        case 6:
            console.log("Junio tiene 30 días")
            break;
        case 7:
            console.log("Julio tiene 31 días")
            break;
        case 8:
            console.log("Agosto tiene 31 días")
            break;
        case 9:
            console.log("Septiembre tiene 30 días")
            break;
        case 10:
            console.log("Octubre tiene 31 días")
            break;
        case 11:
            console.log("Noviembre tiene 30 días")
            break;
        case 12:
            console.log("Diciembre tiene 31 días")
            break;
        default:
            console.log("Número no disponible!!!!")
            break;
    }
}

// Sexto
/*En este caso, se utiliza un switch case para asignar una categoría de edad a una persona en función de su edad. Dependiendo del rango de edad, se muestra un mensaje correspondiente a la categoría de edad.
De 0 a 2 años: "Bebé"
De 3 a 12 años: "Niño/a"
de 13 a 19 años: "Adolescente"
De 20 a 59 años: "Adulto/a"
Mayor de 60 años: "Adulto Mayor" */

function ejercicio6(edad){
    let categoria;
      switch(true){
          case (edad>=0 && edad<=2): 
          categoria = "eres un bebé"
          break;
          case (edad>=3 && edad<=12):
               categoria =("eres un niñe")
              break;
          case (edad >=13 && edad<=19):
               categoria =("eres un adolescente")
              break;
          case (edad >=20 && edad<=59):
               categoria =("eres un adulete")
              break;
          case (edad>=60):
               categoria =("eres un abuele")
              break;
          default:
               categoria =("numero no permitido")
              break;
      }
    console.log(categoria)
  }
  ejercicio6(30)

  //Séptimo ejercicio 
//   Este ejemplo utiliza un switch case para convertir una cantidad dada en una unidad de longitud específica a otra unidad. 
//   Dependiendo de la unidad proporcionada, se realiza la conversión y se muestra el resultado en la unidad deseada. Esta conversión será de cm a m y km

function ejercicio7(opcion, cm){
    let total;
    switch(opcion){
        case "m":
            total = cm/100
            break;
        case "km":
          total  = cm/100000
            break;
        default: 
        console.log("unidad no permitida")
    }
  console.log(total)
}

// ejercicio7("m",1)

//Ejercicio 8
// En este caso, el switch case se utiliza para identificar si un día específico es un día laborable o un día de fin de semana. 
// Dependiendo del día proporcionado, se muestra un mensaje correspondiente al tipo de día.

function ejercicio8(dia){
    switch(dia){
        case 1:
            console.log("día laborale")
            break;
        case 2:
            console.log("día laborale")
            break;
        case 3:
            console.log("día laborale")
            break;
        case 4:
            console.log("día laborale")
            break;
        case 5:
            console.log("día laborale")
            break;
        case 6:
            console.log("día No laborale")
            break;
        case 7:
            console.log("día No laborale")
    }
}
//ejercicio8(1)

//Ejercicio 9
// Crea un programa que solicite al usuario que ingrese un carácter y luego muestre el código ASCII correspondiente a ese carácter.
//  Utiliza un switch case para manejar diferentes caracteres y mostrar el código correspondiente

function ejercicio9(caracter){
    switch(caracter){
        case 33:
            console.log("!")
        case 34:
            console.log("")
        case 35:
            console.log("#")
    }
}


function ejercicio10(temperatura,opcion){
    let tempFinal
    switch(opcion){
        case "Fahrenheit":
            tempFinal =(temperatura*9/5)+32
            break;
        case "Celsius":
            tempFinal =(temperatura-32)/1.8000
    }
}