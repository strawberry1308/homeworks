function num(a, b) {
  console.log(Math.min(a, b));
}
// min(7, 5) выведет в консоль 5, вводить нужно в консоли браузера

function name() {
    let str = prompt()
    return str.length
}

console.log(name('Введите имя:'))

function calc(a, b, o) {
    switch (o) {
        case '+': return a + b
        case '-': return a - b
        case '/' && ':':
            if (b === 0) {
                alert('нельзя делить на ноль')
                return
            }
            return a / b
        case '*' && 'x': return a * b
        default: return 'Ошибка'
    }
}

console.log(calc())
