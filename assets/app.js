'use strict'

const baliseDiv = document.querySelector("div")
console.log(baliseDiv)
const saisirNombre = nombre => {
    baliseDiv.innerText = nombre
}

document.addEventListener("keydown", ev => {
    const code = ev.code
    switch (code) {
        case "Digit0":
            saisirNombre(0)
            break
        case "Digit1":
            saisirNombre(1)
            break
        case "Digit2":
            saisirNombre(2)
            break
        case "Digit3":
            saisirNombre(3)
            break
        case "Digit4":
            saisirNombre(4)
            break
        case "Digit5":
            saisirNombre(5)
            break
        case "Digit6":
            saisirNombre(6)
            break
        case "Digit7":
            saisirNombre(7)
            break
        case "Digit8":
            saisirNombre(8)
            break
        case "Digit9":
            saisirNombre(9)
            break
    }
})

for (let compteur = 0; compteur < 500; compteur++) {
    console.log(compteur)
}

let i = 0
while (listeContact[i].nom !== "Fulan") {
    i++
    console.log(listeContact)
}