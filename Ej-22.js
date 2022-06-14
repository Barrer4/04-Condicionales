let edad = parseInt(window.prompt('Por favor, introduzca su edad'))

if(edad >= 18){
    let carnet = (window.prompt('Por favor, indique si tiene carnet de conducir').substring(0,1)).toUpperCase()
    if(carnet === 'S'){
        let nombre = window.prompt('Por favor, introduzca su nombre').toUpperCase()
        let apellido = window.prompt('Por favor, introduzca su apellido').toUpperCase()
        let ciudad = window.prompt('Por favor, introduzca la ciudad de recogida del vehículo').toUpperCase()
        let dias = parseInt(window.prompt('Por favor, introduzca el número de días que desea alquilar el vehículo'))
        let semanas = parseInt(dias/7)

        semanas > 1
        ? console.log(`El alquiler del coche estará registrado a nombre de: ${nombre} ${apellido} y podrá ser recogido en ${ciudad} por un costo total de ${(semanas * 150) + ((dias - (semanas * 7)) * 25)} euros`)
        : console.log(`El alquiler del coche estará registrado a nombre de: ${nombre} ${apellido} y podrá ser recogido en ${ciudad} por un costo total de ${dias * 25} euros`)
        
    }

    else{
        console.log('Necesita un carnet de conducir para poder gestionar el alquiler del coche')
    }
}

else{
    console.log('Debe ser mayor de edad para poder alquilar un coche')
}




