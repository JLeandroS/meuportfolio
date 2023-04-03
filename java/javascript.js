var btn_menu = document.getElementById('btn_menu');
var btn_menu_close = document.getElementById('btn_menu_close');
var menu_modal = document.getElementById('menu_modal');

$('#btn_menu').click( function(){
    btn_menu.style.display = "none";
    btn_menu_close.style.display = "";
    menu_modal.style.display = "";
})
$('#btn_menu_close').click( function(){
    btn_menu.style.display = "none";
    btn_menu_close.style.display = "";
    menu_modal.style.display = "none";
})
