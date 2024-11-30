const list = []
const heightlist = document.querySelector(".list")

document.querySelector(".add-btn").addEventListener("click", () => {
    let height = Number(prompt("Введите рост"))
    if (height) {
        list.push(height)
        const li = document.createElement("li")
        li.textContent = height
        heightlist.appendChild(li)

    }
    else {
        alert("Рост не введен!")
    }
}   
)

document.querySelector(".filter-btn").addEventListener("click", () => {
    let height = Number(prompt("Введите минимальный рост"))
    const children = Array.from(heightlist.children);
    if (height) {
        children.forEach(element => {
            if (Number(element.textContent) < height) {
                element.style.display = "none"
            }
        });
    }
    else {
        children.forEach(element => {
            element.style.display = ""
        });
    }
}   
)