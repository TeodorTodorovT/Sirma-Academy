function createTable() {
    const row = document.querySelector('input#row').value;
    const column = document.querySelector('input#column').value;

    const tableElement = document.querySelector('table');
    const tbody =  document.createElement('tbody');

    for (let i = 0; i < row; i++) {
        const trElement = document.createElement('tr')
        for (let j = 0; j < column; j++) {
            const tdElement = document.createElement('td');
            tdElement.textContent = `Row-${i} Column-${j}`;
            trElement.appendChild(tdElement);
        }
        tbody.appendChild(trElement);
        
    }

    tableElement.appendChild(tbody);
}