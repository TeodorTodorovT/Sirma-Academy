function calculate() {
    const radius = Number(document.querySelector('#radius').value);
    const volumeElement = document.querySelector('#volume');
    volumeElement.value = (4/3) * Math.PI * Math.pow(radius, 3);
}