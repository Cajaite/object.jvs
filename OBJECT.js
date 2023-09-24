/**             OBJECT
 * 
 * Declarer un Objet student avec name , favoritefood et favoritecountry
 * 
 * Recuperer le nombre de caracteres dans chaques proprieter puis les additionner pour obtenir un nombre 
 * 
 * Si le nombre pair afficher dans la console "pair"
 * Si le nombre est impair afficher dans la console "impaire"
 * 
 * Plusieurs solutions possibles 
 * Object.keys()=> recuperer les proprieter=s 
 * Object.values() => recuperer les valeurs
 * 
 */
//Premiere exemple 
// let student={
//     name:'nicolas',
//     favoritefood:"salad",
//     city:"paris",
// }
// let values=Object.values(student);
// console.log(values);
// let resultBis=0;
// values.forEach((values)=> {
//     resultBis+=values.length
// })
// console.log(resultBis);
//exemple 2
let student={
    name:'gabriel',
    favoritefood:"chips",
    favoritecountry:"chili",
}
let values=Object.values(student);
let count=values.reduce((acc,value)=>acc+value.length,0)
console.log(count);