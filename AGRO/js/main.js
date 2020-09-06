/* JS-function ro identify the WEBP support */
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
});

let mobileMenuItems = document.querySelectorAll('.mobile-menu__item');

mobileMenuItems.forEach(function (element) {
    element.addEventListener("click", function () {
        let menuToggle = document.getElementById('mobile-menu__toggle');
        menuToggle.checked = false;
    });
});
;
let sliderControls = document.querySelectorAll('.slider-control'),
    textActiveClassName = 'about__text_active',
    personActiveClassName = 'slider-box__wr-person_active',
    controlSliderActiveClassName = 'slider-control_active';

sliderControls.forEach(function (element) {
    element.addEventListener("click", function () {
        let nextSliderId = this.dataset.sliderId;

        removeClassFromActiveElement(controlSliderActiveClassName);
        removeClassFromActiveElement(textActiveClassName);
        removeClassFromActiveElement(personActiveClassName);
        addActiveClassToElementById('text-' + nextSliderId, textActiveClassName);
        addActiveClassToElementById('person-' + nextSliderId, personActiveClassName);
        addActiveClassToElement(this, controlSliderActiveClassName);
    });
});

function removeClassFromActiveElement(className) {
    let activeElement = document.getElementsByClassName(className);

    activeElement[0].classList.remove(className);
}

function addActiveClassToElementById(elementId, activeClassName) {
    let nextActiveElement = document.getElementById(elementId);

    nextActiveElement.classList.add(activeClassName);
}

function addActiveClassToElement(element, activeClassName) {
    element.classList.add(activeClassName);
};