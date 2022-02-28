let inputPart = document.getElementById("getTodo");
let inputBut = document.getElementById("button_to");
todo = document.querySelector(".todo");

inputBut.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  paragraph.classList.add("p-styling");
  paragraph.innerText = getTodo.value;
  todo.appendChild(paragraph);
  getTodo.value = "";

  let clickMeButton = document.createElement("button");
  clickMeButton.id = "myButton";
  paragraph.classList.add("btn-styling");
  clickMeButton.innerHTML = "Edit";
  clickMeButton.style.background = "yellow";
  paragraph.appendChild(clickMeButton);

  let clickButton = document.createElement("button");
  clickButton.id = "myButton";
  paragraph.classList.add("btn-styling");
  clickButton.innerHTML = "Delete";
  clickButton.style.background = "red";
  paragraph.appendChild(clickButton);

  let checkbox = document.createElement("input");
  let label = document.createElement("label");

  checkbox.type = "checkbox";
  checkbox.id = "check";
  checkbox.checked = 0;
  label.htmlFor = "check";
  label.className = "label";

  paragraph.append(checkbox);
  paragraph.append(label);

  checkbox.addEventListener("click", function () {
    if (checkbox.checked === false) {
      label.style.textDecoration = "none";
      paragraph.style.backgroundColor = "transparent";
      label.innerHTML = value;
    } else {
      paragraph.style.textDecoration = "line-through";
      paragraph.style.backgroundColor = "gray";
      label.innerHTML = `<span class="done">done:</span>${value}`;
    }
  });

  clickMeButton.addEventListener("click", function () {
    let edit = document.createElement("div");
    let Input = document.createElement("input");
    let save = document.createElement("button");

    let Container = document.createElement("div");
    Container.className = "Container";
    Container.append(clickMeButton);
    Container.append(clickButton);

    edit.classList = "edit_part";
    Input.type = "text";
    Input.placeholder = "Изменить на ...";
    Input.classList = "input_part";
    save.classList = "btn submit";
    save.textContent = "Подтвердить";

    edit.append(Input);
    edit.append(save);
    paragraph.append(edit);

    save.addEventListener(function () {
      Label.innerHTML = `Изменено на: ${Label.value}`;
      paragraph.removeChild(edit);
    });
  });
});
