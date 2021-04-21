
var solution = Math.floor(Math.random() * 100) + 1; // Je génère un nombre aléatoire entre 1 et 100

console.log("(La solution est " + solution + ")");
// je lance la boucle, où i <= au nombre d'essai voulu
for (var i = 0; i <= 8; i++) {
    var essai = Number(prompt("Entrez un nombre entre 1 et 100 pour deviner le nombre aléatoire."));
    if (essai === solution) {
        alert("Vous avez trouvé, bravo !");
        alert("Vous avez trouvé en " + i + " essai(s)")
        break;
        // si la réponse est trouvé, la boucle s'arrête et la console l'affiche, en précisant le nombre d'essai nécessaires.
        // comparent la valeur "essai" à la valeur "solution"
    } else if (essai < solution) {
        alert(essai + " est trop petit");
    } else {
        alert(essai + " est trop grand");
    }
    // si la solution n'est pas trouvée, la console l'affiche en donnant la solution
    if (i === 8) {
        alert("Vous avez perdu ! Le nombre était : " + solution);
    }
}
// la boucle while
// var solution = Math.floor(Math.random() * 100) + 1; // Je génère un nombre aléatoire entre 1 et 100
// console.log(solution);
// var tentative = 0;
// while ((essai != solution) && (tentative < 5)) {
//     tentative++;
//     var essai = prompt("Entrez un nombre entre 1 et 100 pour deviner le nombre aléatoire.")
//     if (essai < solution) {
//         alert(essai + " est trop petit");
//     } else if (essai > solution) {
//         alert(essai + " est trop grand");
//     }
// } if (essai == solution) {
//     alert("bravo vous avez trouvé en :" + tentative + " tentative");
// } else {
//     alert("Game over");
// }








