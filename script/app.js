let input = document.getElementById('input');
let list = document.getElementById('list');
let minNum = 3;
let i = 1;

function addFilter(x) {
    if (x) {
        if (x.length >= minNum) {
            return x;
        } else {
            alert("Input Valid");
            return false;
        }
    } else {
        alert("Input Valid");
        return false;
    }
}

function addFullList(text) {
    list.innerHTML += `
  <li class="list${i}" id="list${i}">
  <span class="list-text${i}" id="listText${i}">${text}</span>
  <button class="btn delete-btn" id="deleteBtn${i}" onclick="deleteList(${i})">Delete</button>
  <button class="btn edit-btn" id="editBtn${i}" onclick="editList(${i})">Edit</button>
  </li> 
   `; i++;
}

function deleteList(listId){
    let current = document.getElementById(`list${listId}`);
    let currentText = document.getElementById(`listText${listId}`).innerHTML;
    let confirmDelete = confirm(`Are you sure to delete ${currentText}`);
    if(confirmDelete){
    list.removeChild(current);
    }else{
        console.log("delete cancel");
    }
    // console.log('delete');
}

function editList(listId) {
    // console.log("success");
    let current = document.getElementById(`listText${listId}`);
    let newText = prompt("Edit New Text here", current.innerHTML);
    if(addFilter(newText)){
        current.innerHTML = newText;
    }
}

function addList() {
    let inputText = addFilter(input.value);

    if (inputText) {
        addFullList(inputText);
        input.value = "";
    } else {
        input.value = "";
    }

}