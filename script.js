//                                  Botão de Marcar como Concluído
const botaoConcluir = document.getElementById('btn-marcar-concluido');

if (botaoConcluir) {
    const idDaAula = botaoConcluir.getAttribute('data-aula') || 'aula1_concluida';

    if (localStorage.getItem(idDaAula) === 'sim') {
        botaoConcluir.classList.add('ativo');
        botaoConcluir.innerHTML = '<i class="bi bi-check-circle-fill me-1"></i> Concluída';
    }


    botaoConcluir.addEventListener('click', function() {
        this.classList.toggle('ativo');
        
        if (this.classList.contains('ativo')) {
            this.innerHTML = '<i class="bi bi-check-circle-fill me-1"></i> Concluída';
            localStorage.setItem(idDaAula, 'sim'); 
        } else {
            this.innerHTML = '<i class="bi bi-circle me-1"></i> Marcar como concluída';
            localStorage.removeItem(idDaAula); 
        }
    });
}
//------------------------------------------------------------------------------------------------
//                                  Barra de progresso dinamica

document.addEventListener('DOMContentLoaded', function() {
    
    const iconesDeAula = document.querySelectorAll('.lesson-icon');
    
    if (iconesDeAula.length === 0) return;

    // 1. Verifica a memória de cada aula automaticamente
    iconesDeAula.forEach(function(icone) {
        const chaveMemoria = icone.getAttribute('data-memoria');
        
        if (chaveMemoria && localStorage.getItem(chaveMemoria) === 'sim') {
            icone.classList.remove('pending');
            icone.classList.add('completed');
            icone.innerHTML = '<i class="bi bi-check-lg"></i>';
        }
    });


    const totalAulas = iconesDeAula.length;
    const aulasConcluidas = document.querySelectorAll('.lesson-icon.completed').length;

    let porcentagem = 0;
    if (totalAulas > 0) {
        porcentagem = (aulasConcluidas / totalAulas) * 100;
    }

    const barraProgresso = document.getElementById('barra-progresso');
    if (barraProgresso) {
        barraProgresso.style.width = porcentagem + '%';
    }

    const textoProgresso = document.getElementById('texto-progresso');
    if (textoProgresso) {
        textoProgresso.innerText = aulasConcluidas + '/' + totalAulas + ' aulas concluídas';
    }
});
//------------------------------------------------------------------------------------------------
//                                  Botão de enviar comentário
const btnEnviar = document.getElementById('btn-enviar');
const inputComentario = document.getElementById('input-comentario');
const listaComentarios = document.getElementById('lista-comentarios');
const avisoSemComentarios = document.getElementById('sem-comentarios');
const contadorComentarios = document.getElementById('contador-comentarios');
    
let totalComentarios = 0;

if (btnEnviar) {
    btnEnviar.addEventListener('click', function() {
        const textoDigitado = inputComentario.value.trim();
        if (textoDigitado === '') {
            return; 
        }

        if (avisoSemComentarios) {
            avisoSemComentarios.style.display = 'none';
        }

        totalComentarios++;
        contadorComentarios.innerText = totalComentarios;

        const dataAtual = new Date();
        const horaFormatada = dataAtual.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        const dataFormatada = dataAtual.toLocaleDateString('pt-BR');

        const novoComentario = document.createElement('div');
        novoComentario.className = 'comentario-publicado';
            
        const textoFormatado = textoDigitado.replace(/\n/g, '<br>');

        novoComentario.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <div class="autor"><i class="bi bi-person-circle me-2"></i>Você (Aluno)</div>
                <div class="data">${dataFormatada} às ${horaFormatada}</div>
            </div>
            <p class="texto">${textoFormatado}</p>
        `;

        listaComentarios.insertBefore(novoComentario, listaComentarios.firstChild);
        inputComentario.value = '';
    });
}
//------------------------------------------------------------------------------------------------

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {

    if (document.querySelector('#nav-container')) {
        gsap.fromTo('#nav-container', 
            { y: -50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", clearProps: "all" } 
        );
    }

    if (document.querySelector('.hero-title')) {
        gsap.fromTo('.hero-title, .hero-subtitle, .botao', 
            { y: 30, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out", delay: 0.2, clearProps: "all" }
        );
    }

    const cards = document.querySelectorAll('.feature-card, .track-card');
    if (cards.length > 0) {
        gsap.fromTo(cards, 
            { y: 40, opacity: 0 },
            { 
                scrollTrigger: {
                    trigger: cards[0], 
                    start: "top 90%",
                },
                y: 0, 
                opacity: 1, 
                duration: 0.6, 
                stagger: 0.1, 
                ease: "power2.out",
                clearProps: "all"
            }
        );
    }

    const lessonCards = document.querySelectorAll('.lesson-card');
    if (lessonCards.length > 0) {
        gsap.fromTo(lessonCards, 
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out", delay: 0.1, clearProps: "all" }
        );
    }

    const conteudoAula = document.querySelectorAll('.video-container, .article-content, .comments-section');
    if (conteudoAula.length > 0) {
        gsap.fromTo(conteudoAula, 
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out", delay: 0.2, clearProps: "all" }
        );
    }
});