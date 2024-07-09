function removecolor() {
    const selectElement = document.querySelector('#colorSelect')
    const optionsArr =  [...selectElement.children];
    optionsArr.forEach((option, index) => {
        if(option.textContent === selectElement.value){
            selectElement.children[index].remove();
        }
    })
}