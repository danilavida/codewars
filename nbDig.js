function nbDig(n, d) {
    let contadorTotal = 0
    const digitoBuscado = String(d)

    for (let k = 0; k <= n; k++) {
        const cuadrado = k * k
        const cuadradoStr = String(cuadrado)

        for (const caracter of cuadradoStr) {
            if (caracter === digitoBuscado) {
                contadorTotal++
            }
        }
    }
    return contadorTotal
}

// Pruebas

let resultado1 = nbDig(10, 1)
console.log(`Prueba #1 con n=10 y d=1: ${resultado1}`)
console.log(`Resultado esperado #1: 4`)
console.log(resultado1 === 4 ? 'Prueba #1 EXISTOSA' : 'Prueba #1 FALLIDA')
console.log('----------------------------------')

let resultado2 = nbDig(25, 1)
console.log(`Prueba #2 con n=25 y d=1: ${resultado2}`)
console.log(`Resultado esperado #2: 11`)
console.log(resultado2 === 11 ? 'Prueba #2 EXISTOSA' : 'Prueba #2 FALLIDA')
console.log('----------------------------------')

let resultado3 = nbDig(0, 0)
console.log(`Prueba #3 con n=0 y d=0: ${resultado3}`)
console.log(`Resultado esperado #3: 1`)
console.log(resultado3 === 1 ? 'Prueba #3 EXISTOSA' : 'Prueba #3 FALLIDA')
console.log('----------------------------------')

let resultado4 = nbDig(5, 7)
console.log(`Prueba #4 con n=5 y d=7: ${resultado4}`)
console.log(`Resultado esperado #4: 0`)
console.log(resultado4 === 0 ? 'Prueba #4 EXISTOSA' : 'Prueba #4 FALLIDA')
console.log('----------------------------------')
