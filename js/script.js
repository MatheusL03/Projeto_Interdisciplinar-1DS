function calcularBhaskara(){
    var nA, nB, nC, x1, x2, delta, deltaresp;

    nA = document.getElementById("coeficientea").value;
    nB = document.getElementById("coeficienteb").value;
    nC = document.getElementById("coeficientec").value;
    

    delta = document.getElementById("delta");

    delta.innerHTML = parseFloat(nB * nB) -4 * parseFloat(nA * nC);
    deltaresp = parseFloat(nB * nB) -4 * parseFloat(nA * nC);

    if(deltaresp < 0){
        alert("Não há raízes reais, gentileza calcular novamente");
        return;
    }
    if(nB == 0 || nC == 0){
        alert("Equação de Segundo Grau Incompleta");
    }
    if(nA == 0){
        alert("Equação de Primeiro grau");
        return;
    }
    x1 = document.getElementById("x1");
    x2 = document.getElementById("x2"); 
    x1.innerHTML = parseFloat(-nB + Math.sqrt(deltaresp)) / (2 * nA);
    x2.innerHTML = parseFloat(-nB - Math.sqrt(deltaresp)) / (2 * nA);
}

function limparCalculadora(){
    var nA, nB, nC;

    nA = document.getElementById("coeficientea").value = "";
    nB = document.getElementById("coeficienteb").value = "";
    nC = document.getElementById("coeficientec").value = "";

    delta = document.getElementById("delta").innerHTML = "";
    x1 = document.getElementById("x1").innerHTML = "";
    x2 = document.getElementById("x2").innerHTML = "";
    
}