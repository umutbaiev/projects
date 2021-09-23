window.addEventListener("load", function() {
    const mobile_menu = document.querySelector('.mobile-menu');
    const fixed_menu = document.querySelector('.fixed-menu');
    const menu_item = document.querySelector('.menu-item');

    mobile_menu.addEventListener('click', (event) => { 
        mobile_menu.classList.toggle('open');
        fixed_menu.classList.toggle('active');
    });

    menu_item.addEventListener('click', (event) => {
        mobile_menu.classList.remove('open');
        fixed_menu.classList.remove('active');
    })
}) 
