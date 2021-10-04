const euro = document.querySelector('.euro')
const lotto = document.querySelector('.lotto')
const setForLife = document.querySelector('.setforlife')
const display = document.querySelector('.display')

euro.addEventListener('click', () => {
    let numArr = Array.from(Array(50).keys()).map(n => n+1).sort(() => 0.5 - Math.random()).slice(0,5).sort((a,b) => a-b)
    let starArr = Array.from(Array(12).keys()).map(n => n+1).sort(() => 0.5 - Math.random()).slice(0,2).sort((a,b) => a-b)
    display.innerHTML = numArr.concat(starArr).join(' ')
})

lotto.addEventListener('click', () => {
    let numArr = Array.from(Array(59).keys()).map(n => n+1).sort(() => 0.5 - Math.random()).slice(0,6).sort((a,b) => a-b)
    display.innerHTML = numArr.join(' ')
})

setForLife.addEventListener('click', () => {
    let numArr = Array.from(Array(47).keys()).map(n => n+1).sort(() => 0.5 - Math.random()).slice(0,5).sort((a,b) => a-b)
    let bonusArr = Array.from(Array(10).keys()).map(n => n+1).sort(() => 0.5 - Math.random()).slice(0,1).sort((a,b) => a-b)
    display.innerHTML = numArr.concat(bonusArr).join(' ')
})