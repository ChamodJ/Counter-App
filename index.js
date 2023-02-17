let number = document.getElementById("number")
let save = document.getElementById("save")
let count = 0

function incrementF() {
    count += 1
    number.textContent = count
}

function decrementF() {
    count -= 1
    number.textContent = count
}

function saveF() {
    let countStr = count + " - "
    save.textContent += countStr

    number.textContent = 0
    count = 0
}