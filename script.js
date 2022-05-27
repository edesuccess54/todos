const addForm = document.querySelector('.addForm');
const list = document.querySelector('.list');
const searchForm = document.querySelector('.search');


// adding new todo 
function addTodo(term) {
    const html = `
            <li>
                <span>${term}</span>
                <i class="fa-solid fa-trash-can delete"></i>
            </li>
            `
        list.innerHTML += html; 
}

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const term = document.querySelector('.add').value.trim();

    if(term.length) {
        addTodo(term);
        addForm.reset();
    }
});

// deleting item 
list.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

// search function 
const filterTodos = (result) => {
   Array.from(list.children)
   .filter((todo) => !todo.textContent.toLowerCase().includes(result))
   .forEach((todo) => todo.classList.add('filtered'));

   Array.from(list.children)
   .filter((todo) => todo.textContent.toLowerCase().includes(result))
   .forEach((todo) => todo.classList.remove('filtered'));
}

// search todo 
searchForm.addEventListener('keyup', () => {
    let result = searchForm.value.trim().toLowerCase();
    filterTodos(result);
});



