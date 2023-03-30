const days = prompt('Введите rus или eng для вывода дней недели в консоли').toLowerCase().toUpperCase()
if (days === `rus`) {
    console.log('Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun')
} else if (days === `eng`) {
    console.log('Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.', 'Вс.')
} else {
    alert('Введите корректную команду!')
}

const score = prompt('Оцените наш сервис от 1 до 10')
if (score >= 5 && score > 10) {
    alert('спасибо за высокую оценку')
} else if (score > 5) {
    alert('Мы стараемся улучшить наш сервис :(')
} else if (score > 10) {
    alert('пожалуйста введите цифру от 1 до 10')
} else {
    alert('Введите оценку числами')
}

