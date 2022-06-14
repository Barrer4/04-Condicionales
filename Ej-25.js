let frase = window.prompt('Dile algo a Bob')
let pregunta = frase.indexOf('?')
let grito = frase.indexOf('!')
let pgrito = frase.indexOf('?!')
let gpregunta = frase.indexOf('!?')



if(pgrito !== -1 || gpregunta!== -1){
    console.log('¡Eh, tranquilízate! Yo sé lo que hago.')
}

else if(pregunta !== -1){
    console.log('¡Claro!')
}

else if(grito !== -1){
    console.log('¡Eh!, tranquilízate.')
}

else if(frase == 0){
    console.log('Vale con que esas tenemos...')
}
else{
    console.log('Sin más.')
}

