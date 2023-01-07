const HamBurgur = document.querySelector(".mob-menu-tog");
const Menu = document.querySelector(".menu");
const Mob_BackDrop = document.querySelector(".mob-back-drop");
const Close_Mob_Menu = document.querySelector(".close-mob-btn")

console.log(window.innerWidth)
HamBurgur.addEventListener('click', () => {
    if(window.innerWidth < 600){
        Menu.style.visibility = "visible"
        Mob_BackDrop.style.display = "block";
        Close_Mob_Menu.style.display = "block";
    }
})
Close_Mob_Menu.addEventListener('click', () => {
    Menu.style.visibility = "hidden"
    Mob_BackDrop.style.display = "none"
})