function gerarNumerosAleatorios(qtdNumeros, maxNumero) {
    
    const numerosPossiveis = Array.from({ length: maxNumero }, (_, i) => i + 1);
    
    
    for (let i = numerosPossiveis.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numerosPossiveis[i], numerosPossiveis[j]] = [numerosPossiveis[j], numerosPossiveis[i]]; // Troca os elementos
    }

    
    const numerosGerados = numerosPossiveis.slice(0, qtdNumeros);

    return {
        numeros: numerosGerados,
        tentativas: 1 
    };
}

// Exemplo para uso //
const resultado = gerarNumerosAleatorios(6, 60); 
console.log(`Números gerados: ${resultado.numeros}`);
console.log(`Tentativas realizadas: ${resultado.tentativas}`);