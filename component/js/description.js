export const showBookModal = function(book) {
    // Create the modal HTML
    const modal = document.createElement('div');
    modal.id = 'bookModal';
    modal.className = 'modal';

    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>${book.title}</h2>
            <img src="https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg" alt="${book.title}">
            <p><strong>Authors:</strong> ${book.authors.map(author => author.name).join(', ')}</p>
            <p><strong>First Published:</strong> ${book.first_publish_year}</p>
            <p>${book.description ? book.description : 'No description available.'}</p>
        </div>
    `;

    // Append the modal to the body
    document.body.appendChild(modal);

    // Show the modal
    modal.style.display = 'block';

    // Close the modal when clicking on the close button or outside the modal
    const closeButton = modal.querySelector('.close-button');
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        modal.remove(); // Remove the modal from the DOM
    });

    // Close the modal when clicking outside of the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            modal.remove();
        }
    });
};

export default showBookModal ;