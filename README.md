SafeGuard
Plataforma de Educação em Cibersegurança
Documento de Requisitos e Decisões de Projeto


Projeto
SafeGuard

Disciplina
Mentalidade Criativa e Empreendedora e Programação Front-End


Hospedagem
GitHub Pages
Repositório
github.com/HillianGabriel/SafeGuard 



1. Introdução
O SafeGuard é uma plataforma web educacional voltada para a conscientização e o ensino de práticas de cibersegurança para o público geral, abordando desde fundamentos de proteção digital até tópicos voltados a desenvolvedores. O projeto foi desenvolvido como uma landing page institucional acompanhada de trilhas de conteúdo (aulas), com hospedagem funcional via GitHub Pages.
Este documento descreve os recursos implementados, as decisões de layout e interface (UX/UI) e as tecnologias aplicadas no desenvolvimento da página, servindo como referência para a entrega documental da avaliação prática.
1.1 Objetivo do Projeto
Apresentar, por meio de uma landing page moderna e responsiva, os principais pilares da cibersegurança fundamentos, proteção de dispositivos, privacidade de dados, segurança de redes, engenharia social e segurança no desenvolvimento de software de forma acessível, visualmente atrativa e tecnicamente sólida.
1.2 Estrutura da Página
Home Page / Landing Page principal (SafeGuard / index).
2. Decisões de Layout (UX/UI)
O layout foi pensado para guiar a atenção do usuário e transmitir confiança, um aspecto essencial para uma plataforma de cibersegurança.
2.1 Dark Mode Nativo (Tema Escuro)
O fundo escuro (variável --bg-dark-custom) não é apenas uma escolha estética. Na área de programação e segurança, o tema escuro reduz o cansaço visual, aumenta o contraste das cores de destaque (ciano e verde) e transmite imediatamente uma identidade tecnológica, alinhada ao universo de segurança da informação.
2.2 Hierarquia Visual e Tipografia
Foi utilizada a fonte Inter (ou a fonte de sistema padrão), altamente legível em telas digitais. Os títulos utilizam classes como display-3 e fw-bolder para destacar a mensagem principal, enquanto os textos de apoio utilizam a classe text-secondary (cinza), evitando competir pela atenção do usuário e guiando a leitura de forma natural.
2.3 Respiro e Espaçamento (Whitespace)
O uso intenso de margens e paddings (como a classe .py-6) evita que o site pareça 'esmagado' ou confuso. O espaço vazio entre seções ajuda o usuário a processar a informação de uma seção antes de avançar para a próxima.
2.4 Layout em Grid (Bootstrap) — Mobile First
A estrutura de colunas do Bootstrap garante que o layout seja responsivo seguindo a abordagem Mobile First. Em dispositivos móveis, os cartões são exibidos um abaixo do outro; em telas maiores, organizam-se em linhas de 3 ou 4 colunas, aproveitando o espaço disponível sem quebrar a proporção do design.
3. Interface Tecnológica e Visual (UI Design)
Para transmitir a identidade de uma startup moderna e evitar o aspecto de 'site antigo', foram aplicadas técnicas avançadas de CSS.
3.1 Glassmorphism (Efeito Vidro)
Aplicado na barra de navegação (classe .bg-glass). O uso da propriedade backdrop-filter: blur(12px) desfoca o conteúdo atrás da barra enquanto a página é rolada, criando um efeito de profundidade (3D) sofisticado e com aparência premium.
3.2 Glow Effects (Brilho Neon)
Elementos com brilho chamam mais atenção visual. Foram criados o efeito .drop-shadow-cyan e sombras (box-shadow) nos cartões, que brilham suavemente ao passar o mouse. A animação @keyframes pulseOrb gera uma luz pulsante na esfera de destaque da seção inicial, transmitindo sensação de movimento e vitalidade na interface.
3.3 Gradientes Aplicados a Textos
A classe .text-gradient aplica um recorte de fundo colorido diretamente sobre o texto, utilizado para destacar a palavra-chave 'sem mistérios'. Essa técnica é uma tendência forte no design web atual, empregada por empresas como Apple e Vercel para realçar termos importantes.
3.4 Micro-interações
Toda ação do usuário recebe uma resposta visual. Ao passar o mouse sobre um botão ou cartão (:hover), o elemento não muda de cor de forma abrupta — utiliza-se transition: all 0.3s ease para a transição de cor e o efeito de 'flutuação' (transform: translateY(-8px)), tornando a interface mais tátil e agradável.
4. Recursos Tecnológicos e Funcionalidades
A engenharia por trás do front-end garante que a página seja leve, rápida e envolvente.
4.1 Componentização Semântica
O HTML5 foi utilizado de forma correta, com tags semânticas como <nav>, <section> e <footer>. Essa estrutura organiza o código, melhora o SEO (indexação em mecanismos de busca) e aumenta a acessibilidade para leitores de tela.
4.2 ScrollTrigger (Animações Baseadas em Rolagem)
Em vez de carregar todos os elementos de uma vez, eles são exibidos somente quando entram no campo de visão do usuário (utilizando a biblioteca GSAP ScrollTrigger). Essa abordagem melhora a performance de carregamento e cria uma narrativa visual à medida que o usuário rola a página.
4.3 Contadores Dinâmicos Orientados a Dados
A seção de estatísticas não utiliza números estáticos. O JavaScript lê o atributo data-target (por exemplo, data-target="15000") e executa um cálculo para incrementar o valor de 0 até o número final em 2,5 segundos, formatando o resultado no padrão brasileiro com toLocaleString('pt-BR'). Esse recurso transmite prova social de forma mais impactante do que um texto estático.
4.4 Ícones Vetoriais Escaláveis
Em vez de imagens PNG ou JPG pesadas para ilustrar as trilhas de conteúdo, foi adotado o Font Awesome 6. Por serem vetores matemáticos, os ícones carregam instantaneamente e mantêm a qualidade em qualquer resolução, incluindo telas 4K e dispositivos móveis de alta densidade de pixels.
5. Tecnologias Aplicadas
Tecnologia
Aplicação no Projeto
HTML5
Estruturação semântica das páginas (nav, section, footer) para SEO e acessibilidade.
CSS3 / safe.css
Estilização customizada: dark mode, glassmorphism, glow effects, gradientes e micro-interações.
Bootstrap 5.3.8
Sistema de grid responsivo (Mobile First), componentes de navegação e utilitários.
JavaScript (script.js)
Interatividade geral, contadores dinâmicos e manipulação do DOM.
GSAP + ScrollTrigger
Animações de entrada de elementos conforme o usuário rola a página.
Font Awesome 6 / Bootstrap Icons
Ícones vetoriais para ilustração das trilhas e elementos da interface.
GitHub / GitHub Pages
Versionamento de código e hospedagem gratuita da página estática.

 

6. Acesso e Repositório
6.1 Link de Acesso
URL da página: https://hilliangabriel.github.io/SafeGuard/
6.2 Código-Fonte
Repositório dedicado ao projeto: https://github.com/HillianGabriel/SafeGuard
6.3 Organização do Repositório
index.html - página inicial (cópia da landing page principal).
7. Considerações Finais
As decisões de layout, interface e tecnologia adotadas no SafeGuard buscaram equilibrar identidade visual, performance e usabilidade, resultando em uma plataforma educacional moderna, responsiva e alinhada com as práticas atuais de design e desenvolvimento web. O projeto encontra-se hospedado e funcional via GitHub Pages, com código-fonte versionado e disponível em repositório dedicado.
