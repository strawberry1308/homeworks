const count = document.querySelector('.count')
const min = document.querySelector('.min')
const pl = document.querySelector('.pl')

var sum = 0
count.textContent = sum

const minus = () => {
    if (sum < 1) {
        alert('вы достигли предела!')
    } else {
        sum = --sum
        count.textContent = sum
    }
    count.style.color = 'red'
}
const plus = () => {
    sum = ++sum
    count.textContent = sum
    console.log(sum)
    count.style.color = 'green'
}
min.addEventListener('click', minus)
pl.addEventListener('click', plus)

const block = document.querySelector('.cursor')
const posX = document.getElementById('posX')
const posY = document.getElementById('posY')

block.addEventListener('mousemove', (event) => {
posX.innerHTML = event.x
posY.innerHTML = event.y
})


