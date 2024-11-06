// Function to display a modal with book details
import axios from 'axios';

export const showBookModal = async function(bookKey) {

    let containerCards = document.querySelector('.container__cards');
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
            <div class="prefer pointer">
                <svg class="w-30 heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
            </div>
        </div>
        `;

        // Append the modal to the body
        document.querySelector('main').appendChild(modal);

        // Show the modal css style
        modal.style.display = 'block';
        containerCards.style.filter = 'blur(4px)';
        containerCards.style.zIndex = '-1';
        header.style.filter = 'blur(4px)';
        header.style.zIndex = '-1';

        // Close the modal when clicking on the close button
        const closeButton = document.querySelector('.close__button');
        
        closeButton.addEventListener('click', function() {
            console.log('close button');
            modal.remove(); // Remove the modal from the DOM
            document.body.style.overflow = 'auto';
            containerCards.style.filter = 'blur(0)';
            header.style.filter = 'blur(0)';
            containerCards.style.zIndex = '0';
            header.style.zIndex = '0';
        });

        let prefer = document.querySelector('.prefer');
        let heart = document.querySelector('.heart');
        const defaultColor = 'white';
        const preferredColor = 'red';

        // recover the color on localStorage
        const savedColor = localStorage.getItem('heartColor') || defaultColor;
        heart.style.fill = savedColor;

        /**
         * Add title to prefer list
         */
        prefer.addEventListener('click', () => {
            // Change heart's color
            changeColor();

            // Add title to prefer list
            let list = document.querySelector('.list');
            let bookTitle = bookDetails?.title || 'Titolo Sconosciuto'; // `bookDetails` is defined
            list.innerHTML += `
                <div class="flex">
                    <p class='my__list-book mt-20'> • ${bookTitle} </p>
                </div>
            `;
        });

        /**
         * @function
         * @param { heart };
         * Change heart's color and save on the localStorage
         */
        function changeColor() {
            // Switch heart's color to with & black
            if (heart.style.fill === preferredColor) {
                heart.style.fill = defaultColor;
                localStorage.setItem('heartColor', defaultColor);
            } else {
                heart.style.fill = preferredColor;
                localStorage.setItem('heartColor', preferredColor);
            }
        }
    }


    catch (error) {
        //console.error('Error fetching book details:', error);
        alert('Error fetching book details. Please try again later.');  
    }
};
export default showBookModal;