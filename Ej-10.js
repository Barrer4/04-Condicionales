let num1 = parseInt(window.prompt("Por favor, introduzca un número"))
let num2 = parseInt(window.prompt("Por favor, introduzca otro número"))

if(num1 === num2) {
    console.log(0)
}

else if (num1%6 === num2%6) {
    num1 > num2
    ? console.log(`El valor más grande es ${num1}`)
    : console.log(`El valor más pequeño es ${num2}`)

}
