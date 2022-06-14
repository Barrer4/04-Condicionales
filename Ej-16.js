let food = (window.prompt(`¿Qué desea comer? 
A. Pizza
B. Hamburguesa
C. Pasta
D. Sushi
E. Tacos
F. Nada`)).toLowerCase()


if(food == 'pizza' || food == 'a'){
    console.log(`Usted ha pedido pizza`)
}

else if(food == 'hamburguesa' || food == 'b'){
    console.log(`Usted ha pedido hamburguesa`)
}

else if(food == 'pasta' || food == 'c'){
    console.log(`Usted ha pedido pasta`)
}

else if(food == 'sushi'|| food == 'd'){
    console.log(`Usted ha pedido sushi`)
}

else if(food == 'tacos'|| food == 'e'){
    console.log(`Usted ha pedido tacos`)
}

else {
    console.log(`Hágame saber si en algún momento desea algo, gracias`);
}


switch(food){
case 'pizza':
    console.log(`Usted ha pedido pizza`);
    break;
    case 'a':
        console.log(`Usted ha pedido pizza`);
        break;
case 'hamburguesa':
    console.log(`Usted ha pedido hamburguesa`);
    break;
case 'b':
        console.log(`Usted ha pedido hamburguesa`);
        break;
case 'pasta':
    console.log(`Usted ha pedido pasta`);
    break;
case 'c':
        console.log(`Usted ha pedido pasta`);
        break;
case 'sushi':
    console.log(`Usted ha pedido sushi`);
    break;
case 'd':
        console.log(`Usted ha pedido sushi`);
        break;
case 'tacos':
    console.log(`Usted ha pedido tacos`);
    break;
case 'e':
        console.log(`Usted ha pedido tacos`);
        break;
default:
    console.log(`Hágame saber si en algún momento desea algo, gracias`);
    break;
}