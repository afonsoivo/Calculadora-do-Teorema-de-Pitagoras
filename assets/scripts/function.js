/**
 * Essa função faz o cálculo de um dos lados de triângulo .
 * @param {float} catOp - Valor cateto oposto.
 * @param {float} catAdj - Valor cateto adjacente.
 * @param {float} hip - Valor hipotenusa.
 */
function calculate(catOp, catAdj, hip) {
    if (!hip) {
        hip = Math.sqrt(Math.pow(catAdj, 2) + Math.pow(catOp, 2))
        document.getElementById('answer').textContent = `Resposta: O valor da hipotenusa é ${hip.toFixed(2)}`
    } else if (!catOp) {
        catOp = Math.sqrt(Math.pow(hip, 2) - Math.pow(catAdj, 2))
        document.getElementById('answer').textContent = `Resposta: O valor do cateto oposto é ${catOp.toFixed(2)}`
    } else {
        catAdj = Math.sqrt(Math.pow(hip, 2) - Math.pow(catOp, 2))
        document.getElementById('answer').textContent = `Resposta: O valor do cateto adjascente é ${catAdj.toFixed(2)}`
    }
}

/**
 * Essa função faz a validação dos valores digitados no formulário .
 * @param event - Parâmetros enviados pelo o formulário.
 */
function validation(event) {
    event.preventDefault();
    form = event.target
    catOp = form.elements['catOp'].value
    catAdj = form.elements['catAdj'].value
    hip = form.elements['hip'].value
    if (catOp && catAdj && hip) {
        document.getElementById('answer').textContent = `Por favor digite apenas dois valores!`
    } else if (!catOp && !hip || !catAdj && !hip || !catAdj && !catOp) {
        document.getElementById('answer').textContent = `Por favor digite apenas dois valores!`
    } else if (catOp && catOp <= 0 || catAdj && catAdj <= 0 || hip && hip <= 0) {
        document.getElementById('answer').textContent = `Os valores não podem ser negativos ou igual a zero.`
    } else if (catOp >= hip || catAdj >= hip) {
        document.getElementById('answer').textContent = `Os Catetos não podem ser maior ou igual a hipotenunsa.`
    } else {
        calculate(catOp, catAdj, hip)
    }
}