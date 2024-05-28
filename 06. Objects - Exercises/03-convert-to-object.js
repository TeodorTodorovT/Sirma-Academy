function convertToObject(text){
    let person = JSON.parse(text);
    for (const key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}

convertToObject('{"name": "Ivan", "age": 40, "town": "Sofia"}')