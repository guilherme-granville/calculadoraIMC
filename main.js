function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    console.log(altura);
    console.log(peso);
    var imc = peso / (altura/100) ** 2;
    if (imc < 18.5) {
        window.alert("IMC está abaixo do peso! " + imc);
    } else if (imc < 24.9) {
        window.alert("IMC está normal! " + imc);
    } else if (imc < 29.9) {
        window.alert("sobrepeso! " + imc);
    } else if (imc < 39.9) {
        window.alert("Obesidade tipo I " + imc);
    } else if (imc > 39.9) {
        window.alert("Obesidade tipo II " + imc);
    }
}