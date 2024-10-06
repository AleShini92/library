// Function to display a modal with book details
import axios from 'axios';

export const showBookModal = async function(bookKey) {

    let containerCards = document.querySelector('.container__cards')

    try {
        // Make an API call to fetch detailed book information
        const res = await axios.get(`https://openlibrary.org${bookKey}.json`);
        const bookDetails = res.data;

        // Create the modal HTML
        const modal = document.createElement('div');
        modal.id = 'bookModal';
        modal.className = 'modal';
        modal.innerHTML = `
        <div class='modal__content'>
            <span class='close__button'>&times;</span>
            <h2>${bookDetails.title}</h2>
            <p>${bookDetails.description ? (bookDetails.description.value || bookDetails.description) : 'No description available.'}</p>
        </div>
        `;
        // <img src='https://covers.openlibrary.org/b/id/${bookDetails.covers ? bookDetails.covers[0] : 'placeholder'}-M.jpg' alt='${bookDetails.title}'>

        // Append the modal to the body
        document.querySelector('main').appendChild(modal);

        // Show the modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        containerCards.style.filter = 'blur(4px)';

        // Close the modal when clicking on the close button or outside the modal
        const closeButton = modal.querySelector('.close__button');
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
            modal.remove(); // Remove the modal from the DOM
            document.body.style.overflow = 'auto';
            containerCards.style.filter = 'blur(0)';
        });
    } catch (error) {
        console.error('Error fetching book details:', error);
        alert('Error fetching book details. Please try again later.');
    }
};

export default showBookModal;