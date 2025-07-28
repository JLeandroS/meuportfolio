var btn_menu = document.getElementById('btn_menu');
var btn_menu_close = document.getElementById('btn_menu_close');
var menu_modal = document.getElementById('menu_modal');

var btn-gup = document.getElementById('btn-gup');
var btn-fisio = document.getElementById('btn-fisio');
var btn-optimize = document.getElementById('btn-optimize');
var btn-logistica = document.getElementById('btn-logistica');

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
    btn-gup.style.display = '';
})

$('#btn-fisio').click( function(){
    hide_data();
    btn-fisio.style.display = '';
})
$('#btn-optimize').click( function(){
    hide_data();
    btn-optimize.style.display = '';
})
$('#btn-logistica').click( function(){
    hide_data();
    btn-logistica.style.display = '';
})

function hide_data(){
    btn-gup.style.display = 'none';
    btn-logistica.style.display = 'none';
    btn-fisio.style.display = 'none';
    btn-optimize.style.display = 'none';
}
