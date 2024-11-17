// Function to display a modal with book details
import axios from 'axios';

// import function delete prefer book
import { deleteBook } from './book';

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

        //create modal description
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
        
        /**
         * @function;
         * @param closeButton;
         * @description close modal div to click closeButton
         */
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
                <div class='my__list-book mt-20 d-flex space-between px-2'>
                    <p> • ${bookTitle} </p>
                    <p class="clear w-20">
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
                    </p>
                </div>
            `;
            /**
             * @callback function from book.js
             * 
             */
            deleteBook();

        });

        /**
         * @function;
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