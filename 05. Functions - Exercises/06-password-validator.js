function passwordValidator(password) {
    let isValid = true;
    let lettersDigitsRegex = /^[a-zA-Z0-9]+$/;
    let twoDigitsRegex = /^(?=(?:.*\d){2,}).*$/;
    if (password.length < 6 || password.length > 10) {
        isValid = false;
        console.log('Password must be between 6 and 10 characters');
    }

    if (!lettersDigitsRegex.test(password)) {
        isValid = false;
        console.log('Password must consist only of letters and digits');
    }

    if (!twoDigitsRegex.test(password)) {
        isValid = false;
        console.log('Password must have at least 2 digits');
    }

    if (isValid) {
        console.log('Password is valid');
    }
}

passwordValidator('Pa$s$s');
