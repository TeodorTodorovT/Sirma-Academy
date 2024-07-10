function highlight() {
    const itemsToHighlight = document.querySelectorAll('b');
    itemsToHighlight.forEach(x => x.style.backgroundColor = 'yellow')
}

function removeHighlight() {
    const itemsToRemoveHighlight = document.querySelectorAll('b');
    itemsToRemoveHighlight.forEach(x => x.style.backgroundColor = '')

}