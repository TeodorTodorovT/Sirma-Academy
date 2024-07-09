function getFormvalue(e) {
    e.preventDefault();
    const firstName = document.querySelector('input[name=fname]');
    const lastName = document.querySelector('input[name=lname]');

    console.log(firstName.value);
    console.log(lastName.value);
}