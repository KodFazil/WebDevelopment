const form = document.querySelector('form');
const input = document.querySelector('#taskNameText');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
let items;

loadItems();

eventListeners();

function eventListeners() {

    // add item
    form.addEventListener('submit', addNewItem);

    // delete item
    taskList.addEventListener('click', deleteItem);

    // delete all items
    btnDeleteAll.addEventListener('click', deleteAllItems);

}

function loadItems() {
    items = getItemsFromLS();
    items.forEach(function (item) {
        createItem(item);
    });
}

function getItemsFromLS() {
    if(localStorage.getItem('items') === null) {
        items = [];
    }
    else {
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}

function setItemToLS(text) {
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem('items', JSON.stringify(items));
}

function deleteItemFromLS(text) {
    items = getItemsFromLS();
    items.forEach(function(item, index){
        if(item === text) {
            items.splice(index, 1);
        }
    });
    localStorage.setItem('items', JSON.stringify(items));
}

function createItem(text) {

    // li 
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));

    // a
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    // a to li
    li.appendChild(a);

    // li to ul
    taskList.appendChild(li);

}


function addNewItem(e) {
    if(input.value === '') {
        alert('enter new item');
    }
    // call create item
    createItem(input.value);

    // save it to Local Storage
    setItemToLS(input.value);

    // clear input value from input on site
    input.value = "";

    // prevent scroll bar goes to top
    e.preventDefault();

}

function deleteItem(e) {
    if (e.target.className === 'fas fa-times') {
        if (confirm('are you sure to delete')) {
            e.target.parentElement.parentElement.remove();

             // delete also from local storage
            deleteItemFromLS(e.target.parentElement.parentElement.textContent);
        }

        e.preventDefault();
    }
}

function deleteAllItems(e) {

    if (confirm('are you sure to delete all items')) {
        // easy method -> taskList.innerHTML = '';
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
        // also delete from LS
        localStorage.clear();
    }
    e.preventDefault();
}
