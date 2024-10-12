const inputGasolina = document.getElementById('gasolina')
const inputAlcool = document.getElementById('alcool')
const btnVerificar = document.getElementById('btnVerificar')
const txtArea = document.getElementById('txtArea')

btnVerificar.addEventListener('click', alcoolOuGasolina)


function alcoolOuGasolina() {
    adicionaAlerta(inputGasolina, 'Adicione os valores corretamente para gasolina')
    adicionaAlerta(inputAlcool, 'Adicione os valores corretamente para alcool')

   confereValor()

   if (inputGasolina.value > 0.5) {
    removeAlerta(inputGasolina)
   }

   if (inputAlcool.value > 0.5) {
    removeAlerta(inputAlcool)
   }
}


function confereValor() {
    let gasolina = inputGasolina.value.trim()
    gasolina = gasolina.replaceAll(',','.')
    let alcool = inputAlcool.value.trim()
    alcool = alcool.replaceAll(',','.')
    const difQueCompensa = 0.7
    let valorCompensa = 0


    valorCompensa = gasolina * difQueCompensa

    if (alcool == 0 || gasolina == 0) {
        txtArea.value = 'Insira valores nos campos de alcool e gasolina'
    } else if (valorCompensa < alcool) {
        txtArea.value = 'Compensa mais gasolina'
        document.getElementById('cor').style.backgroundColor = 'green';

        removeAlerta(inputAlcool)
        removeAlerta(inputGasolina)
    } else {
        txtArea.value = 'Compensa mais alcool'
        document.getElementById('cor').style.backgroundColor = 'red';
        removeAlerta(inputAlcool)
        removeAlerta(inputGasolina)
    }
}

function removeAlerta(input) {
    input.style.color = '';
    input.style.borderColor = '';
    input.style.background = '';

    var span = document.getElementsByClassName('alerta-' + input.id)
    span[0].textContent = '';
}

function adicionaAlerta(input, mensagem) {
    input.style.color = 'red';
    input.style.borderColor = 'red';

    var span = document.getElementsByClassName('alerta-' + input.id);
    span[0].textContent = mensagem;
}
