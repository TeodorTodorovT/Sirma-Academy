function insertRow() {
    const tbodyElement = document.querySelector('tbody');
    const trElement = document.createElement('tr');
    const firstTdElement = document.createElement('td');
    const secondTdElement = document.createElement('td');

    firstTdElement.textContent = `Row${tbodyElement.childElementCount + 1} cell1`;
    trElement.appendChild(firstTdElement);

    secondTdElement.textContent = `Row${tbodyElement.childElementCount + 1} cell2`;
    trElement.appendChild(secondTdElement);

    tbodyElement.appendChild(trElement);
}