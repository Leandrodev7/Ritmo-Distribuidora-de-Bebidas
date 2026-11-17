# Ritmo Distribuidora de Bebidas - Front-end Institucional

Interface web de varejo desenvolvida para a **Ritmo Distribuidora de Bebidas**, com foco em conversão rápida de pedidos via WhatsApp, catálogo organizado por categorias e compliance com a legislação brasileira de comercialização de bebidas.

---

## 🛠 Tecnologias Utilizadas

- **HTML5 Semântico:** Estrutura orientada a acessibilidade, avisos legais obrigatórios (compliance com a Lei 13.106/2015) e links de comunicação direta via WhatsApp API.
- **CSS3 Comercial Sólido:** 
  - Paleta sólida e vibrante inspirada nas grandes redes varejistas de bebidas (Azul Comercial `#0d47a1`, Verde WhatsApp `#25d366`, Vermelho de Alerta `#d32f2f`).
  - Sem uso de efeitos visuais pesados ou desnecessários para garantir carregamento instantâneo em conexões 3G/4G/5G.
  - Layout totalmente responsivo com CSS Grid e Flexbox.
- **JavaScript (ES6+ Vanilla):** Filtro interativo de categorias em tempo real sem recarregamento de página.

---

## 📁 Estrutura do Projeto

```text
Distribuidora de Bebidas/
├── assets/
│   ├── css/
│   │   └── style.css          # Folha de estilos comercial consolidada
│   ├── js/
│   │   └── main.js            # Filtros dinâmicos de catálogo
│   ├── images/
│   │   ├── agua-mineral.jpg   # Imagem real do estoque de águas
│   │   ├── cerveja.jpg        # Imagem real do estoque de cervejas (+18)
│   │   ├── refrigerante.jpg   # Imagem real do estoque de refrigerantes
│   │   └── suco.jpg           # Imagem real do estoque de sucos integrais
│   └── raw/                   # Arquivos brutos originais
├── .gitignore                 # Arquivo padrão de ignorados
├── index.html                 # Página inicial com foco em conversão
├── style.css                  # Ponto de entrada de estilos
└── README.md                  # Documentação técnica do projeto
```

---

## 🚀 Como Executar Localmente

1. Abra o arquivo `index.html` em qualquer navegador web (Google Chrome, Microsoft Edge, Firefox, etc.).
2. Para desenvolvimento com recarregamento automático no VS Code, execute com a extensão **Live Server**.

---

## 👨‍💻 Autor
**Leandro dev7**
