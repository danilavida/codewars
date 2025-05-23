// Tu función nbDig (sin cambios)
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

// --- Función de Aserción ---
function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log(`✅ ${testName}: PASSED`)
    } else {
        console.error(`❌ ${testName}: FAILED`)
        console.error(`   -> Esperado: ${expected}`)
        console.error(`   -> Obtenido:  ${actual}`)
    }
    console.log('----------------------------------')
}

// --- Pruebas usando la función de aserción ---

assertEqual(nbDig(10, 1), 4, 'Prueba #1 (n=10, d=1)')
assertEqual(nbDig(25, 1), 11, 'Prueba #2 (n=25, d=1)')
assertEqual(nbDig(0, 0), 1, 'Prueba #3 (n=0, d=0)')
assertEqual(nbDig(5, 7), 0, 'Prueba #4 (n=5, d=7)')

assertEqual(nbDig(5750, 0), 4700, 'Prueba #5 (n=5750, d=0)')
