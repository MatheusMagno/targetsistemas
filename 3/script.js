import dados from "./dados.json" assert { type: "json"};
  

let  parsedArry = [], min = dados[0].valor, max = dados[0].valor, soma = 0, final = [];

for (let i = 0; i < dados.length; i++){
    if(dados[i].valor > 0 ){
        parsedArry.push(dados[i]);
        if (dados[i].valor < min){
            min = dados[i].valor;
        }
        if (dados[i].valor > max){
            max = dados[i].valor;
        }
        soma += dados[i].valor;  
    }      
}
console.log(soma);
soma = soma/ dados.length;
console.log(soma)

for(let i = 0; i <parsedArry.length; i++){
    if(parsedArry[i].valor > soma){
        final.push(parsedArry[i].dia);   
    }
}

window.menorValor = function menorValor(){
    document.getElementById('a').textContent = min;
}

window.maiorValor = function maiorValor(){
    document.getElementById('b').textContent = max;
}

window.diasDaMedia = function diasDaMedia(){
    document.getElementById('c').textContent = final;
}
//console.log(parsedArry);
console.log(min);
console.log(max);

console.log(final);