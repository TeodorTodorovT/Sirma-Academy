const stringManipulator = {
    value: '',
    setValue: function (newValue) {
        this.value = newValue;
    },
    print: function () {
        console.log(this.value);
    },
    toUpperCase: function () {
        this.value = this.value.toUpperCase();
    },
    toLowerCase: function () {
        this.value = this.value.toLowerCase();
    },
};

stringManipulator.setValue('Hello');
stringManipulator.toUpperCase();
stringManipulator.print();
stringManipulator.toLowerCase();
stringManipulator.print();

// HELLO
//  hello


