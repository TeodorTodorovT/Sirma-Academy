class Instrument {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    play() {
        console.log(`${this.name} is playing.`);
    }

    tune() {
        console.log(`${this.name} is being tuned.`);
    }
}

class StringInstrument extends Instrument {
    constructor(name, type, numberOfStrings) {
        super(name, type);
        this.numberOfStrings = numberOfStrings;
    }

    tune() {
        console.log(`Tuning all ${this.numberOfStrings} strings of the ${this.name}.`);
    }
}

class PercussionInstrument extends Instrument {
    constructor(name, type, drumSize) {
        super(name, type);
        this.drumSize = drumSize;
    }

    tune() {
        console.log(`Adjusting the tension of the ${this.drumSize} inch drumhead of the ${this.name}.`);
    }
}

const guitar = new StringInstrument('Guitar', 'String', 6);
const drum = new PercussionInstrument('Drum', 'Percussion', 14);

guitar.play();
guitar.tune();

drum.play();
drum.tune();
