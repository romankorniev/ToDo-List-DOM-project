const pencil = document.querySelector('#pencil')
const input = document.querySelector('.lists')
const all = document.querySelector('.all')
const active = document.querySelector('.active')
const performed = document.querySelector('.performed')
const ul = document.querySelector('.toDos')
const save = document.querySelector('.save')
const clear = document.querySelector('.clear')
const tips = document.querySelector('.tips')
const overlay = document.getElementById('overlay')
const close = document.getElementById('close_button')

pencil.addEventListener('click', () => {
    input.classList.toggle('lists')
    input.focus()
})

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (input.value.trim() !== '') {
      addToDo(input.value.trim())
      input.value = ''
    }
  }
})

const addToDo = (text, checked = false) => {
  if (text.length === 0) return
  const li = document.createElement('li')
  const span = document.createElement('span')
  const i = document.createElement('i')

  li.textContent = text
  if (checked) li.classList.add('checked')

  i.classList.add('fas', 'fa-trash-alt')
  span.insertAdjacentElement('afterbegin', i)
  li.insertAdjacentElement('afterbegin', span)
  ul.insertAdjacentElement('beforeend', li)
}

ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked')
  }
  if (e.target.tagName === 'I') {
    e.target.parentElement.parentElement.remove()
  }
})

active.addEventListener('click', () => {
  const list = document.querySelectorAll('.toDos li')
  list.forEach(li => {
    li.style.display = li.classList.contains('checked') ? 'none' : 'list-item'
  })
})

performed.addEventListener('click', () => {
  const list = document.querySelectorAll('.toDos li')
  list.forEach(li => {
    li.style.display = li.classList.contains('checked') ? 'list-item' : 'none'
  })
})

all.addEventListener('click', () => {
  const list = document.querySelectorAll('.toDos li')
  list.forEach(li => li.style.display = 'list-item')
})

tips.addEventListener('click', () => {
  overlay.classList.toggle('hidden')
})

close.addEventListener('click', () => {
  overlay.classList.add('hidden')
})

save.addEventListener('click', () => {
  const list = document.querySelectorAll('.toDos li')
  const todos = []
  list.forEach(li => {
    todos.push({
      text: li.textContent,
      checked: li.classList.contains('checked')
    })
  })
  localStorage.setItem('todos', JSON.stringify(todos))
  alert('Збережено!')
})

clear.addEventListener('click', () => {
  ul.innerHTML = ''
  localStorage.removeItem('todos')
  alert('Список очищено!')
})

window.addEventListener('DOMContentLoaded', () => {
  const saved = JSON.parse(localStorage.getItem('todos')) || []
  saved.forEach(todo => addToDo(todo.text, todo.checked))
})