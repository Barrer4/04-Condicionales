let puesto = parseInt(window.prompt('¿En qué posición has quedado? ej: 1, 2, 3, 4...'))

puesto === 1
? console.log('Ganaste')
: 'Lo importante es participar'

if(puesto === 1){
    console.log('Medalla de oro');
}

else if(puesto === 2){
    console.log('Medalla de plata');
}

else if(puesto === 3){
    console.log('Medalla de bronce');
}

else {
    console.log('Lo importante es participar')

}

switch(puesto) {
   case 1: 
        console.log('Medalla de oro');
        break;
   case 2: 
        console.log('Medalla de plata');
        break;
   case 3: 
        console.log('Medalla de bronce');
        break;
    default:
        console.log('Lo importante es participar');
        break;
}

if(puesto== 1 || puesto== 2 || puesto== 3){
    console.log('Sube al podium');
}

else{
    console.log('Se acabó la carrera')
}