let addItemsBox = document.querySelector(".add-items-box");
let mainList = document.querySelector(".main-list");
// let deleteButton = document.querySelector(".delete-button");
let mainContainer = document.querySelector(".main-container");
let searchItemsInput = document.querySelector("#search-items");

let generateToDoTemplate = (todoItem) => {
    let myTemplate = `
    <li class="list-item">
    <span class="list-item-text">${todoItem}</span>
    <div class="delete-button">
        X
    </div>
    </li>
    `
    mainList.innerHTML += myTemplate;
    // mainList.append(grotto); //not able to prepend or append
}

addItemsBox.addEventListener('submit', (e) => {
    e.preventDefault();
    let todoItem = addItemsBox.AddItems.value.trim();
    if (todoItem.length) {
        generateToDoTemplate(todoItem);
    }
    addItemsBox.reset();
});

mainList.addEventListener('click', (e)=>{
    if (e.target.classList.contains("delete-button")){
        e.target.parentElement.remove();
    }
});

let filterToDoList = (toDoListItem)=>{

   Array.from(mainList.children)
   .filter((term) =>{
       return !term.textContent.toLowerCase().includes(toDoListItem);
   })
   .forEach((term) => {
        term.classList.add("filter-class");
   })
   
   

   Array.from(mainList.children)
   .filter((term) =>{
       return term.textContent.toLowerCase().includes(toDoListItem);
   })
   .forEach((term) => {
        term.classList.remove("filter-class");
   })

}

searchItemsInput.addEventListener('keyup', ()=>{
    let toDoListItem = searchItemsInput.value.trim().toLowerCase();
    filterToDoList(toDoListItem);
})
