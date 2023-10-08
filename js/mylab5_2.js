/** define function to create an object of Book */
function makeBook(title, author, libraryID) {
    return {
        title, author, libraryID
    };
}
let book1 = makeBook("The Road Ahead", "Bill Gates", 1235);
let book2 = makeBook( "Walter Isaacson", "Steve Jobs",  4268);
let book3 = makeBook("The Road Ahead",  "Bill Gates",  4268 );
let book4 = makeBook("Mockingjay: The Final Book of The Hunger Games",  "Suzanne Collins", 3257 );

let myLibrary = {
    books: [book1,book2,book3,book4],
    /** method addBook() */
    addBook: (aBook) => {
        myLibrary.books.push(aBook);
    },

    /** method getTitles() */
    getTitles: () => {
        return (
            myLibrary.books.map(b => b.title).sort()
            );
    }
    , 
    
    /** method findBooks() bases on title value */
    findBooks: (title) => {
        return (
            myLibrary.books.filter(b => b.title.indexOf(title) >= 0)
            );
    }
}
