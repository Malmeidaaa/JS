const nome = prompt('Insira o seu nome:')
const peso = prompt('Insira o seu peso:')
const altura = prompt('Insira sua altura')


const imc = parseInt(peso) / (altura ** 2 )
console.log(`${nome} o valor do seu IMC é:${imc}`)

alert(`${nome} o valor do seu IMC é:${imc}`)
