class Traffic {
    constructor() {
        this.red = document.querySelector('.red')
        this.yellow = document.querySelector('.yellow')
        this.green = document.querySelector('.green')
        this.traffic = document.querySelector('.traffic')
    }
    showColor(color) {
        this.hideAll()
        switch (color) {
            case 'red': this.red.style.display = 'block'
                this.red.style.backgroundColor = 'red'
                alert('STOP')
                break
            case 'yellow': this.yellow.style.display = 'block'
                this.yellow.style.backgroundColor = 'yellow'
                alert('WAIT')
                break
            case 'green': this.green.style.display = 'block'
                this.green.style.backgroundColor = 'green'
                alert('GO')
                break
            default:
                alert('Введите корректный цвет')
        }
    }
    hideAll() {
        this.red.style.display = 'block'
        this.yellow.style.display = 'block'
        this.green.style.display = 'block'
    }
}
const traffic = new Traffic()
const color = prompt('введите цвет: red, yellow, green')
traffic.showColor(color)