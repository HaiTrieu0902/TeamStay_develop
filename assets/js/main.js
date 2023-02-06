
// Sự kiện click vào trong input tìm kiếm menu
function displayfinder() {
    var headerInput = document.querySelector('.location-items_input');
    headerInput.onclick = function() {
        headerInput.classList.toggle('location-research_active')
    };
}

// kích hoạt menu-language-contain
function displayMenuNav() {
    const menuLanguage = document.getElementsByClassName('item_relavie')
    const language_active = document.getElementsByClassName('menu-language-contain')
    for(var i=0; i<menuLanguage.length; i++) {
        menuLanguage[i].onclick = function(e) {
             this.classList.toggle('language-contain_active'); 
        } 
    }
}

// kích hoạt list menu khi chuyển sang mobile
function displayMenuMobile() {
    var listMenu = document.querySelector('.menu-navbar-btn');
    var listMenuItem = document.querySelector('.menu-list') 


    listMenu.onclick = function() { 
    listMenu.classList.toggle('menu-navbar_active');
    listMenuItem.classList.toggle('menu-list_active');
    }
}


displayMenuNav();
displayfinder();
displayMenuMobile();



/* function activeBlockUser() {
    const activeUser = document.querySelector('.active-account__user');
    activeUser.parentElement.classList.add('item_relavie')
}
activeBlockUser(); */

const menuLanguage = document.getElementsByClassName('item_relavie')
const language_active = document.getElementsByClassName('menu-language-contain')

console.log(menuLanguage);
console.log(language_active.parentNode);