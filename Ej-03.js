let num = window.prompt('Escriba tres números separados por un espacio. Ejemplo: 10 15 20')
let space1 = num.indexOf(' ')
let space2 = num.indexOf(' ', space1+1)
let num1 = parseInt(num.substring(0, space1))
let num2 = parseInt(num.substring(space1+1, num.substring(space2)))
let num3 = parseInt(num.substring(space2+1))


if(num1 + num2 == num3){
    console.log(`${num1} + ${num2} es igual a ${num3}`)
}
else {
    console.log(`${num3} no es igual a la suma de ${num1} + ${num2}`)
}