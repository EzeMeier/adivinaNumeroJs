let max = 100;
let min = 1;
let numeroOm = Math.random()*(max-min) + min;
numeroOm = parseInt(numeroOm);

while(true){
    let usuario = prompt ("Coloca un número del 1 al 100 para adivinar el numero mágico");
    if(usuario == numeroOm) {
        alert("Ganasteeeee!!");
        break;
    } else if (usuario == 0){
        break;
    } else if (usuario < numeroOm){
        alert("El numero que elegiste es menor al numero mágico, vuelve a intentarlo");
    } else if (usuario > numeroOm) {
        alert("El numero que elegiste es mayor al numero mágico, vuelve a intentarlo");
    }
}