alert("Bienvenido /a al cuestionario sobre los mares")
var nom = prompt("Ingresa tu Nombre");
var res1 = prompt("¿Cuánta agua hay en la Tierra? \nA. Alrededor de un 41% de la superficie terrestre es agua. \nB. Alrededor de un 51% de la superficie terrestre es agua \nC. Alrededor de un 71% de la superficie terrestre es agua" );

if (res1=="C"){
       res1 = 25;
}else{
    res1 = 0;
}
var res1 = prompt("¿Qué océano es el más grande? \nA. El Pacífico \nB. El Atlántico \nC. El Índico" );
if (res1=="A"){
    res1 = 25;
}else{
 res1 = 0;
}
var res1 = prompt("¿Cuánto mide la parte más profunda de los Océanos? \nA. 11 Km \nB. 23 Km \nC. 31 Km" );
if (res1=="A"){
    res1 = 25;
}else{
 res1 = 0;
}