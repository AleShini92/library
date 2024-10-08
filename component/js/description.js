// Function to display a modal with book details
import axios from 'axios';

export const showBookModal = async function(bookKey) {

    let conatinerCards = document.querySelector('.container__cards');
    let header = document.querySelector('header');
    
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
            <div class="prefer pointer text-right">
                <svg class="w-30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
            </div>
        </div>
        `;
        // <img src='https://covers.openlibrary.org/b/id/${bookDetails.covers ? bookDetails.covers[0] : 'placeholder'}-M.jpg' alt='${bookDetails.title}'>

        // Append the modal to the body
        document.querySelector('main').appendChild(modal);

        // Show the modal
        modal.style.display = 'block';
        conatinerCards.style.filter = 'blur(4px)';
        conatinerCards.style.zIndex = '-1';
        header.style.filter = 'blur(4px)';
        header.style.zIndex = '-1';

        // Close the modal when clicking on the close button or outside the modal
        const closeButton = modal.querySelector('.close__button');
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
            modal.remove(); // Remove the modal from the DOM
            document.body.style.overflow = 'auto';
            conatinerCards.style.filter = 'blur(0)';
            header.style.filter = 'blur(0)';
            conatinerCards.style.zIndex = '0';
            header.style.zIndex = '0';
        });

        document.querySelector('.prefer').addEventListener('click', () => {
            console.log('prefer book');
            let list = document.querySelector('.list');
            list.innerHTML += `
                <p class='my__list-book mt-20'> • ${bookDetails.title} </p>
            `;
        });

    } catch (error) {
        console.error('Error fetching book details:', error);
        alert('Error fetching book details. Please try again later.');
    }
};

export default showBookModal;