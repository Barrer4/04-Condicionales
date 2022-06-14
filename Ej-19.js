let ex1 = parseInt(window.prompt("Por favor, introduzca la nota del primer exámen. Números del 1 al 5"))
let ex2 = parseInt(window.prompt("Por favor, introduzca la nota del segundo exámen. Números del 1 al 5"))
let ex3 = parseInt(window.prompt("Por favor, introduzca la nota del tercer exámen. Números del 1 al 5"))

let nota = ex1 >= ex2 ? ex1 + ex3 : ex2 + ex3
console.log(nota)

if(nota === 10){
    console.log('Matrícula')
}

else if(10 > nota && nota >= 9){
    console.log('Sobresaliente')
}

else if(9 > nota && nota >= 7){
    console.log('Notable')
}

else if(7 > nota && nota >= 6){
    console.log('Bien')
}

else if(6 > nota && nota >= 5){
    console.log('Suficiente')
}

else if(5 > nota){
    console.log('Suspenso')
}

else{
    console.log('dd')
}