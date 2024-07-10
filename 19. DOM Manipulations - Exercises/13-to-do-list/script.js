const inputElement = document.querySelector('input');
const buttonItem = document.querySelector('button');
buttonItem.addEventListener('click', addItem);
const ulElement = document.querySelector('ul');

function addItem() {
    if (inputElement.value != '') {
        const liElement = document.createElement('li');
        liElement.textContent = inputElement.value;
        ulElement.appendChild(liElement);

        inputElement.value = '';
        
        liElement.addEventListener('click', editItem)
    }
}

function editItem() {
    const liElement = this;
    console.log(liElement);
    buttonItem.removeEventListener('click', addItem);
    buttonItem.textContent = "Edit";
    inputElement.value = this.textContent;
    buttonItem.addEventListener('click', function saveItem() {
        if (inputElement.value != '') {
            liElement.textContent = inputElement.value;
            inputElement.value = '';
            buttonItem.textContent = "Create New";

            
        }
        buttonItem.removeEventListener('click', saveItem);
        buttonItem.addEventListener('click', addItem);
    });
}


