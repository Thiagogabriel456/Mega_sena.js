function gerarAleatorios(qtd) {
    
    if (qtd < 6 || qtd > 100) {
        console.error("A quantidade deve estar entre 6 e 100.");
        return;
    }

    var vetor = new Set(); 
    var tentativas = 0; 
    var totalGerados = 0; 

    
    var inicio = performance.now();

    
    while (vetor.size < qtd) {
        var aleatorio = Math.floor(Math.random() * 100 + 1); 
        vetor.add(aleatorio);
        tentativas++; 
        totalGerados++; 
    }

    
    var numerosGerados = Array.from(vetor);

    // Marca o tempo de fim
    var fim = performance.now();
    var tempoExecucao = fim - inicio; 

    
    console.log("Tentativas:", tentativas);
    console.log("Total de números gerados:", totalGerados);
    console.log("Números gerados:", numerosGerados);
    console.log("Números repetidos:", totalGerados - tentativas);
    console.log("Tempo de execução: " + tempoExecucao.toFixed(2) + " milissegundos");
}


gerarAleatorios(30);