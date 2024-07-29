function Person(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;

    Object.defineProperty(this, 'firstName', {
        get() {
            return this._firstName;
        },
        set(value) {
            this._firstName = value;
        },
    });

    Object.defineProperty(this, 'lastName', {
        get() {
            return this._lastName;
        },
        set(value) {
            this._lastName = value;
        },
    });

    Object.defineProperty(this, 'fullName', {
        get() {
            return this._firstName + ' ' + this._lastName;
        },
        set(value) {
            const names = value.split(' ');
            if (names.length === 2) {
                this._firstName = names[0];
                this._lastName = names[1];
            }
        },
    });
}

const person = new Person('Teodor', 'Todorov');

console.log(person.fullName);

person.firstName = 'Todor';

console.log(person.fullName);

person.lastName = 'Ivanov';

console.log(person.fullName);

person.fullName = "Ivan Todorov"

console.log(person.fullName);
