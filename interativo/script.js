// Seleção de elementos
const themeToggle = document.getElementById('themeToggle');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const calculateBtn = document.getElementById('calculate');
const resultDiv = document.getElementById('result');
const notepad = document.getElementById('notepad');
const saveNoteBtn = document.getElementById('saveNote');
const clearNoteBtn = document.getElementById('clearNote');
const animatedBox = document.getElementById('animatedBox');
const moveLeftBtn = document.getElementById('moveLeft');
const moveRightBtn = document.getElementById('moveRight');
const changeColorBtn = document.getElementById('changeColor');

// Tema escuro/claro
let isDarkTheme = false;

themeToggle.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    document.body.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
    themeToggle.textContent = isDarkTheme ? 'Tema Claro' : 'Tema Escuro';
});

// Calculadora
calculateBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operation = operationSelect.value;

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = 'Por favor, insira números válidos';
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultDiv.textContent = 'Não é possível dividir por zero';
                return;
            }
            result = num1 / num2;
            break;
    }

    resultDiv.textContent = `Resultado: ${result}`;
    // Animação do resultado
    resultDiv.style.transform = 'scale(1.1)';
    setTimeout(() => resultDiv.style.transform = 'scale(1)', 200);
});

// Bloco de notas com localStorage
const savedNote = localStorage.getItem('note');
if (savedNote) {
    notepad.value = savedNote;
}

saveNoteBtn.addEventListener('click', () => {
    localStorage.setItem('note', notepad.value);
    // Feedback visual
    saveNoteBtn.textContent = 'Salvo!';
    setTimeout(() => saveNoteBtn.textContent = 'Salvar', 1000);
});

clearNoteBtn.addEventListener('click', () => {
    notepad.value = '';
    localStorage.removeItem('note');
});

// Animação da caixa
let currentPosition = 0;
const boxStep = 10;
const containerWidth = document.querySelector('.animation-container').clientWidth;

moveLeftBtn.addEventListener('click', () => {
    currentPosition = Math.max(currentPosition - boxStep, 0);
    updateBoxPosition();
});

moveRightBtn.addEventListener('click', () => {
    const maxPosition = containerWidth - animatedBox.clientWidth;
    currentPosition = Math.min(currentPosition + boxStep, maxPosition);
    updateBoxPosition();
});

function updateBoxPosition() {
    animatedBox.style.left = `${currentPosition}px`;
}

// Mudança de cor aleatória
changeColorBtn.addEventListener('click', () => {
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    animatedBox.style.backgroundColor = randomColor;
});

// Atualizar largura máxima quando a janela for redimensionada
window.addEventListener('resize', () => {
    const containerWidth = document.querySelector('.animation-container').clientWidth;
    const maxPosition = containerWidth - animatedBox.clientWidth;
    if (currentPosition > maxPosition) {
        currentPosition = maxPosition;
        updateBoxPosition();
    }
});