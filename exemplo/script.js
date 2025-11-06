// Selecionando elementos
const counterValue = document.getElementById('counterValue');
const decrementBtn = document.getElementById('decrementBtn');
const incrementBtn = document.getElementById('incrementBtn');
const colorPicker = document.getElementById('colorPicker');
const applyColorBtn = document.getElementById('applyColorBtn');
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

// Contador
let count = 0;

function updateCounter() {
    counterValue.textContent = count;
    // Adiciona animação ao mudar o número
    counterValue.style.transform = 'scale(1.2)';
    setTimeout(() => {
        counterValue.style.transform = 'scale(1)';
    }, 200);
}

decrementBtn.addEventListener('click', () => {
    count--;
    updateCounter();
});

incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

// Mudança de cor
applyColorBtn.addEventListener('click', () => {
    const color = colorPicker.value;
    document.querySelectorAll('button').forEach(button => {
        if (!button.classList.contains('delete-btn')) {
            button.style.backgroundColor = color;
        }
    });
});

// Lista de tarefas
function createTodoItem(text) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    
    const span = document.createElement('span');
    span.textContent = text;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Deletar';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => {
        li.style.opacity = '0';
        li.style.transform = 'translateX(20px)';
        setTimeout(() => {
            li.remove();
        }, 300);
    });
    
    li.appendChild(span);
    li.appendChild(deleteBtn);
    return li;
}

function addTodo() {
    const text = todoInput.value.trim();
    if (text) {
        const todoItem = createTodoItem(text);
        todoList.appendChild(todoItem);
        todoInput.value = '';
    }
}

addTodoBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

// Email e Impressão
const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const emailMessage = document.getElementById('emailMessage');
const printBtn = document.getElementById('printBtn');

emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const message = emailMessage.value;
    
    // Simular envio de email (em produção, use um serviço de email real)
    alert(`Email seria enviado para: ${email}\nMensagem: ${message}`);
    
    // Opcional: limpar formulário após envio
    emailForm.reset();
});

// Função de impressão
printBtn.addEventListener('click', () => {
    window.print();
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Definir cor inicial dos botões
    const initialColor = colorPicker.value;
    document.querySelectorAll('button').forEach(button => {
        if (!button.classList.contains('delete-btn')) {
            button.style.backgroundColor = initialColor;
        }
    });
});