// Validação para impedir números no campo de nome
const nomeInput = document.getElementById('name');
const nomeError = document.getElementById('name-error');

nomeInput.addEventListener('input', () => {
    // Substitui tudo o que NÃO for letra ou espaço por nada ""
    // O regex \d identifica qualquer dígito numérico
    const contemNumero = /\d/.test(nomeInput.value);

    if (contemNumero) {
        // Remove os números que foram digitados imediatamente
        nomeInput.value = nomeInput.value.replace(/\d/g, '');
        
        // Exibe o Estado de erro (SMACSS)
        nomeError.classList.add('is-visible');
    } else {
        // Se estiver limpo, esconde o erro
        nomeError.classList.remove('is-visible');
    }
});

// vailação para impedir que o nome exceda 50 caracteres
function validarNome() {
    let nome = document.getElementById("name").value;
    if (nome.length >= 50){
        document.getElementById("name-error").style.display = "block";
        document.getElementById("name-error").style.opacity = "1";
    }
    else{
        document.getElementById("name-error").style.display = "none";
        document.getElementById("name-error").style.opacity = "0";
    }
}

// Validação para o campo de email
function validarEmail() {
    let email = document.getElementById("email").value;
    // Regex simples para validar o formato do email
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regexEmail.test(email)) {
        document.getElementById("email-error").style.display = "none";
        document.getElementById("email-error").style.opacity = "0";
    }
    else if (email.length === 0) {
        document.getElementById("email-error").style.display = "none";
        document.getElementById("email-error").style.opacity = "0";
    }
    
    else {
        document.getElementById("email-error").style.display = "block";
        document.getElementById("email-error").style.opacity = "1";
    }
}

// Validação para contato
function validarContato(){
    let contato = document.getElementById("telefone").value;

    if (contato === "") {
        document.getElementById("contato-error").style.display = "none";
        document.getElementById("contato-error").style.opacity = "0";
        return;
    }
    
    const regexContato = /^(?:\(\d{2}\)\s?|\d{2}\s?)\d{9}$/;

    if(!regexContato.test(contato)){
        document.getElementById("contato-error").style.display = "block";
        document.getElementById("contato-error").style.opacity = "1";
    }
    else{
        document.getElementById("contato-error").style.display = "none";
        document.getElementById("contato-error").style.opacity = "0";
    }
}

// Validação para o campo de mensagem

function validarMensagem() {
    let mensagem = document.getElementById("message").value;
    if (mensagem.trim() === "") {
        document.getElementById("message-error").style.display = "block";
        document.getElementById("message-error").style.opacity = "1";
    }
    else {
        document.getElementById("message-error").style.display = "none";
        document.getElementById("message-error").style.opacity = "0";
    }
}

// Animação de cards skills
// ========================================
// ANIMAÇÃO DOS CARDS DE SKILLS
// ========================================

const cardsSkills = document.querySelectorAll('.m-skill-card');

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.7
});

cardsSkills.forEach((card, index) => {

    card.style.transitionDelay = `${index * 150}ms`;

    observer.observe(card);

});


// ========================================
// CARROSSEL DE PROJETOS
// ========================================

const projetos = document.querySelector(".m-projects-grid");

const botaoAnterior = document.querySelector(".m-carousel-btn-prev");
const botaoProximo = document.querySelector(".m-carousel-btn-next");

const cardsProjetos = document.querySelectorAll(".m-project-card");

let cardAtual = 0;


botaoProximo.addEventListener("click", function () {

    if (cardAtual < cardsProjetos.length - 3) {
        cardAtual++;
    }

    moverCarrossel();

});


botaoAnterior.addEventListener("click", function () {

    if (cardAtual > 0) {
        cardAtual--;
    }

    moverCarrossel();

});


function moverCarrossel() {

    const larguraCard = cardsProjetos[0].offsetWidth;

    const gap = 24;

    const distancia = cardAtual * (larguraCard + gap);

    projetos.style.transform = `translateX(-${distancia}px)`;

}