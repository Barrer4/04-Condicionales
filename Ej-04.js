let num = window.prompt('Escriba tres números separados por un espacio. Ejemplo: 10 15 20')
let space1 = num.indexOf(' ')
let space2 = num.indexOf(' ', space1+1)
let num1 = parseInt(num.substring(0, space1))
let num2 = parseInt(num.substring(space1+1, num.substring(space2)))
let num3 = parseInt(num.substring(space2+1))
  
console.log(num1)
console.log(num2)
console.log(num3)


if(num1 > num2 && num1 - num2 == 20){
    console.log(`El segundo número es 20 menos que el primero`)
}
else if(num1 > num3 && num1 - num3 == 20) {
    console.log(`El tercer número es 20 menos que el primero`)
}
    
else if(num2 > num3 && num2 - num3 == 20) {
    console.log(`El tercer número es 20 menos que el segundo`)    
}

else if(num3 > num2 && num3 - num2 == 20) {
    console.log(`El segundo número es 20 menos que el tercero`)    
}

else if(num2 > num1 && num2 - num1 == 20) {
    console.log(`El primer número es 20 menos que el segundo`)    
}

else if(num3 > num1 && num3 - num1 == 20) {
    console.log(`El primer número es 20 menos que el tercero`)
}  

else {}