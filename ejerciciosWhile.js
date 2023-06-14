//Ejercicio 1
function ejercicio1(){
    var i = 0
    while(i<=50){
        console.log(i)
        i = i+2
    }
}

//Ejercicio 2
function ejercicio2(){
    var i = 0
    while(i<=1000){
        console.log("El contador vale ", i)
        i = i+5
    }
}

//Ejercicio 3
function ejercicio3(){
    var num
    while(true){
        num = prompt()
        if(num>0){
            break;
        }
    }
}

//Ejercicio 4

function suma(sum1, sum2){
    var limite= 500
    var suma;
    while(true){
        suma = num1+num2
        if(suma>limite){
            break;
        }
    }
}

//Ejercicio 5

function ejercicio5(numero){
    var i = 0
    var aux 
    var num1 = 0
    var num2 = 1
   if(numero==1){
    console.log(num1)
   }else if(numero==2){
    console.log(num1)
    console.log(num2)
   }else {
    console.log(num1)
    console.log(num2)
      while(i<(numero-2)){
          aux = num1+num2
          console.log(num1+num2)
          num1 = num2
          num2 = aux
          i++
      }
    }
  
}


//ejercicio 6

function ejercicio1(){
    var i = 0
    while(i<=50){
        console.log(i)
        i = i+2
    }
}

//Ejercicio 7
function ejercicio7(num){
    var i = 1
    var factorial=1; 
    if(num==0){
        return 1
    }else{
        while(i<=num){
            factorial = factorial*i
            i++
        }
      return factorial
    }
    
}