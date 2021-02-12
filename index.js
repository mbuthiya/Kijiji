// Menu content
var menu_content = document.getElementById("mobile-nav-content-id");

// Menu item

var menu_items = document.getElementsByClassName("menu-item");

// Hamburger menu
var ham_menu = document.getElementById("ham-menu");

// Close button
var close_button = document.getElementById("close-btn");

// Normal menu
var normal_menu = document.getElementById("normal-menu-id");

function closeMenu(){
    // Remove styles
    menu_content.classList.remove("animate__slideInRight")
    normal_menu.classList.remove("animate__slideOutLeft")
    // Add Styles
    menu_content.classList.add("animate__slideOutRight")
    normal_menu.classList.add("animate__slideInLeft")
}



window.addEventListener("load",function(){
    menu_content.classList.add("hidden-element");
});



// Open Menu
ham_menu.addEventListener("click",function(){

    // Remove styles
    menu_content.classList.remove("animate__slideOutRight")
    normal_menu.classList.remove("animate__slideInLeft")
    // Add Styles
    menu_content.classList.add("animate__slideInRight")
    normal_menu.classList.add("animate__slideOutLeft")
    // Show menu
    menu_content.classList.remove("hidden-element");

})

// Close Menu
close_button.addEventListener("click",closeMenu)

for(var i=0; i<menu_items.length;i++){
    menu_items[i].addEventListener("click",closeMenu)
}






