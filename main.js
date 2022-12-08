import { validation } from "./validation.js"

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    input.addEventListener('blur', (event) => {
        validation(event.target)
    })
})