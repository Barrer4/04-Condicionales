let temp = parseInt(window.prompt('¿Qué temperatura hace?'))

if(temp > 40 || temp < 10){
    console.log('Vete a otro sitio')
}

else if(30 > temp <= 40){
    console.log('Enciende el aire acondicionado')
}

else if(20 > temp <=30){
    console.log('No hagas nada')
}

else if(10 > temp <= 20){
    console.log('Enciende la calefacción')
}