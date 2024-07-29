class LibraryItem {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}`;
    }
}

class Book extends LibraryItem {
    constructor(title, author, pages) {
        super(title, author);
        this.pages = pages;
    }

    getDetails() {
        return `${super.getDetails()}, Pages: ${this.pages}`;
    }
}

class Magazine extends LibraryItem {
    constructor(title, author, issue) {
        super(title, author);
        this.issue = issue;
    }

    getDetails() {
        return `${super.getDetails()}, Issue: ${this.issue}`;
    }
}

// Example usage:
const book = new Book('1984', 'George Orwell', 328);
console.log(book.getDetails());

const magazine = new Magazine('National Geographic', 'Various Authors', 'August 2024');
console.log(magazine.getDetails());