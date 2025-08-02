var btn_menu = document.getElementById('btn_menu');
var btn_menu_close = document.getElementById('btn_menu_close');
var menu_modal = document.getElementById('menu_modal');

var btn_gup = document.getElementById('data_gup');
var btn_fisio = document.getElementById('data_fisio');
var btn_optimize = document.getElementById('data_optimize');
var btn_logistica = document.getElementById('data_logistica');
var btn_rc = document.getElementById('data_rc');

var btn_home = document.getElementById('btn_home');
var btn_habilt = document.getElementById('btn_habilt');
var btn_sobre = document.getElementById('btn_sobre');
var btn_contact = document.getElementById('btn_contact');

$('#menu_modal').click( function(){
    btn_menu.style.display = "";
    btn_menu_close.style.display = "none";
    menu_modal.style.transform = "translateX(100%)";
})
$('#btn_menu').click( function(){
    btn_menu.style.display = "none";
    btn_menu_close.style.display = "block";
    menu_modal.style.transform = "translateX(0%)";
})
$('#btn_menu_close').click( function(){
    btn_menu.style.display = "";
    btn_menu_close.style.display = "none";
    menu_modal.style.transform = "translateX(100%)";
})

$('#btn-gup').click( function(){
    hide_data();
    btn_gup.style.display = '';
})
$('#btn-rc').click( function(){
    hide_data();
    btn_rc.style.display = '';
})

$('#btn-fisio').click( function(){
    hide_data();
    btn_fisio.style.display = '';
})
$('#btn-optimize').click( function(){
    hide_data();
    btn_optimize.style.display = '';
})
$('#btn-logistica').click( function(){
    hide_data();
    btn_logistica.style.display = '';
})

function hide_data(){
    btn_gup.style.display = 'none';
    btn_logistica.style.display = 'none';
    btn_fisio.style.display = 'none';
    btn_optimize.style.display = 'none';
    btn_rc.style.display = 'none';
}
window.addEventListener('scroll', function() {
  // Seleciona a div com a classe "top"
  var topDiv = document.querySelector('.top');

  // Verifica se a posição do scroll vertical é maior que 0
  if (window.scrollY > 0) {
    // Se não estiver no topo, remove a classe 'no-topo'
    topDiv.classList.remove('no-topo');
  } else {
    // Se estiver no topo, adiciona a classe 'no-topo'
    topDiv.classList.add('no-topo');
  }
});

const sections = document.querySelectorAll('section');
const navButtons = document.querySelectorAll('nav button');

// Sua função para remover o estilo de todos os botões
function removeStyle() {
    navButtons.forEach(btn => {
        btn.classList.remove('hover-ativo');
    });
}

const observerOptions = {
    root: null, // null significa que a referência é o viewport (a tela do navegador)
    rootMargin: '0px',
    threshold: 0.4 
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        // 'entry.isIntersecting' é true se a seção está na tela (conforme o threshold)
        if (entry.isIntersecting) {
            // Limpa o estilo de todos os botões
            removeStyle();

            // Pega o ID da seção que está visível (ex: "habilidades")
            const sectionId = entry.target.id;

            // Encontra o botão correspondente usando o atributo data-target
            const correspondingButton = document.querySelector(`button[data-target="${sectionId}"]`);
            
            // Adiciona a classe ativa ao botão correto
            if (correspondingButton) {
                correspondingButton.classList.add('hover-ativo');
            }
        }
    });
};

// Cria o observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Manda o observer "observar" cada uma das suas seções
sections.forEach(section => {
    observer.observe(section);
});

// Para garantir que o estilo correto seja aplicado ao carregar a página
window.dispatchEvent(new Event('scroll'));


const textDynamic = document.getElementById('text_dynamic');
const textoOriginal = textDynamic.dataset.text; // Pega o texto do atributo "data-text"

// 2. Define os caracteres que serão usados na animação de "embaralhar"
const caracteres = '01';

let iteracao = 0;

// Limpa o intervalo anterior se houver um, para evitar múltiplas animações
let intervalo = null;

// 3. Inicia a animação
intervalo = setInterval(() => {
    textDynamic.innerText = textoOriginal
        .split('') // Divide a palavra em um array de letras: ['O','L','Á',...]
        .map((letra, index) => {
            // Se o índice da letra já foi "alcançado" pela iteração, mostre a letra original
            if (index < iteracao) {
                return textoOriginal[index];
            }
            
            // Caso contrário, mostre um caractere aleatório
            return caracteres[Math.floor(Math.random() * caracteres.length)];
        })
        .join(''); // Junta o array de volta em uma string

    // 4. Verifica se a animação terminou
    if (iteracao >= textoOriginal.length) {
        clearInterval(intervalo); // Para o setInterval
    }

    // Aumenta a iteração a cada passo da animação
    // O valor '1 / 3' controla a velocidade. Quanto menor, mais rápido.
    iteracao += 2 / 4; 

}, 100);

// window.addEventListener('scroll', function() {
//   console.log(Math.round(window.scrollY));
// });




















