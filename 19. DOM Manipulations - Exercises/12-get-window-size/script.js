const pElement = document.querySelector('p');
pElement.textContent = `Current window size: ${window.innerWidth}x${window.innerHeight}`

window.addEventListener('resize', () =>{
    pElement.textContent = `Current window size: ${window.innerWidth}x${window.innerHeight}`
})