function xor(a, b) {
    return a !== b
}

// --- Función de Aserción Mejorada ---
function assertEqual(actual, expected, testName) {
    const passed = actual === expected
    const status = passed ? '✅ PASSED' : '❌ FAILED'
    const timestamp = new Date().toLocaleTimeString()

    console.log(`[${timestamp}] ${status}: ${testName}`)

    if (!passed) {
        console.error(
            `   📋 Descripción: Se esperaba que la función devolviera ${expected}, pero devolvió ${actual}`
        )
        console.error(`   🔍 Tipo esperado: ${typeof expected}`)
        console.error(`   🔍 Tipo obtenido: ${typeof actual}`)
        console.error(
            `   💡 Función evaluada: xor(${JSON.stringify(arguments[3])}, ${JSON.stringify(
                arguments[4]
            )})`
        )
    }
    console.log('━'.repeat(60))
    return passed
}

// --- Función para ejecutar suite de pruebas ---
function runTestSuite() {
    console.log('\n🚀 Iniciando pruebas para la función XOR')
    console.log('═'.repeat(60))

    let passedTests = 0
    let totalTests = 0

    // Helper function para contar resultados
    function test(actual, expected, testName, ...args) {
        totalTests++
        if (assertEqual(actual, expected, testName, ...args)) {
            passedTests++
        }
    }

    // --- Pruebas básicas de XOR ---
    console.log('\n📝 Pruebas básicas de XOR:')
    test(xor(false, false), false, 'false XOR false debe ser false', false, false)
    test(xor(false, true), true, 'false XOR true debe ser true', false, true)
    test(xor(true, false), true, 'true XOR false debe ser true', true, false)
    test(xor(true, true), false, 'true XOR true debe ser false', true, true)

    // --- Pruebas con valores truthy/falsy ---
    console.log('\n📝 Pruebas con valores truthy/falsy:')
    test(xor(0, 0), false, '0 XOR 0 debe ser false', 0, 0)
    test(xor(0, 1), true, '0 XOR 1 debe ser true', 0, 1)
    test(xor(1, 0), true, '1 XOR 0 debe ser true', 1, 0)
    test(xor(1, 1), false, '1 XOR 1 debe ser false', 1, 1)

    // --- Pruebas con strings ---
    console.log('\n📝 Pruebas con strings:')
    test(xor('', ''), false, 'string vacío XOR string vacío debe ser false', '', '')
    test(
        xor('', 'hello'),
        true,
        'string vacío XOR string no vacío debe ser true',
        '',
        'hello'
    )
    test(
        xor('hello', ''),
        true,
        'string no vacío XOR string vacío debe ser true',
        'hello',
        ''
    )
    test(
        xor('hello', 'world'),
        false,
        'string no vacío XOR string no vacío debe ser false',
        'hello',
        'world'
    )

    // --- Pruebas con null y undefined ---
    console.log('\n📝 Pruebas con null y undefined:')
    test(xor(null, null), false, 'null XOR null debe ser false', null, null)
    test(xor(null, undefined), true, 'null XOR undefined debe ser true', null, undefined)
    test(xor(undefined, null), true, 'undefined XOR null debe ser true', undefined, null)
    test(
        xor(undefined, undefined),
        false,
        'undefined XOR undefined debe ser false',
        undefined,
        undefined
    )

    // --- Pruebas con arrays ---
    console.log('\n📝 Pruebas con arrays:')
    test(xor([], []), false, 'array vacío XOR array vacío debe ser false', [], [])
    test(xor([], [1]), true, 'array vacío XOR array con elementos debe ser true', [], [1])
    test(xor([1], []), true, 'array con elementos XOR array vacío debe ser true', [1], [])
    test(
        xor([1], [2]),
        false,
        'array con elementos XOR array con elementos debe ser false',
        [1],
        [2]
    )

    // --- Pruebas con objetos ---
    console.log('\n📝 Pruebas con objetos:')
    test(xor({}, {}), false, 'objeto vacío XOR objeto vacío debe ser false', {}, {})
    test(
        xor({}, { a: 1 }),
        true,
        'objeto vacío XOR objeto con propiedades debe ser true',
        {},
        { a: 1 }
    )
    test(
        xor({ a: 1 }, {}),
        true,
        'objeto con propiedades XOR objeto vacío debe ser true',
        { a: 1 },
        {}
    )
    test(
        xor({ a: 1 }, { b: 2 }),
        false,
        'objeto con propiedades XOR objeto con propiedades debe ser false',
        { a: 1 },
        { b: 2 }
    )

    // --- Pruebas mixtas ---
    console.log('\n📝 Pruebas mixtas:')
    test(xor(0, false), false, '0 XOR false debe ser false', 0, false)
    test(xor(1, true), false, '1 XOR true debe ser false', 1, true)
    test(xor('', false), false, 'string vacío XOR false debe ser false', '', false)
    test(
        xor('hello', true),
        false,
        'string no vacío XOR true debe ser false',
        'hello',
        true
    )
    test(xor(null, false), false, 'null XOR false debe ser false', null, false)
    test(
        xor(undefined, false),
        false,
        'undefined XOR false debe ser false',
        undefined,
        false
    )

    // --- Resumen de resultados ---
    console.log('\n📊 RESUMEN DE PRUEBAS:')
    console.log('═'.repeat(60))
    console.log(`✅ Pruebas exitosas: ${passedTests}`)
    console.log(`❌ Pruebas fallidas: ${totalTests - passedTests}`)
    console.log(`📈 Total de pruebas: ${totalTests}`)
    console.log(
        `🎯 Porcentaje de éxito: ${((passedTests / totalTests) * 100).toFixed(1)}%`
    )

    if (passedTests === totalTests) {
        console.log('\n🎉 ¡Todas las pruebas pasaron exitosamente!')
    } else {
        console.log('\n⚠️  Algunas pruebas fallaron. Revisa la implementación.')
    }
    console.log('═'.repeat(60))
}

// --- Ejecutar las pruebas ---
runTestSuite()
