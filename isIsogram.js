function isIsogram(str) {
    const lowerCaseStr = str.toLowerCase()

    const charSet = new Set(lowerCaseStr)

    return lowerCaseStr.length === charSet.size
}

// --- Función de Aserción para tests ---
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
