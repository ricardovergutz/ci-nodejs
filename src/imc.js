function calcularIMC(peso, altura, ){
    let imc = peso/(altura*altura);
    return +imc.toFixed(2);
}

module.exports = calcularIMC;
