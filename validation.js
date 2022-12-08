export function validation(input) {
    const inputType = input.dataset.type
    console.log(inputType)

    if(input.validity.valid) {
        input.parentElement.classList.remove('contact-fields-name--invalid')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    } else {
        input.parentElement.classList.add('contact-fields-name--invalid')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = showErrorMessage(inputType, input)
    }
}

const errorType = [
    'valueMissing',
    'customError'
]

const errorMessage = {
    name: {
        valueMissing: "O campo de nome não pode estar vazio.",
        customError: "Preencha!"
    },
    email: {
        valueMissing: "O campo de nome não pode estar vazio.",
        customError: "Preencha!"
    }
}

function showErrorMessage(inputType, input) {
    let message = ''
    
    errorType.forEach(error => {
        if(input.validity[error]) {
            message = errorMessage[inputType][error]
            console.log(error)
        }
    })

    return message
}