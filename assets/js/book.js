let book = document.querySelector('.book');
let containerBook = document.querySelector('.container__book');
let deleteButtons;

/**
 * 
 * @param { book };
 * @event change position prefer book;
 */
book.addEventListener('click', () => {
    console.log("click");
    containerBook.classList.toggle('to__right');
});


/**
 * @function deleteBook();
 * @class .clear;
 * @event click;
 * @description this function need to delete a name book to prefer list when you click to tag p;
 */
export function deleteBook() {
    deleteButtons = document.querySelectorAll('.clear');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const bookItem = button.closest('.my__list-book'); // Find parent div
            if (bookItem) {
                bookItem.remove(); // Remove div from DOM
            }
        });
    });
}