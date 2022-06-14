let num1 = parseInt(window.prompt("Por favor, introduzca un número"))
let num2 = parseInt(window.prompt("Por favor, introduzca otro número"))
let num3 = parseInt(window.prompt("Por favor, introduzca una vez más un número"))

if(num1 > num2 && num1 > num3){
    console.log(`El mayor valor es ${num1}`)
}

else if(num2 > num1 && num2 > num3){
    console.log(`El mayor valor es ${num2}`)
}

else if(num3 > num1 && num3 > num2){
    console.log(`El mayor valor es ${num3}`)
}

else{
    console.log(`Ningún número es mayor que el otro`)
}
