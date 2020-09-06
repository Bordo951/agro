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
}