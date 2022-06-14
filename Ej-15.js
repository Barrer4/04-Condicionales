let helados = parseInt(window.prompt('¿Cuántos helados quieres?'))

helados > 10
? console.log(`Has recibido ${helados+1} helados por el precio de ${helados*2} euros`)
: console.log(`Has recibido ${helados} helados por el precio de ${helados*2} euros`)