// Cotação de moedas
const USD = 4.87
const EUR = 5.32
const GBP = 6.08


// Obtendo os elementos do formulario
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency") // Criando variavel p obter a moeda selecionada
const footer = document.querySelector("main footer") // Selecionando o footer dentro do main
const description = document.getElementById("description") // span description selecionada
const result = document.getElementById("result")

// Captando o valor de amount
amount.addEventListener("input", () => {
    
    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex, "") // Input amount, aceite somente numeros
    console.log(amount.value)
})

// Captando o evento de submit do form
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value){
        case "USD":
           convertCurrency(amount.value, USD, "US$")
           break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
    console.log(currency.value) // Retorna o currency (moeda) escolhido
}

// Função para converter a moeda
function convertCurrency(amount, price, symbol){
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}` // exibindo a cotação da moeda selecionada

        // Calcula o total
        let total = amount * price

        // Verifica se o resultado não é um número
        // if(isNaN(total)) {
        //     return alert("Por favor, digite o valor corretamente para converter.")
        // }

        // Formatar o valor total
        total = formatCurrencyBRL(total).replace("R$", "")

        // Exibe o resultado total
        result.textContent =  `${total} Reais`

        // Aplica a classe que exibe o footer para mostrar o resultado
        footer.classList.add("show-result")
    } catch (error) {
        // Remove a classe do footer, removendo ele da tela
        footer.classList.remove("show-result")
        alert("Não foi possível converter")
        console.log(error)
    }    
}

// Formata a moeda em Real Brasileiro
function formatCurrencyBRL(value) {
    // Converte para numero para utilizar o toLocaleString
    // Desta forma, formatar no padrão BRL
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}