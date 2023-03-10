var nums = [10, 20, 30, 50, 235, 3000]
for (var i = 0; i < nums.length; i++) {
  var num = nums[i].toString()[0]
  if (num === '1' || num === '2' || num === '5') {
    console.log(nums[i])
  }
}
// for (var num = 20; num >= 0; num--) {
//     console.log(num);
// }
var arr = []
for (var a = 20; a >= 0; --a) {
    arr.push(a)
}
console.log(arr)
var colors = {
  red: 'стоп',
  yellow: 'готовься',
  green: 'иди',
}
var color = prompt('Введите цвет светофора (красный, желтый, зеленый)').trim()
switch (color) {
  case 'красный':
    alert(colors.red)
    break
  case 'желтый':
    alert(colors.yellow)
    break
  case 'зеленый':
    alert(colors.green)
    break
  default:
    alert('Введите корректный цвет!')
}



