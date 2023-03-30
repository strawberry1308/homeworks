const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const number = document.querySelector('.num')
let sum = 0
number.textContent = sum
let min = () => {
    if (sum < 1) {
        alert('вы достигли предела')
    } else {
        sum = --sum
        number.textContent = sum
    }
    number.style.color = 'red'
}

let max = () => {
    sum = ++sum
    number.textContent = sum
    console.log(sum)
    number.style.color = 'green'
}
minus.addEventListener('click', min)
plus.addEventListener('click', max)


const block = document.querySelector('.cursor')
const posX = document.getElementById('posX')
const posY = document.getElementById('posY')

block.addEventListener('mousemove', (event) => {
posX.innerHTML = event.x
posY.innerHTML = event.y
})
