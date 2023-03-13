function fibonacci(){
    let valor = parseInt(document.getElementById('numero').value);

    let penultimo = 0, ultimo =1; 
    let numero = 0;
    
    while (valor > numero){
        numero = penultimo + ultimo;
        penultimo = ultimo;
        ultimo = numero;
        
        console.log(numero)
    }

    if (valor == 0 || valor == 1){
        document.getElementById('resposta').textContent = ("O número faz parte da sequência de Fibonacci")
        //alert("O número faz parte da sequência de Fibonacci")
    }else if (valor === numero){
        document.getElementById('resposta').textContent = ("O número faz parte da sequência de Fibonacci.")
        //alert("O número faz parte da sequência de Fibonacci.")
    }else {
        document.getElementById('resposta').textContent = ("O número digitado não faz parte da sequência de Fibonacci.")
        //alert("O número digitado não faz parte da sequência de Fibonacci.")
    }

    
}