let heart;
const defaultColor = 'white';
const preferredColor = 'red';

/**
 * @param {Object} bookDetails
 * @description event prefer on click heart and add the book on the list
 * 
 */
export function preferBook(bookDetails) {
    // When the heart it's create dinamically, it's possible to selected and added the event 
    heart = document.querySelector('.prefer .heart');

    if (heart) {
        // initial color heart
        heart.style.fill = localStorage.getItem('heartColor') || defaultColor;

        // added event click on the hert
        heart.addEventListener('click', () => {
            // change the heart's color and save it in localStorage
            changeColor();

            // added the book on the prefer list
            let list = document.querySelector('.list');
            let bookTitle = bookDetails?.title || 'Titolo Sconosciuto';
            const bookId = bookDetails?.key || bookTitle;  // the book ID (use an unic id)

            list.innerHTML += `
                <div class='my__list-book mt-20 d-flex space-between px-2' data-id="${bookId}">
                    <p> • ${bookTitle} </p>
                    <div class="clear w-20">
                        <div class="delete-book pointer">
                            <?xml version="1.0" encoding="utf-8"?>
                            <svg class="pointer" version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	                        viewBox="0 0 448 512" style="enable-background:new 0 0 448 512;" xml:space="preserve">
                            <style type="text/css">
	                        .st0{fill:#758AA9;}
                            </style>
                            <path class="st0" d="M32,128l21.2,339c1.6,25.3,22.6,45,47.9,45h245.8c25.3,0,46.3-19.7,47.9-45L416,128H32z M170.6,474.4
	                        c0,7.4-6,13.5-13.5,13.5s-13.5-6-13.5-13.5v-249c0-7.5,6-13.5,13.5-13.5c3.8,0,7.1,1.5,9.6,3.9c2.4,2.4,3.9,5.8,3.9,9.6V474.4z
	                        M237.1,474.4c0,7.4-6,13.5-13.5,13.5s-13.5-6-13.5-13.5v-249c0-7.5,6-13.5,13.5-13.5c3.8,0,7.1,1.5,9.6,3.9
	                        c2.4,2.4,3.9,5.8,3.9,9.6V474.4z M303.6,474.4c0,7.4-6.1,13.5-13.5,13.5c-7.5,0-13.5-6-13.5-13.5v-249c0-7.5,6-13.5,13.5-13.5
	                        c3.8,0,7.1,1.5,9.6,3.9c2.4,2.4,3.9,5.8,3.9,9.6V474.4z M416,32h-96l-7.2-14.3C307.4,6.8,296.3,0,284.2,0H163.8
	                        c-12.1,0-23.2,6.8-28.6,17.7L128,32H32C14.3,32,0,46.3,0,64s14.3,32,32,32h384c17.7,0,32-14.3,32-32S433.7,32,416,32z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            `;

            // added the event to delete the book on the list
            const deleteButton = document.querySelector(`[data-id="${bookId}"] .delete-book`);
            deleteButton.addEventListener('click', () => {
                deleteBook(bookId);
            });
        });
    }
}

/**
 * Change the heart's color and saved to localStorage
 */
export function changeColor() {
    if (heart.style.fill === preferredColor) {
        heart.style.fill = defaultColor;
        localStorage.setItem('heartColor', defaultColor);
    } else {
        heart.style.fill = preferredColor;
        localStorage.setItem('heartColor', preferredColor);
    }
}

/**
 * Remove a book on the prefer list
 * @param {string} bookId - The ID book to remove
 * 
 */
export function deleteBook(bookId) {
    // search the book's element with data-id
    const bookElement = document.querySelector(`.my__list-book[data-id="${bookId}"]`);

    // If the element exist, remove them on DOM
    if (bookElement) {
        bookElement.remove();
    }
}
