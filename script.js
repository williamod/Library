class Book {
    constructor(title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;
    }
    
}

class Library {
    constructor() {}

    createBook() {
        const newBook = document.createElement('div');
        newBook.className = 'book';

        const newTitle = document.createElement('div')
        newTitle.className = 'title'
        newBook.appendChild(newTitle)

        const newAuthor = document.createElement('div')
        newAuthor.className = 'author'
        newBook.appendChild(newAuthor)

        const newRead = document.createElement('div')
        newRead.className = 'read'
        newBook.appendChild(newRead)

        const newButton = document.createElement('button')
        newButton.className = 'delete'
        newButton.innerText = 'Delete'
        newButton.onclick = () => {
            newButton.parentElement.remove()
        }
        newBook.appendChild(newButton)
    
        const container = document.querySelector('.list')
        container.appendChild(newBook)

        return newBook
    }

    fillInfo(container, info) {
        container.children[0].innerText = info['title']
        container.children[1].innerText = info['author']
        container.children[2].innerText = info['read']

    }

    
}

const library = new Library()

//BUTTON BEHAVIOR
document.getElementById('close').onclick = () => {
    document.getElementById('myform').reset();
    document.querySelector('dialog').close();
}

document.querySelector('.add').onclick = () => {
    document.querySelector('dialog').show();
}

document.getElementById('myform').addEventListener('submit', (event) => {
    event.preventDefault();
    
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let read = document.getElementById('read').checked;

    formData = {
        'title' : title,
        'author' : author,
        'read' : read
    };

    document.getElementById('myform').reset();
    document.querySelector('dialog').close();

    const book = new Book(formData['title'], formData['author'], formData['read'].toString());
    const card = library.createBook()
    library.fillInfo(card, book)
});







/*
const fotr = new Book('The Fellowship of the Ring','J.R.R. Tolkein','Yes')
AddBookToLibrary(fotr)

const mistborn = new Book('Mistborn', 'Brandon Sanderson', 'Yes')
AddBookToLibrary(mistborn) 

*/
