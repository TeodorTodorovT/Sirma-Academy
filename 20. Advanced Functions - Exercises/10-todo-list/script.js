document.getElementById('add-button').addEventListener('click', function () {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();

    if (task !== '') {
        const liElement = document.createElement('li');
        const pElement = document.createElement('p');
        const buttonElement = document.createElement('button');
        pElement.textContent = task;
        buttonElement.textContent = "Delete";
        buttonElement.classList = "remove-button"

        liElement.appendChild(pElement);
        liElement.appendChild(buttonElement);


        const ulElement = document.getElementById('todo-list');
        ulElement.appendChild(liElement);
        input.value = "";


        buttonElement.addEventListener('click', function(e){
            const isSure = confirm('Are you sure you want to delete this task?');

            if(isSure){
                e.target.parentElement.remove();
            }
        })
    }
});
