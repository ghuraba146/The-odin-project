const myLiBrary = [];
function Book(name,author,pages,read){
  this.id = crypto.randomUUID();
  this.name = name
  this.author = author
  this.pages = pages
  this.read = read
}

Book.prototype.togggleRead = function(){
  this.read = !this.read;
}

function createBook(name,author,pages,read){
  const book = new Book(name,author,pages,read)
  myLiBrary.push(book)
}



const bookGrid =document.querySelector('.book-grid')
function loopArray(){
  
  bookGrid.innerHTML = ''
  myLiBrary.forEach((book)=>{
    bookGrid.innerHTML+= ` <div  class="book-card">
    <h2>${book.name}</h2>
    <p><span>Author:</span> ${book.author}</p>
    <p><span>Pages:</span> ${book.pages}</p>
    <p><span>Status:</span>  ${book.read}</p>
    <button data-id="${book.id}"  class="remove-button">remove</button>
    <button data-id="${book.id}"  class="change-button">Change read status</button>
    
    </div>`
    
    
  })
  
  document.querySelectorAll('.remove-button').forEach((button)=>{
    button.addEventListener('click',()=>{
      let id = button.dataset.id
      for (let i = 0; i < myLiBrary.length; i++) {
        if (myLiBrary[i].id === id) {
          myLiBrary.splice(i, 1); 
          loopArray();
          break;
        }
      }
    })
  })
  document.querySelectorAll('.change-button').forEach((button) => {
  button.addEventListener('click', () => {
    let id = button.dataset.id;
    const book = myLiBrary.find(b => b.id === id);
    if (book) {
      book.togggleRead();
      loopArray();
    }
  });
});

}

loopArray();



const formDiv= document.querySelector('.div-form')
const form = document.getElementById('book-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
});
const bookName =document.querySelector('#book-name')
const bookAuthor = document.querySelector('#book-author')
const bookPages = document.querySelector('#book-pages')
const bookRead = document.querySelector('#book-read')
document.querySelector('.submit').addEventListener('click',()=>{
  
  createBook(bookName.value, bookAuthor.value, bookPages.value, bookRead.value);
  loopArray();
  formDiv.style.display = 'none'
})

document.querySelector('.add-button').addEventListener('click',()=>{
  formDiv.style.display='initial'
})

// createBook("Riyadh as-Salihin", "Imam an-Nawawi", 1900, false);
// createBook("Fortress of the Muslim", "Sa'id bin Ali bin Wahf Al-Qahtani", 160, true);
// createBook("The Sealed Nectar", "Safiyyur Rahman Mubarakpuri", 600, true);
// createBook("Fiqh-us-Sunnah", "Sayyid Sabiq", 1300, false);
// createBook("Tafsir al-Jalalayn", "Jalal ad-Din al-Mahalli & Jalal ad-Din as-Suyuti", 800, true);
// createBook("Bulugh al-Maram", "Ibn Hajar al-Asqalani", 1500, false);
// createBook("Umdat al-Ahkam", "Abdul Ghani al-Maqdisi", 500, false);
// createBook("Tafsir Ibn Kathir", "Ibn Kathir", 3500, true);