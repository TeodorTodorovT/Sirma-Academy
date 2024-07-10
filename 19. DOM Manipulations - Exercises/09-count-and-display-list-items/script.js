function getOptions() {
    const selectElement = document.querySelector('#mySelect');
    const optionsNodes = [...selectElement.children];
    const optionsText = [];

    optionsNodes.forEach(x => {
        optionsText.push(x.textContent);
    })


    alert(`${optionsText.length} items:\n${optionsText.join(', ')}`)
}