const list = []
const cart = document.querySelector(".list")

document.querySelector(".add-btn").addEventListener("click", () => {
    let product = prompt("Введите название товара")
    if (product) {
        list.push(product)
        sortedList = list.sort()
        cart.innerHTML = ""
        for (let i = 0; i < sortedList.length; i++) {
            const li = document.createElement("li")
            li.textContent = list[i]
            cart.appendChild(li)
            
        }
    }
    else {
        alert("Название товара не введено!")
    }
}   
)