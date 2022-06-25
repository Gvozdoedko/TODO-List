function main() {
    const bodyEl = document.getElementById("body");
    const mainDiv = document.getElementById("mainDiv");

    let input = document.getElementById("input_text");
    let button = document.getElementById("button");
    const divEl = document.getElementById("list");
    const ulEl = document.createElement("ul");
    const deleteChecked = document.createElement("button");
    deleteChecked.innerText = `Удалить выбранное`;
    deleteChecked.setAttribute("id", "deleteChecked");
    const btnRemoveAll = document.getElementById("removeAll");
    const btnSelectAll = document.getElementById("selectAll");

    const divLogPage = document.getElementById("divLogin");
    const inputLogin = document.getElementById("inputLogin");
    const inputPassword = document.getElementById("inputPassword");
    const btnLogin = document.getElementById("loginBtn");
    btnLogin.disabled = true;
    const errorEmail = document.createElement("span");
    errorEmail.innerText = "incorrect login";

    const empPass = document.createElement("span");
    empPass.innerText = "fill the password";

    mainDiv.remove();

    //login function
    inputLogin.addEventListener("input", function (event) {
        if (inputLogin.validity.typeMismatch) {
            divLogPage.append(errorEmail);
            btnLogin.disabled = true;
        } else {
            errorEmail.remove();

        }

    });

    inputPassword.addEventListener("input", () => {
        let password = inputPassword.value;
        if (password == "") {
            divLogPage.append(empPass);
        } else {
            btnLogin.disabled = false;
            empPass.remove();
        }
    });

    if (inputLogin.value == "admin@g") {
        if (inputPassword.value == "password123") {
            btnLogin.addEventListener('click', () =>{
                divLogPage.remove();
                bodyEl.append(mainDiv);
                console.log(`dasd`);
            });
        } else {
            btnLogin.addEventListener('click', () => {
                inputPassword.value = '';
                console.log(inputLogin.value);
                console.log(inputPassword.value);
            })

        }
    }

    btnLogin.addEventListener('click', () => {
        if (inputLogin.value == "admin@g") {
            if (inputPassword.value == "password123") {
                divLogPage.remove();
                bodyEl.append(mainDiv);
                console.log(`dasd`);
            };
        } else {
            btnLogin.addEventListener('click', () => {
                inputPassword.value = '';
            });
        };
    });

    //list function

    button.onclick = function () {
        const liEl = document.createElement("li");
        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
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

        ulEl.onclick = (e) => {
            let target = e.target;
            if (target.nodeName = "INPUT") {
                if (target.checked) {
                    console.log(`input`);
                    textInLi.classList.add("strike");
                    ulEl.append(deleteChecked);
                    return;
                } else {
                    textInLi.classList.remove("strike");
                    deleteChecked.remove();
                };
            };
            // if (target.nodeName = "BUTTON") {
            //     // liEl.remove();
            //     // textInLi.remove();
            //     // checkBox.remove();
            //     deleteChecked.remove();
            // }
        };

        btnRemoveAll.addEventListener("click", () => {
            Array.from(allItem).forEach((el) => {
                el.remove();
            });
            deleteChecked.remove();
        });

        btnSelectAll.addEventListener("click", () => {
            const checkboxes = document.querySelectorAll(
                "input[type=checkbox]"
            );
            Array.from(checkboxes).forEach((el) => {
                el.checked = true;
            });
            console.log(Array.from(checkboxes));
        });
    };
}

main();
