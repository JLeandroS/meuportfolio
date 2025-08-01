var btn_menu = document.getElementById('btn_menu');
var btn_menu_close = document.getElementById('btn_menu_close');
var menu_modal = document.getElementById('menu_modal');

var btn_gup = document.getElementById('data_gup');
var btn_fisio = document.getElementById('data_fisio');
var btn_optimize = document.getElementById('data_optimize');
var btn_logistica = document.getElementById('data_logistica');

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

// Para garantir que o estilo correto seja aplicado ao carregar a página
window.dispatchEvent(new Event('scroll'));
