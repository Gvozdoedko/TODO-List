function main() {
    let input = document.getElementById("input_text");
    let button = document.getElementById("button");
    const divEl = document.getElementById("list");
    const ulEl = document.createElement("ul");

    button.onclick = function () {
        const liEl = document.createElement("li");
        let textFromUser = input.value;
        if (input.value == "") {
            alert(`Заполните поле 'Ваше имя'`);
            return false;
        } else {
            console.log(textFromUser);
            liEl.innerText = textFromUser;
            input.value = "";
            ulEl.append(liEl);
            divEl.append(ulEl);
        }
    };
}

main();
