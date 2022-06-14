let frase = 'loveisintheair'
let central = ((frase.length)/2)

frase.length%2 == 0
? console.log(frase.substring((frase.length/2)-1,((frase.length/2)+1)))
: console.log(frase.substring((frase.length/2),(frase.length/2)+1))

