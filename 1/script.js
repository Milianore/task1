const list = []
const booklist = document.querySelector(".booklist")

document.querySelector(".add-btn").addEventListener("click", () => {
    let book = prompt("Введите название книги")
    if (book) {
        list.push(book)
        const li = document.createElement("li")
        li.textContent = book
        booklist.appendChild(li)

    }
    else {
        alert("Название книги не введено!")
    }
}   
)

document.querySelector(".find-btn").addEventListener("click", () => {
    let book = prompt("Введите название книги")
    if (list.includes(book)) {
        booklist.children[list.indexOf(book)].style.backgroundColor = "yellow"
    }
    else {
        alert("Книга не найдена!")
    }
}   
)