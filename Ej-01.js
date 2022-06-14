let num = window.prompt('Escriba dos números separados por un espacio. Ejemplo: 10 15')
let space = num.indexOf(' ')
let num1 = parseInt(num.substring(0, space))
let num2 = parseInt(num.substring(space+1))

console.log(`${num1} + ${num2} = ${num1 + num2}`)
console.log(`${num1} - ${num2} = ${num1 - num2}`)
console.log(`${num1} * ${num2} = ${num1 * num2}`)
console.log(`(${num1} + ${num2})/2 = ${(num1 + num2)/2}`)


if(num1 > num2){
    console.log(`${num1} es el mayor y ${num2} es el menor`)
}

else if(num2 > num1) {
    console.log(`${num2} es el mayor y ${num1} es el menor`)
}
else{
    console.log(`${num1} y ${num2} son iguales`)
}