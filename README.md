# Currículo Web

Site pessoal com currículo, portfólio de projetos e formulário de contato.

## 📂 Estrutura do Projeto

```
curriculo-com-melhorias/
├── index.html           # Página inicial com apresentação
├── pages/
│   ├── projetos.html   # Portfolio de projetos
│   ├── contato.html    # Formulário de contato
│   └── print/
│       └── curriculo.html  # Versão do currículo para impressão
├── css/
│   └── style.css       # Estilos (responsivo + impressão)
├── js/
│   └── main.js         # JavaScript (form + impressão)
└── assets/
    └── profile.svg     # Imagem de perfil
```

## 🚀 Como Usar

1. Clone ou baixe este repositório
2. Abra no VS Code:
   ```bash
   code .
   ```
3. Inicie um servidor local na pasta do projeto:
   ```bash
   # Usando Python (recomendado)
   python -m http.server 8000
   ```
4. Abra no navegador:
   - Site: http://localhost:8000
   - Currículo para impressão: http://localhost:8000/pages/print/curriculo.html

## 📋 Funcionalidades

- **Página Inicial**: Apresentação pessoal com foto e bio
- **Projetos**: Lista de trabalhos/projetos com descrições
- **Contato**: Formulário com:
  - Validação de campos
  - Suporte a telefone brasileiro
  - Visualização antes de enviar
  - Opção de impressão
- **Currículo**: Versão otimizada para impressão em `/pages/print/curriculo.html`

## 🖨️ Impressão

- Na página de contato:
  1. Preencha o formulário
  2. Clique em "Enviar" para ver preview
  3. Use "Imprimir" para gerar PDF/imprimir
- No currículo:
  1. Acesse `/pages/print/curriculo.html`
  2. Clique em "Imprimir Currículo"
  3. O layout será otimizado automaticamente (remove navegação/botões)

## 🛠️ Tecnologias

- HTML5
- CSS3 (com media queries para responsividade e impressão)
- JavaScript (vanilla, sem dependências)
- Servidor Python para desenvolvimento local

## 📱 Responsividade

- Layout adaptativo para desktop e mobile
- Otimizado para impressão (remove elementos desnecessários)
- Suporte a telas pequenas e grandes

## ✏️ Personalização

1. Substitua o arquivo `assets/profile.svg` por sua foto
2. Edite os dados pessoais em:
   - `index.html` (bio)
   - `pages/print/curriculo.html` (currículo)
   - `pages/projetos.html` (seus projetos)

## 📄 Licença

Livre para uso pessoal e comercial. Atribuição opcional mas apreciada.