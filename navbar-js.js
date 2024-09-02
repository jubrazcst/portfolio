const menuIconid = document.getElementById("menu-icon-id");
const menu = document.getElementById("menu");

menuIconid.addEventListener('click', ()=> {
    if(menu.className ==='hidden'){
        menu.classList.remove('hidden');
   }else{
    menu.classList.add('hidden');
   }
});