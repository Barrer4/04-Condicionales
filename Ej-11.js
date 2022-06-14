let num1 = window.prompt("Por favor, introduzca un número entre 25 y 75")
let num2 = window.prompt("Por favor, introduzca otro número entre 25 y 75")

num11 = num1.substring(0,1)
num12 = num1.substring(1)
num21 = num2.substring(0,1)
num22 = num2.substring(1)

if(num11==num21){
    console.log(`${num1} tiene en común con ${num2} el dígito ${num11}`)
}

else if(num11==num22){
    console.log(`${num1} tiene en común con ${num2} el dígito ${num11}`)
}

if(num12==num21){
    console.log(`${num1} tiene en común con ${num2} el dígito ${num12}`)
}

if(num12==num22){
    console.log(`${num1} tiene en común con ${num2} el dígito ${num22}`)
}