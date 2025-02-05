class Book {
    constructor(id, title, description, content, totalPages) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.content = content;
        this.totalPages = totalPages;
        this.lastPage = 0;

    };

    nextPage() {
        if (this.lastPage < this.totalPages) {
            this.lastPage += 1;
            library.updateDisplay();
        }
    }
    
    previousPage() {
        if (this.lastPage > 0) {
            this.lastPage -= 1;
            library.updateDisplay();
        }
    }

        goToPage(pageNumber) {
            if (pageNumber >= 0 && pageNumber <= this.totalPages) {
                this.lastPage = pageNumber;
            }
        }
}

class Library {
    constructor() {
        this.books = [];
        this.activeBook = null;
    };

    addBook(book) {
        this.books.push(book);
    }

    setActiveBook(bookId) {
        this.activeBook = this.books.find(book => book.id === bookId) || null;
        if (this.activeBook) {
            document.getElementById('reading-view').style.display = 'block';
            document.getElementById('active-title').textContent = this.activeBook.title;
            document.getElementById('book-content').textContent = this.activeBook.content;
            document.getElementById('current-page').textContent = `Page ${this.activeBook.lastPage + 1} of ${this.activeBook.totalPages}`;
        }
    }

    displayBooks() {
        const container = document.getElementById("book-container");
        container.innerHTML = '';

        this.books.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.classList.add('book');
            bookElement.innerHTML = `
            <h3>${book.title}</h3>
            <p>${book.description}</p>
            <button onclick="library.setActiveBook(${book.id})">
                Read this Book
            </button>
            <p>Last Page: ${book.lastPage}</p>
        `;
            container.appendChild(bookElement);
        })
    }

    updateDisplay() {
        if (this.activeBook) {
            document.getElementById('current-page').textContent = 
                `Page ${this.activeBook.lastPage + 1} of ${this.activeBook.totalPages}`;
            document.getElementById('book-content').textContent = this.activeBook.content;
        }
    }
}

var TheCatcherintheRye = new Book(
    0,
    "The Catcher in the Rye",
    "The Catcher in the Rye is the story of Holden Caulfield, a teenage boy who has been expelled from his prep school and is wandering through New York City over a few days, struggling to come to terms with the complexities of growing up and the seeming phoniness of the adult world.",
    "Book Content",
    15,
);
var DuneProphecy = new Book(
    1,
    "Dune: Prophecy",
    "The story sheds light on the origins of the Sisterhood (later known as Bene Gesserit), their rise to power and influence in the Imperium, as well as their personal struggles, conflicts, and battle against a prophesied enemy (the Reckoning / 'Tiran-Arafel'); while at the same time delving into key historical aspects of ...",
    "Book Content",
    10,
);
var Metro2033 = new Book(
    2,
    "Metro 2033",
    "Metro 2033 (Russian: Метро 2033) is a 2002 post-apocalyptic fiction novel by Russian author Dmitry Glukhovsky. It is set within the Moscow Metro, where the last survivors hide after a global nuclear holocaust. It has been followed by two sequels, Metro 2034 and Metro 2035, and spawned the Metro media franchise.",
    "Book Content",
    13,
);
var TheLordOfTheRingsFellowshipOfTheRing = new Book(
    2,
    "The Lord Of The Rings: Fellowship Of The Ring",
    "he Fellowship of the Ring is the first of three volumes of the epic novel[1] The Lord of the Rings by the English author J. R. R. Tolkien; it is followed by The Two Towers and The Return of the King. The action takes place in the fictional universe of Middle-earth.",
    "Book Content",
    24,
);

const library = new Library();
library.addBook(TheCatcherintheRye);
library.addBook(DuneProphecy);
library.addBook(Metro2033);
library.addBook(TheLordOfTheRingsFellowshipOfTheRing);
library.displayBooks();