let dia = (window.prompt('Escriba un día de la semana')).toLowerCase()
console.log(dia)


if(dia == 'lunes' || dia == 'martes' || dia == 'miércoles' || dia == 'miercoles' || dia == 'jueves' || dia == 'viernes'){
    console.log(`Hoy es ${dia}`)
}

else if(dia == 'sábado' || dia == 'sabado' || dia == 'domingo') {
    console.log(`Es fin de semana`)       
 }

else{
console.log('Eso no es un día de la semana')
}


 switch(dia) {
    case 'lunes':
    case 'martes':
    case 'miércoles':
    case 'miercoles':
    case 'jueves': 
    case 'viernes':
    console.log(`Hoy es ${dia}`)
        break;
        
    case 'sabado':                
    case 'sábado':     
    case 'domingo':
    console.log(`Es fin de semana`)
        break;

    default:
        console.log('Eso no es un día de la semana')
 }