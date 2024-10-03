let genre = [
    'Architecture', 'dance', 'design', 'Fashion', 'Film', 'Music', 'Painting', 'Photography', 'Bears', 'Cats', 'Kittens',
    'Dogs', 'Puppies', 'Fantasy', 'Horror', 'Humor', 'Literature', 'Magic', 'Plays', 'Poetry', 'Romance', 'Thriller', 'Biology',
    'Chemistry', 'Mathematics', 'Phisics', 'Programming', 'Management', 'Entrepreneurship', 'Finance', 'Archeology', 'Anthropology',
    'Cooking', 'Cookbooks', 'Exercise', 'Nutrition', 'Autobiography', 'History', 'Women', 'Composers', 'Artists', 'Psychology',
    'Geography', 'Algebra', 'Education', 'Science', 'Phsycs', 'English', 'French', 'Spanish', 'German', 'Russian', 'Italian',
    'Chinese', 'Japanese',
];


const view = document.getElementById("genre");

// Funzione per gestire il click su inputNome e creare i paragrafi
view.addEventListener("click", function handleClick(event) {
  const listBook = document.querySelector(".list__book");

  // Rimuovi eventuali paragrafi esistenti prima di aggiungerne di nuovi
  while (listBook.firstChild) {
    listBook.removeChild(listBook.firstChild);
  }

  // Itera e crea i nuovi paragrafi con i nomi
  genre.forEach((element) => {
    const span = document.createElement("span");
    span.innerHTML = element; // Modificato per evitare concatenazione di stringhe
    listBook.appendChild(span);

    // Aggiunge l'evento di click ai paragrafi
    span.addEventListener("click", function () {
      view.value = element;
      console.log(span);

      // Rimuove i paragrafi dopo aver cliccato su uno di essi
      listBook.innerHTML = "";
    });
  });

  // Previene che il click sull'inputNome scateni subito la rimozione
  event.stopPropagation();
});

// Funzione per rimuovere i paragrafi quando clicchi fuori dall'area listBook o inputNome
document.addEventListener("click", function (event) {
  const listBook = document.querySelector(".list__book"); // Correzione da list__Book a list__book

  // Se clicchi fuori dal container listBook e inputNome, rimuovi i paragrafi
  if (!view.contains(event.target) && !listBook.contains(event.target)) {
    while (listBook.firstChild) {
      listBook.removeChild(listBook.firstChild);
    }
  }
});
