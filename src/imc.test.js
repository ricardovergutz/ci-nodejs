const calcularIMC = require("./imc");

test("calculo IMC 80kg por 1.8m e igual a 24.69", () => {
    expect(calcularIMC(80, 1.8)).toBe(24.69);
})