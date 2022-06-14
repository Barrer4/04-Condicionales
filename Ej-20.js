let temp = parseInt(window.prompt('Por favor, introduzca la temperatura'))
let grados = (window.prompt('Por favor, introduzca C si desea convertir la temperatura en grados centígrados o F para grados fahrenheit').toUpperCase()).substring(0,1)

grados === 'C'
? console.log(`${temp}º fahrenheit equivalen a ${(temp - 32) *5/9}º centígrados`)
: console.log(`${temp}º centígrados equivalen a ${(temp * 9/5) + 32}º fahrenheit`)



