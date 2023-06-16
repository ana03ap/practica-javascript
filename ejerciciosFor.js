//Ejercicio 1
// Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.

function ejercicio1(){
    var palabra =  prompt()
    for (let index = 0; index < 10; index++) {
        console.log(palabra +"",index);  
    }
}

//Ejercicio 2
//Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los años que ha cumplido (desde 1 hasta su edad).
function ejercicio2(){
    var edad = prompt()

    while(!Number(edad)){
        console.log("Vuelva a ingresar un valor valido.")
        edad = prompt()
    }
    for (let index = 0; index < edad; index++) {
        console.log(edad);
        
    }
    
}

//Ejercicio 3
//Escribir un programa que pida al usuario un número entero positivo y muestre
// por pantalla todos los números impares desde 1 hasta ese número
function ejercicio3(){
    var numero = prompt()
    for (let index = 1; index <= numero; index=index+2) {
        console.log(index)
        
    }
}

//Ejercicio 4
//Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el 
//número de años, y muestre por pantalla el capital obtenido en la inversión cada año que dura la inversión.

function ejercicio4(){
    var invertir  = prompt()
    var interes  = prompt()
    var años = prompt()
     for (let index = 0; index < años; index++) {
        console.log(invertir*interes/100)
     }

}


//Ejercicio 5

//Generar la tabla de multiplicar de un número

function ejercicio5(){
    var numero = parseInt(prompt())

    for (let index = 0; index < 11; index++) {
        console.log(numero*index)
    }
    
}

function ejercicio6(){
    var numero = prompt()
    for (let index = numero; index >1; index--) {
        console.log(index)
        
    }
}


