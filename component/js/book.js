let book = document.querySelector('.book');
let containerBook = document.querySelector('.container__book');
let list = document.querySelector('.list');
let clear = document.querySelector('.clear');

// Evento click per spostare il container a destra
book.addEventListener('click', () => {
    console.log("click");
    containerBook.classList.toggle('to__right');
});

//Evento click per rimuovere il primo elemento figlio
clear.addEventListener('click', () => {
    console.log('clear');
    
    // Verifica se esiste un figlio elemento e lo rimuove
    if (list.lastElementChild) {
        list.lastElementChild.remove();
    } else {
        console.log("Nessun elemento da rimuovere");
    }
});