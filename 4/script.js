let sp = 6783643,rj = 3667866,mg = 2922988,es = 2716548,outros = 1984953;
let total = (sp + rj + mg + es + outros); 

console.log(total);

let final =  (sp/total)*100;
let final1 = (rj/total)*100;
let final2 = (mg/total)*100;
let final3 = (es/total)*100;
let final4 = (outros/total)*100;

final = Math.round(final);
final1 = Math.round(final1);
final2 = Math.round(final2);
final3 = Math.round(final3);
final4 = Math.round(final4);

console.log(final);
console.log(final1);
console.log(final2);
console.log(final3);
console.log(final4);


let resultadoFinal = `Sp = ${final}%, Rj = ${final1}%, Mg = ${final2}%, Es = ${final3}%, Outros Estados = ${final4}%`;

console.log(resultadoFinal);
function resultado(){
     document.getElementById('a').textContent = resultadoFinal;
    }