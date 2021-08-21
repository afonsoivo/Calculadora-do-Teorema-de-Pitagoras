function calculate(catOp, catAdj, hip) {
    if (!hip) {
        hip = Math.sqrt(Math.pow(catAdj, 2) + Math.pow(catOp, 2))
        document.getElementById('answer').textContent = `Resposta: O valor da hipotenusa é ${hip.toFixed(2)}`
    } else if (!catOp){
        catOp = Math.sqrt(Math.pow(hip, 2) - Math.pow(catAdj, 2))
        document.getElementById('answer').textContent = `Resposta: O valor do cateto oposto é ${catOp.toFixed(2)}`
    } else {
        catAdj = Math.sqrt(Math.pow(hip, 2) - Math.pow(catOp, 2))
        document.getElementById('answer').textContent = `Resposta: O valor do cateto adjascente é ${catAdj.toFixed(2)}`
    }
}


function validation(event) {
    event.preventDefault();
    form = event.target
    catOp = form.elements['catOp'].value || null
    catAdj = form.elements['catAdj'].value || null
    hip = form.elements['hip'].value || null
    if (catOp && catAdj && hip) {
        document.getElementById('answer').textContent = `Por favor digite apenas dois valores!`
    } else if (!catOp && !hip || !catAdj && !hip || !catAdj && !catOp){
        document.getElementById('answer').textContent = `Por favor digite apenas dois valores!`
    } else if (catOp && catOp <= 0 || catAdj && catAdj <= 0 || hip && hip <= 0) {
        document.getElementById('answer').textContent = `Os valores não podem ser negativos ou igual a zero.`
    } else if (isNaN(catOp) || isNaN(catAdj) || isNaN(hip)) {
        document.getElementById('answer').textContent = `Os valores precisam ser números.`
    } else {
        calculate(catOp, catAdj, hip)
    }
}