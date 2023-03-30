let arr = [10, 20, 30, 50, 235, 3000]
for (let i = 0; i < arr.length; i++) {
    let str = arr[i].toString()
    if (str[0] === '1' || str[0] === '5' || str[0] === '2') {
        console.log(arr[i])
    }
}

for (let i = 20; i >= 0; i--) {
    console.log(i)
}

let colors = {
    red: 'STOP',
    yellow: 'WAIT',
    green: 'GO'
}
let color = prompt('Ввудите цвет: red, yellow, green').toLowerCase().trim()
switch (color) {
    case 'red': alert(colors.red)
        break
    case 'yellow': alert(colors.yellow)
        break
    case 'green': alert(colors.green)
        break
    default: alert('Введите корректный цвет!')
}






