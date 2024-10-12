var inputAltura = document.getElementById('altura')
var inputPeso = document.getElementById('peso')
var inputTextArea = document.getElementById('retorno')
var btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener('click', funcao);



function funcao(){
    inputTextArea.value = '';
    let IMC = 0;
    let peso = inputPeso.value
    let altura = inputAltura.value
    
    IMC = calcularIMC(peso,altura)

    if (altura == 0 || altura == "") {
		adicionaAlerta (inputAltura, '*É necessario colocar a Altura');
        inputTextArea.value += `Altura: sem valor definido para calcular o IMC\n`;
        altura = 0
	} else {
		removeAlerta (inputAltura)
	}

    if (peso == 0 || peso == "") {
		adicionaAlerta (inputPeso, '*É necessario colocar o peso');
        peso = 0
        inputTextArea.value += `Peso: sem valor definido para calcular o IMC\n`;
	} else {
		removeAlerta (inputPeso)
	}
    
    
    if (18.5 > IMC) {
        adicionarTexto(inputAltura,inputPeso)
        inputTextArea.value += `Abaixo do peso com IMC: ${IMC}\n`;
        document.getElementById('cor').style.backgroundColor = 'green';
        
    } else if (IMC <= 24.99) {
        adicionarTexto(inputAltura,inputPeso)
        inputTextArea.value += `Peso normal com IMC: ${IMC}\n`;
        document.getElementById('cor').style.backgroundColor = 'lightgreen';
        
    } else if (IMC <= 29.99) {
        adicionarTexto(inputAltura,inputPeso)
        inputTextArea.value += `Sobrepeso com IMC: ${IMC}\n`;
        document.getElementById('cor').style.backgroundColor = 'orange';
    } else if (IMC >= 30) {
        adicionarTexto(inputAltura,inputPeso)
        inputTextArea.value += `Obesidade com IMC: ${IMC}\n`;
        document.getElementById('cor').style.backgroundColor = 'red';   
    }
}

// --------------- Funcitions ------------
function calcularIMC (n1,n2){
    let resultado = 0
    resultado = n1 / (n2*n2)
    return resultado
}

function removeAlerta (input) {
	input.style.color = '';
	input.style.borderColor = '';
	input.style.background = '';

	var p = document.getElementsByClassName('alerta-' + input.id)
	p[0].textContent = '';
}

function adicionaAlerta (input, mensagem) {
	input.style.color = 'red';
	input.style.borderColor = 'red';

	var p = document.getElementsByClassName('alerta-' + input.id);
	p[0].textContent = mensagem;
}

function adicionarTexto(input1, input2){
    inputTextArea.value += `Peso: ${input2.value}\n`;
    inputTextArea.value += `Altura: ${input1.value}\n`;
}


