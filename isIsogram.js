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

// --- Pruebas usando la función de aserción ---

console.log('Pruebas para isIsogram:')

// Casos que deberían ser verdaderos (isogramas)
assertEqual(isIsogram('Dermatoglyphics'), true, 'Test #1: Dermatoglyphics (true)')
assertEqual(isIsogram('isogram'), true, 'Test #2: isogram (true)')
assertEqual(isIsogram(''), true, 'Test #3: Cadena vacía (true)') // Una cadena vacía es técnicamente un isograma
assertEqual(isIsogram('subdermatoglyphic'), true, 'Test #4: subdermatoglyphic (true)')
assertEqual(isIsogram('Alphabet'), true, 'Test #5: Alphabet (mixed case, true)')
assertEqual(
    isIsogram('thumbscrew-japingly'),
    true,
    'Test #6: thumbscrew-japingly (con guion, true)'
) // El guion es un carácter único
assertEqual(isIsogram('downstream'), true, 'Test #7: downstream (true)')
assertEqual(isIsogram('six-year-old'), true, 'Test #8: six-year-old (con guiones, true)')
assertEqual(isIsogram('a'), true, "Test #9: 'a' (un solo caracter, true)")

// Casos que deberían ser falsos (no isogramas)
assertEqual(isIsogram('aba'), false, 'Test #10: aba (false)')
assertEqual(
    isIsogram('moOse'),
    false,
    "Test #11: moOse (mixed case, 'o' se repite, false)"
)
assertEqual(
    isIsogram('isIsogram'),
    false,
    "Test #12: isIsogram ('i' y 's' se repiten, false)"
)
assertEqual(isIsogram('aa'), false, "Test #13: aa ('a' se repite, false)")
assertEqual(isIsogram('appa'), false, "Test #14: appa ('a' y 'p' se repiten, false)")
assertEqual(isIsogram('papel'), true, 'Test #15: papel (true)') // Verificación extra de un isograma simple
assertEqual(isIsogram('papelito'), false, "Test #16: papelito ('p' se repite, false)")

// Prueba deliberadamente fallida para verificar la función de aserción
// console.log("DEMOSTRANDO UNA FALLA EN LA PRUEBA (DELIBERADA):");
// assertEqual(isIsogram("isogram"), false, "Test #17: Isograma deliberadamente esperando false");
