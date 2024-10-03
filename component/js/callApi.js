import axios from "axios";
import { showBookModal } from './description';
/***
 *
 * @async
 * @param { genre }
 * @param { getBooks }
 * @param { books }
 * @param { BookList }
 * 
*/

const getBooks = async function(genre) {
    try {
        const res = await axios.get(
            `https://openlibrary.org/subjects/${genre}.json?limit=20`,
        );
        const books = res.data.works;
        console.log(books);
        if (books.length !== 0) {
            const searchGenreTitle = `${genre[0].toUpperCase()}${genre.slice(1)}`;
            document.querySelector('#resultTitle').innerText = `Books in the "${searchGenreTitle}" genre:`;
            
            // Clear previous results
            const bookList = document.querySelector('#bookList');
            bookList.innerHTML = '';

            // Populate the book list
            books.forEach(book => {
                const card = `
                    <div class="card bg-card b-radius_1" data-book-id="${book.key}">
                        <div class="card__img m-auto p-2">
                            <figure>
                                <img class="obj-fit w-100" src="https://covers.openlibrary.org/b/id/${book.cover_id}.jpg" title="${book.title}" alt="${book.title}"/>
                            </figure>
                            <figcaption><strong class="text-color">${book.title}</strong></figcaption>
                        </div>
                    </div>
                `;
                bookList.insertAdjacentHTML('beforeend', card);
            });

            // Add click event listener to each card
            document.querySelectorAll('.card').forEach(card => {
                card.addEventListener('click', function() {
                    const bookId = this.getAttribute('data-book-id');
                    const selectedBook = books.find(book => book.key === bookId);
                    if (selectedBook) {
                        showBookModal(selectedBook);
                    }
                });
            });
        } else {
            document.querySelector('#resultTitle').innerText = 'No books found.';
        }
    } catch (e) {
        console.log(e.message);
        document.querySelector('#resultTitle').innerText = 'Error fetching books.';
    }
};


/***
 * @param { searchBtn }
 * @param { genre }
*/
document.querySelector('#searchBtn').addEventListener('click', function() {
    const genre = document.querySelector('#genre').value.toLowerCase();
    if (genre) {
        getBooks(genre);
    }
    else {
        document.querySelector('#resultTitle').innerText = 'genre not found!!';
    }
});
  