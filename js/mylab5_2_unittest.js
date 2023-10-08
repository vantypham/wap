let MY_LIBRARY = myLibrary;
console.log(MY_LIBRARY)
/** reset per each method test */
beforeEach(function () {
    MY_LIBRARY.books = [book1,book2,book3,book4]
});
describe('My Unit Test', function () {
    describe('Add a new book', function () {
        it('UnitTest::length of books => '+ MY_LIBRARY.books.length, function () {
            let len = MY_LIBRARY.books.length;
            MY_LIBRARY.addBook({ title: "My Title", author: "Robert Langdon", libraryId: 999999 });
            assert.equal(MY_LIBRARY.books.length, 5);
        });
    });


    describe('Get book titles()', function () {
        let expected = 'Mockingjay: The Final Book of The Hunger Games,The Road Ahead,The Road Ahead,Walter Isaacson';
        it('UnitTest::get titles =>'+expected, function () {
            assert.equal(MY_LIBRARY.getTitles(), expected);
        });
    });

    describe('Find books by title value', function () {
        it('UnitTest::Find books by title \'The Road Ahead\' => two Books should be returned.', function () {
            let expected = "The Road Ahead";
            let actualResult = MY_LIBRARY.findBooks("The Road Ahead");
            // first result book title
            assert.equal(actualResult[0].title, expected);
            // second result book title
            assert.equal(actualResult[1].title, expected);
            assert.equal(actualResult.length, 2); // two Books should be returned.
        });
    });

});