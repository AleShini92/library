export function handleKeyDown(genreInput, listBook, getBooks) {
    genreInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const genre = genreInput.value.trim().toLowerCase();

            listBook.style.display = 'none';

            //if the genre is valid, the function calls getBooks
            if (genre) {
                // clear the list after another new call reseach
                listBook.innerHTML = '';

                //call function getBooks by genre
                getBooks(genre);
            }
        }
    });
}