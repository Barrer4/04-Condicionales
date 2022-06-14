let num = (window.prompt('Por favor, introduzca un número de 3 dígitos'))
let num1 = parseInt(num.substring(0, 1))
let num2 = parseInt(num.substring(1, 2))
let num3 = parseInt(num.substring(2))

if(num1%2 ===0 && num2%2 ===0 && num3%2 ===0){
    console.log('Todas las cifras son pares')
}

else if (num1%2 !== 0 && num2%2 !==0 && num3%2 !==0){
    console.log('Todas las cifras son impares')
}

else{
    console.log('El número tiene cifras pares e impares')
}