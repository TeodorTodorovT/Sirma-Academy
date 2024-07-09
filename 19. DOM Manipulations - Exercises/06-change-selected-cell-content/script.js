function changeContent(){
    const row = document.querySelector('input#row').value;
    const column = document.querySelector('input#column').value;
    const text = document.querySelector('input#text').value;

    const trElement = document.querySelectorAll('tr')[row - 1];
    const tdElement = trElement.querySelectorAll('td')[column - 1];
    tdElement.textContent =  text;
}