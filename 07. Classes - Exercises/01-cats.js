function cats(catsArr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says meow`);
        }
    }

    let cats = [];

    catsArr.forEach(cat => {
        const [name, age] = cat.split(" ");
        let newCat = new Cat(name, age);
        cats.push(newCat);
    })

    for (const cat of cats) {
        cat.meow();
        console.log(cat);
    }
}


cats(['Branch 1', 'Poppy 3', 'Goldy 2'])