function QS(selectors, baseElement) {
    if (baseElement === undefined) { baseElement = document.body; }
    element = baseElement.querySelector(selectors);
    return element;
}

function QSA(selectors, parentNode) {
    if (parentNode === undefined) { parentNode = document.body; }
    elementList = parentNode.querySelectorAll(selectors);
    return elementList;
}


