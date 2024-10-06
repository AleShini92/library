let genre = [
  'Architecture', 'Dance', 'Design', 'Fashion', 'Film', 'Music', 'Painting', 'Photography', 'Bears', 'Cats', 'Kittens',
  'Dogs', 'Puppies', 'Fantasy', 'Horror', 'Humor', 'Literature', 'Magic', 'Plays', 'Poetry', 'Romance', 'Thriller', 'Biology',
  'Chemistry', 'Mathematics', 'Phisics', 'Programming', 'Management', 'Entrepreneurship', 'Finance', 'Archeology', 'Anthropology',
  'Cooking', 'Cookbooks', 'Exercise', 'Nutrition', 'Autobiographies', 'History', 'Women', 'Composers', 'Artists', 'Psychology',
  'Geography', 'Algebra', 'Education', 'Science', 'Phsycs', 'English', 'French', 'Spanish', 'German', 'Russian', 'Italian',
  'Chinese', 'Japanese',
];

genre.unshift('Arts');
genre.splice(9, 0, 'Animals');
genre.splice(15, 0, 'Fiction');
genre.splice(25, 0, 'Science & Mathematics');
genre.splice(31, 0, 'Business & Finance');
genre.splice(35, 0, 'History');
genre.splice(38, 0, 'CookBooks');
genre.splice(43, 0, 'Biography');
genre.splice(50, 0, 'Textbooks');
genre.splice(56, 0, 'Books by Language');

const view = document.getElementById('genre');

/**
 * 
 * @function handleClick
 * @param {listBook}
 * 
 */
view.addEventListener('click', function handleClick(event) {
  const listBook = document.querySelector('.list__book');
  listBook.style.background = 'hsl(214deg 34.72% 95.58%)';
  listBook.style.borderRadius = '30px';
  listBook.style.display = 'flex';

  // Rimuovi eventuali paragrafi esistenti prima di aggiungerne di nuovi
  while (listBook.firstChild) {
    listBook.removeChild(listBook.firstChild);
  }

  /**
   * 
   * @param { genre[] }
   * forEach - element inside array genre[]
   */
  genre.forEach((element) => {
    const span = document.createElement('span');
    span.innerHTML = element;
    listBook.appendChild(span);
    /***
     * 
     * @callback {colorList}
     * 
     */
    colorList(span);

    // Add event click paragraph
    span.addEventListener('click', function () {
      view.value = element.toLowerCase();
      console.log(span);

      // Remove paragraph after click on it
      listBook.innerHTML = '';
      // remove backgroundColor element
      listBook.style.display = 'none';
    });
  });

  // bubbling capturing
  event.stopPropagation();
});

/*
 * 
 * Function to remove element inside @param { listBook }
 * 
 */
document.addEventListener('click', function (event) {
  const listBook = document.querySelector('.list__book');
  
  // Se clicchi fuori dal container listBook e inputNome, rimuovi i paragrafi
  if (!view.contains(event.target) && !listBook.contains(event.target)) {
    while (listBook.firstChild) {
      listBook.removeChild(listBook.firstChild);
      listBook.style.display = 'none';
    }
  }
});




/**
 * 
 * @param {*} item 
 * @param { genre[] }
 * To create element with different backgroundColor
 */

function colorList(item) {
  if (genre.includes(item.textContent.trim())) {
    switch (item.textContent.trim()) {
      case 'Arts':
      case 'Animals':
      case 'Fiction':
      case 'Science & Mathematics':
      case 'Business & Finance':
      case 'History':
      case 'CookBooks':
      case 'Biography':
      case 'Textbooks':
      case 'Books by Language':
        item.className = 'sticky';
        break;
      default:
        item.style.backgroundColor = 'hsl(215, 23%, 56%)';
    }
  }
}