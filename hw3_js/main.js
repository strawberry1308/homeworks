// function nums() {
// var msg = confirm('Давай сравним два числа')
// console.log(msg)
//     if (msg) {
//         var a = (prompt('первое число'))
//         var b =  (prompt('второе число'))
//     if (a > b) {
//         console.log('наименьшее число это:'+b)
// }   else {
//         console.log('наименьшее число это:'+a)
// }
// } else {
//         alert("Хорошо, если хотите вызвать меня, вызовите меня через консоль: console.log(nums)")
//     }
// }



function nums(){
var msg = confirm('Давай сравним два числа');
console.log(msg);
if (msg) {
var a = (prompt('первое число'));
var b =  (prompt('второе число'));
if (a > b) {
console.log('наименьшее число это:'+b);
}else{
  console.log('наименьшее число это:'+a);
}
} else {
  alert("Хорошо, если хотите вызвать меня, вызовите меня через консоль: console.log(nums())");
  return true;
  }
}

function usName() {
  var str = prompt()
  return str.length
}
console.log(usName("Введите строку:"))


function calculate(a, b, operator) {
  switch (operator) {
      case '+':
      return a + b
    case '-':
      return a - b
      case '*':
      return a * b
      case '/':
      if (b === 0) {
        alert('Ошибка: нельзя делить на ноль')
          return
      }
      return a / b
    default:
      return 'Ошибка: неверный оператор'
  }
}

