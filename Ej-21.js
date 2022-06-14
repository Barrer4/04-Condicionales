let nombre = window.prompt('Por favor, introduzca su nombre')
let ventas = parseInt(window.prompt('Por favor, introduzca el precio de las ventas realizadas'))

ventas > 500
? console.log(`${nombre} ha vendido ${ventas} euros y recibe una comisión de ${ventas*0.05} euros`)
: console.log(`${nombre} ha vendido ${ventas} euros`)

