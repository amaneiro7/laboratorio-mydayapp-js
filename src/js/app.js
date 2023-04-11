const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const inputNewTodo = document.querySelector(".new-todo");
const todoListContainer = document.querySelector(".todo-list");
const todoCount = document.querySelector(".todo-count");
const clearCompleted = document.querySelector(".clear-completed");
const filters = document.querySelector(".filters");
//se crea un array vacio para el almacenamiento temporal de las tareas
let taskListArray = [];
//una variable para guardar un atajo para el llamado de las tareas almacenadas en el localstorage
const getterLocalStorage = JSON.parse(localStorage.getItem("mydayapp-js"));

//compoentes de eventos globales
//evento que esuchca cuando el hash cambia
window.addEventListener("hashchange", renderUI, false);
//evento del boton que limpia las tareas completadas
clearCompleted.addEventListener("click", clearTaskCompleted);
//Evento del input principal para agregar nuevas tareas
inputNewTodo.addEventListener("keydown", ({ key }) => {
  if (key === "Enter") {
    inputValue(inputNewTodo);
  }
});

//la logica empleada para la primera carga de la aplicacion
export function firstLoad() {
  //se valida si hay alguna tarea almacenada en el localstorage, de ser nula se llama a la funcion que oculta el main y el footer
  //si hay alguna tarea en el localstorage, se carga los elementos en la variable temporal taskListArray y se realiza el renderizado
  //en la interfaz grafica
  if (getterLocalStorage === null) {
    setterLocalStorage();
    verifyTaskLIstArray();
  } else {
    verifyTaskLIstArray();
    taskListArray = [...getterLocalStorage];
    renderUI();
  }
}

//utils
function verifyTaskLIstArray() {
  if (taskListArray.length === 0) {
    main.classList.add("hidden");
    footer.classList.add("hidden");
  } else {
    main.classList.remove("hidden");
    footer.classList.remove("hidden");

    const someCompleted = taskListArray.some((task) => task.completed == true);
    someCompleted
      ? clearCompleted.classList.remove("hidden")
      : clearCompleted.classList.add("hidden");
  }
}

function clearInput() {
  inputNewTodo.value = "";
}

function setterLocalStorage() {
  localStorage.setItem("mydayapp-js", JSON.stringify(taskListArray));
}

//logic add Task
const inputValue = () => {
  const text = inputNewTodo.value.trim().toLowerCase();
  if (text !== "") {
    clearInput();
    addTodoList(text);
  } else {
    clearInput();
  }
};

function addTodoList(text) {
  const id = (taskListArray.length + 1).toString();
  let newTask = {
    id: id,
    title: text,
    completed: false,
  };
  taskListArray = [...taskListArray, newTask];
  setterLocalStorage();
  renderUI();
}

//UI interface
function deleteTask({ target: { offsetParent: liContainer } }) {
  taskListArray = taskListArray.filter(
    (task) => task.id != liContainer.dataset.id
  );
  setterLocalStorage();
  renderUI();
}

function editingMode({ target: { offsetParent: liContainer } }) {
  const { lastChild: input } = liContainer;
  liContainer.classList.toggle("editing"); // se agrega la clase al Contenedor para acceder a al modo editar
  input.focus();

  // se almacenan los valores del ID y del valor por defecto del input

  const inputEditValue = this.innerText; // se almacena el valor iniciar del input

  input.addEventListener("keydown", ({ key }) => {
    if (key === "Enter") {
      const found = taskListArray.findIndex(
        (index) => index.id == liContainer.dataset.id
      );
      taskListArray[found].title = input.value.trim();
      setterLocalStorage();
      renderUI();
    } else if (key === "Escape") {
      input.value = inputEditValue;
      liContainer.classList.remove("editing");
    }
  });
}

function checkBox({ target: { offsetParent: liContainer } }) {
  liContainer.classList.toggle("completed");
  const found = taskListArray.findIndex(
    (index) => index.id == liContainer.dataset.id
  );
  taskListArray[found].completed === false
    ? (taskListArray[found].completed = true)
    : (taskListArray[found].completed = false);
  verifyTaskLIstArray();
  setterLocalStorage();
  renderUI();
}

function clearTaskCompleted() {
  taskListArray = taskListArray.filter((task) => task.completed !== true);
  setterLocalStorage();
  renderUI();
}

//target.offsetParent.dataset

function renderUI() {
  let taskIterator = [];
  todoListContainer.innerHTML = "";
  verifyTaskLIstArray();
  getTaskFilterd(taskIterator);
  const container = [];
  if (location.hash.startsWith("#/pending")) {
    taskIterator = taskListArray.filter((task) => task.completed !== true);
  } else if (location.hash.startsWith("#/completed")) {
    taskIterator = taskListArray.filter((task) => task.completed !== false);
  } else {
    taskIterator = taskListArray;
  }

  taskIterator.forEach((task) => {
    const liContainer = template(task);
    container.push(liContainer);
  });
  todoListContainer.append(...container);
  itemLeft();
}

const getTaskFilterd = () => {
  const { hash } = window.location;
  const all = filters.children[0].lastElementChild.classList;
  const pending = filters.children[1].lastElementChild.classList;
  const completed = filters.children[2].lastElementChild.classList;

  switch (hash) {
    case "":
    case "#/":
    case "#/all":
      all.add("selected");
      pending.remove("selected");
      completed.remove("selected");
      break;
    case "#/pending":
      all.remove("selected");
      pending.add("selected");
      completed.remove("selected");
      break;
    case "#/completed":
      all.remove("selected");
      pending.remove("selected");
      completed.add("selected");
      break;
    default:
      all.add("selected");
      pending.remove("selected");
      completed.remove("selected");
  }
};

//template
function template(task) {
  const liContainer = document.createElement("li");
  const divView = document.createElement("div");
  const inputCheckBox = document.createElement("input");
  const labelTask = document.createElement("label");
  const btnDestroy = document.createElement("button");
  const inputEdit = document.createElement("input");
  liContainer.dataset.id = task.id;
  divView.classList.add("view");
  inputCheckBox.classList.add("toggle");
  inputCheckBox.addEventListener("click", checkBox);
  inputCheckBox.type = "checkbox";

  if (task.completed === true) {
    inputCheckBox.checked = true;
    liContainer.classList.add("completed");
  } else if (task.completed === false) {
    inputCheckBox.checked = false;
    liContainer.classList.remove("completed");
  }

  labelTask.innerText = task.title;
  labelTask.addEventListener("dblclick", editingMode);

  btnDestroy.classList.add("destroy");
  btnDestroy.addEventListener("click", deleteTask);

  inputEdit.classList.add("edit");
  inputEdit.value = task.title;

  divView.append(inputCheckBox, labelTask, btnDestroy);
  liContainer.append(divView, inputEdit);
  return liContainer;
}
//Funciones
function itemLeft() {
  let item;
  let items = taskListArray.filter((task) => task.completed !== true);
  items.length > 1 ? (item = "items") : (item = "item");
  todoCount.innerHTML = `<strong>${items.length}</strong> ${item} left`;
}
