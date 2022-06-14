let num = window.prompt('Escriba dos números separados por un espacio. Ejemplo: 10 15')
let space = num.indexOf(' ')
let num1 = parseInt(num.substring(0, space))
let num2 = parseInt(num.substring(space+1))


if(num1 > num2){
    console.log(`${num1} es mayor que ${num2}`)
}

else if(num1 < num2){
    console.log(`${num1} es menor que ${num2}`)
}
else {
    console.log(`${num1} es igual que ${num2}`)
}