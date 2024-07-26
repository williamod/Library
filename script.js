const myLibrary = [];

function Book (title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
    this.pos = myLibrary.length + 1

}

function AddBookToLibrary(book) {
    myLibrary.push(book)
}

function ConstructCard(id) {

    const newBook = document.createElement('div')
    newBook.className = 'book'
    newBook.setAttribute('id', id)
    
    const newTitle = document.createElement('div')
    newTitle.className = 'title'
    newBook.appendChild(newTitle)

    const newAuthor = document.createElement('div')
    newAuthor.className = 'author'
    newBook.appendChild(newAuthor)

    const newRead = document.createElement('div')
    newRead.className = 'read'
    newBook.appendChild(newRead)

    const newPos = document.createElement('div')
    newPos.className = 'pos'
    newBook.appendChild(newPos)  

    const newButton = document.createElement('button')
    newButton.className = 'delete'
    newButton.innerText = 'Delete'
    newButton.onclick = () => {
        document.querySelector('.delete').parentElement.remove()
        myLibrary.splice(id, id)
    }
    newBook.appendChild(newButton)

    const container = document.querySelector('.list')
    container.appendChild(newBook)
}

function FillInfo(i) {
    const info = myLibrary[i]
    const book = document.getElementById(i)
    book.children[0].innerText = info['title']
    book.children[1].innerText = info['author']
    book.children[2].innerText = info['read']
    book.children[3].innerText = i
}

function DisplayBooks(i) {
    ConstructCard(i);
    FillInfo(i); 
}

//BUTTON BEHAVIOR
document.querySelector('.delete')

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
    AddBookToLibrary(book);

    const finalbook = myLibrary[myLibrary.length - 1];
    const finalIndex = myLibrary.lastIndexOf(myLibrary[myLibrary.length - 1])

    DisplayBooks(finalIndex)





    console.log(formData);
    console.log(myLibrary);

});







/*
const fotr = new Book('The Fellowship of the Ring','J.R.R. Tolkein','Yes')
AddBookToLibrary(fotr)

const mistborn = new Book('Mistborn', 'Brandon Sanderson', 'Yes')
AddBookToLibrary(mistborn) 

*/
