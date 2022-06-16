function main() {
    let input = document.getElementById("input_text");
    let button = document.getElementById("button");
    const divEl = document.getElementById("list");
    const ulEl = document.createElement("ul");
    const deleteChecked = document.createElement("button");
    deleteChecked.innerText = `Удалить выбранное`;
    const btnRemoveAll = document.getElementById("removeAll");
    const btnSelectAll = document.getElementById("selectAll");

    button.onclick = function () {
        const liEl = document.createElement("li");
        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkBox");
        const textInLi = document.createElement("span");
        const allItem = document.getElementsByTagName("li");

        let textFromUser = input.value;
        if (input.value == "") {
            alert(`Заполните поле 'Ваше имя'`);
            return false;
        } else {
            console.log(textFromUser);
            textInLi.innerText = textFromUser;
            input.value = "";
            liEl.append(checkBox);
            liEl.append(textInLi);
            ulEl.append(liEl);
            divEl.append(ulEl);
        }

        checkBox.addEventListener("change", (e) => {
            if (e.target.checked) {
                textInLi.classList.add("strike");
                divEl.append(deleteChecked);
            } else {
                textInLi.classList.remove("strike");
                deleteChecked.remove();
            }
            deleteChecked.onclick = function () {
                textInLi.remove();
                checkBox.remove();
                deleteChecked.remove();
            };
        });

        btnRemoveAll.onclick = function () {
            Array.from(allItem).forEach((el) => {
                el.remove();
            });
        };

        btnSelectAll.onclick = function () {
            const checkboxes = document.querySelectorAll("input[type=checkbox]");
            Array.from(checkboxes).forEach((el) => {
                el.checked = true;
            });
        };
    };
}

main();
