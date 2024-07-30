const parentObj = {
    firstName: 'Teodor',
    age: '25',
    speak: function () {
        console.log('Hello');
    },
};

function Child() {}
const childObj = new Child();

function extend(parent, childInstance) {
    const childPrototype = Object.getPrototypeOf(childInstance);
    for (const key in parent) {
        if (typeof parent[key] === 'function') {
            childPrototype[key] = parent[key];
        } else {
            childInstance[key] = parent[key];
        }
    }
}

console.log(childObj);
extend(parentObj, childObj);

console.log(childObj);

childObj.speak();
