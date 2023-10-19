function calcularIMC(peso, altura, ){
    var imc = peso/(altura*altura);
    return +imc.toFixed(2);
}

module.exports = calcularIMC;
