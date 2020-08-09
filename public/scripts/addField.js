// Procurar o botao
document.querySelector("#add-time")
.addEventListener('click', cloneField)
// Quando clicar no botao

// Executar uma acao
function cloneField() {
    // Duplicar os campos. Quais campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Pegar os campos. Quais campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // Para cada campo, limpar o campo
    fields.forEach(function(field) {
        // Pegar o field do momento e limpa ele
        field.value = ""
    })

    // Colocar na página. Onde colocar?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    