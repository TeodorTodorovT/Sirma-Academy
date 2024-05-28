function phonebook(phoneNumbers) {
    let phonebook = {};

    for (const contact of phoneNumbers) {
        let contactArr = contact.split(' ');
        let name = contactArr[0];
        let phoneNumber = '';
        for(let i = 1; i < contactArr.length; i++){
            phoneNumber += contactArr[i]
        }

        phonebook[name] = phoneNumber;
    }

    for (const key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`);
    }
}

phonebook(["Maria 123",
"Samantha 456",
"Nicole 789"]
);
