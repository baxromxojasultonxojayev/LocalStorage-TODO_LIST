let formElement = document.querySelector('.todo-form')
let inputFormElement = document.querySelector('.todo-input')
let clearButtonElement = document.querySelector('.todo-clear-button')
let newListTodo = document.querySelector('.todo-list')


let newArrTodo = JSON.parse(localStorage.getItem('__newarrTodo'))


if(newArrTodo){
  renderData(newArrTodo)
}else{
  newArrTodo = []
}

  // localStorage.clear()
clearButtonElement.addEventListener('click', event =>{
  localStorage.clear()
  location.reload()
})

formElement.addEventListener('submit', event=>{
  event.preventDefault()
  let infoInput = inputFormElement.value
  newArrTodo.unshift(infoInput)

  localStorage.setItem('__newarrTodo', JSON.stringify(newArrTodo))

  event.target.reset()
  event.target.focus()
  renderData(newArrTodo)
})

function renderData(array){
  newListTodo.textContent = ""
  array.forEach((element,index) =>{
    let newItemTodoElement = document.createElement('li')
    let newTitleTodoElement = document.createElement('h2')
    let newButtonTododELement = document.createElement('button')

    newItemTodoElement.classList.add('todo-item')
    newTitleTodoElement.classList.add('title-element')
    newButtonTododELement.classList.add('todo-button')

    newTitleTodoElement.textContent = element
    newButtonTododELement.textContent = 'X'


    newButtonTododELement.addEventListener('click', event=>{
      newArrTodo.splice(index,1)
      localStorage.setItem('__newarrTodo', JSON.stringify(newArrTodo))

      renderData(newArrTodo)
    })
    
    newItemTodoElement.appendChild(newTitleTodoElement)
    newItemTodoElement.appendChild(newButtonTododELement)
    newListTodo.appendChild(newItemTodoElement)
  })
}