function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}

// Pruebas
console.log(validatePIN('1234'))
console.log(validatePIN('12345'))
console.log(validatePIN('123456'))
console.log(validatePIN('a234'))
console.log(validatePIN(''))
console.log(validatePIN('1'))
console.log(validatePIN('12'))
console.log(validatePIN('123'))
console.log(validatePIN('1234567'))
console.log(validatePIN('-1234'))
console.log(validatePIN('1.234'))
console.log(validatePIN('0000'))
console.log(validatePIN('000000'))
