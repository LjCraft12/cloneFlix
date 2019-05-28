const tabItems = document.querySelectorAll('.tab-item'),
    tabContentItem = document.querySelectorAll('.tab-content-item');

function selectItem () {
    removeBorder();
    removeShow();
// Add Border to current tab
    this.classList.add('tab-border');
//    Grab content item from the DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show')
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
    tabContentItem.forEach(item => item.classList.remove('show'))
}
// Select tab content item
tabItems.forEach(item => item.addEventListener('click', selectItem));

