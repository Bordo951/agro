let mobileMenuItems = document.querySelectorAll('.mobile-menu__item');

mobileMenuItems.forEach(function (element) {
    element.addEventListener("click", function () {
        let menuToggle = document.getElementById('mobile-menu__toggle');
        menuToggle.checked = false;
    });
});
