function convertToJSON(name,lastName,eyeColor) {
    let person = {
        name,
        lastName,
        eyeColor,
    }

    let personJSON = JSON.stringify(person);
    console.log(personJSON);
}

convertToJSON("Ivan", "Ivanov", "blue")