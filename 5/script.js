const botao = document.getElementById("send");
botao.addEventListener("click", function() {
    const nome= document.getElementById("name").value;
    let invertedStr = "";
    for (let i = nome.length - 1; i >= 0; i--) {
        invertedStr += nome[i];
    }
    document.getElementById('a').textContent = invertedStr;
})

