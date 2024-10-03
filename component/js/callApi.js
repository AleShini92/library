import axios from "axios";

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
            document.getElementById('resultTitle').innerText = `Books in the "${searchGenreTitle}" genre:`;
            // Clear previous results
            const bookList = document.getElementById('bookList');
            bookList.innerHTML = '';

            // Populate the book list
            books.forEach(book => {
                const card = `
                    <div class="card bg-card b-radius_1">
                        <div class="card__img m-auto p-2">
                            <figure>
                                <img class="obj-fit w-100" src="https://covers.openlibrary.org/b/id/${book.cover_id}.jpg" title="${book.title}" alt="${book.title}"/>
                            </figure>
                            <figcaption><strong>${book.title}</strong></figcaption>
                        </div>
                    </div>
                `
                bookList.insertAdjacentHTML('beforeend', card);
            });
        } else {
            document.getElementById('resultTitle').innerText = 'No books found.';
        }
    } catch (e) {
        console.log(e.message);
        document.getElementById('resultTitle').innerText = 'Error fetching books.';
    }
};

// Event listener for the button
document.getElementById('searchBtn').addEventListener('click', function() {
    const genre = document.getElementById('genre').value.toLowerCase();
    if (genre) {
        getBooks(genre);
    }
    else {
        document.getElementById('resultTitle').innerText = 'genre not found!!';
    }
});
  