<h1 align="center">🛡️ SafeGuard</h1>

<p align="center">
  <strong>Plataforma de Educação em Cibersegurança</strong><br>
  Landing page institucional e trilhas de aprendizado sobre proteção digital.
</p>

<p align="center">
  <a href="https://hilliangabriel.github.io/SafeGuard/"><strong>🌐 Acessar o projeto ao vivo »</strong></a>
</p>

<p align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white">
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black">
  <img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap_5.3-7952B3?style=flat&logo=bootstrap&logoColor=white">
  <img alt="GitHub Pages" src="https://img.shields.io/badge/GitHub_Pages-222222?style=flat&logo=github&logoColor=white">
</p>

---

## 📖 Sobre o Projeto

O **SafeGuard** é uma plataforma educativa voltada à conscientização e ao ensino de
práticas de cibersegurança para o público geral — desde fundamentos de proteção digital
até tópicos voltados a desenvolvedores.

O projeto foi desenvolvido como avaliação prática da disciplina
**Mentalidade Criativa e Empreendedora e Programação Front-End**, com o objetivo de
apresentar, por meio de uma interface moderna e responsiva, os principais pilares da
cibersegurança.

## ✨ Funcionalidades

- **Página inicial** com apresentação da plataforma, missão, trilhas, estatísticas e depoimentos
- **6 trilhas de aprendizagem** organizadas por nível (Iniciante → Avançado)
- **Aulas** com vídeo incorporado, conteúdo teórico e seção de comentários
- **Acompanhamento de progresso** por trilha, persistido no navegador (`localStorage`)
- **Animações** de entrada e ao rolar a página com **GSAP ScrollTrigger**
- **Contadores dinâmicos** com formatação `pt-BR`
- Layout **responsivo (Mobile First)** com o grid do Bootstrap

## 🧭 Trilhas

| Trilha | Nível | Página | Status |
| --- | --- | --- | --- |
| Fundamentos de Segurança Digital | Iniciante | `trilhas/fundamentos.html` | 3 aulas |
| Proteção de Senhas e Autenticação | Iniciante | `trilhas/protecao.html` | 3 aulas |
| Privacidade e Proteção de Dados | Intermediário | `trilhas/privacidade.html` | 2 aulas |
| Segurança em Redes e Wi-Fi | Intermediário | `trilhas/seguranca-redes.html` | Em breve |
| Engenharia Social e Phishing | Avançado | `trilhas/engenharia.html` | Em breve |
| Segurança para Desenvolvedores | Avançado | `trilhas/seguranca-devs.html` | Em breve |

## 🗂️ Estrutura do Projeto

```text
SafeGuard/
├── index.html                  # Página inicial (home oficial — servida pelo GitHub Pages)
├── SafeGuard.html              # Redirecionamento → index.html (compatibilidade com links antigos)
│
├── trilhas/                    # Páginas de índice de cada trilha
│   ├── fundamentos.html
│   ├── protecao.html
│   ├── privacidade.html
│   ├── seguranca-redes.html
│   ├── engenharia.html
│   └── seguranca-devs.html
│
├── aulas/                      # Páginas de conteúdo das aulas
│   ├── fundamentos-1.html
│   ├── fundamentos-2.html
│   ├── fundamentos-3.html
│   ├── protecao-1.html
│   ├── protecao-2.html
│   ├── protecao-3.html
│   ├── privacidade-1.html
│   └── privacidade-2.html
│
├── assets/
│   ├── css/
│   │   ├── safe.css            # Estilos das trilhas/aulas (dark mode, cards, progresso)
│   │   └── home.css            # Estilos da página inicial (glassmorphism, glow, gradientes)
│   └── js/
│       ├── script.js           # Progresso das trilhas, comentários e animações
│       └── home.js             # Animações GSAP da página inicial
│
├── docs/
│   └── SafeGuard_Documentacao.pdf   # Documentação completa do projeto
│
├── .nojekyll                   # Desativa o processamento Jekyll no GitHub Pages
├── .gitignore
└── README.md
```

### 🔗 Fluxo de navegação

```text
index.html  ──►  Trilha (ex.: Fundamentos.html)  ──►  Aula (ex.: aula1_fund.html)
   ▲                      │                                    │
   └──────── "Início" ◄───┴──────── "Voltar à Trilha" ◄────────┘
```

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso no projeto |
| --- | --- |
| **HTML5** | Estruturação semântica das páginas |
| **CSS3** (`assets/css/safe.css`) | Estilização customizada (dark mode, glassmorphism, glow, gradientes) |
| **JavaScript** (`assets/js/script.js`) | Interatividade, progresso, contadores e manipulação do DOM |
| **Bootstrap 5.3.8** | Sistema de grid responsivo e componentes |
| **GSAP + ScrollTrigger** | Animações de entrada conforme o scroll |
| **Font Awesome 6 / Bootstrap Icons** | Ícones vetoriais escaláveis |
| **GitHub Pages** | Hospedagem da página estática |

## 🎨 Decisões de Design (UX/UI)

- **Dark mode nativo** — reduz cansaço visual e transmite identidade tecnológica
- **Hierarquia visual e tipografia** com a fonte Inter
- **Whitespace** generoso para melhor processamento da informação
- **Glassmorphism** na barra de navegação (`backdrop-filter: blur`)
- **Glow effects** (brilho neon) em cartões e elementos de destaque
- **Gradientes de texto** para realçar palavras-chave
- **Micro-interações** em hover (transições suaves e efeito de flutuação)

## 🚀 Como Executar Localmente

Por ser um site estático, basta abrir o `index.html` no navegador. Para uma experiência
completa (sem bloqueios de CORS em recursos locais), recomenda-se um servidor local:

```bash
# Clonar o repositório
git clone https://github.com/HillianGabriel/SafeGuard.git
cd SafeGuard

# Opção 1 — Python
python3 -m http.server 5502

# Opção 2 — Node (npx)
npx serve .

# Opção 3 — VS Code: extensão "Live Server" (porta 5502 já configurada em .vscode/settings.json)
```

Depois acesse <http://localhost:5502> no navegador.

## 📄 Documentação

O documento completo com as decisões de layout, interface e tecnologias aplicadas está
disponível em [`docs/SafeGuard_Documentacao.pdf`](docs/SafeGuard_Documentacao.pdf).

---

<p align="center"><sub>Projeto acadêmico desenvolvido para fins educacionais.</sub></p>
