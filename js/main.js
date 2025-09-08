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
    if(e.key === 'Enter'){
        addToDo(input.value)
        input.value = ' '
    }
})

const addToDo = (text) => {
    if (text.lenght === 0) return
    const li = document.createElement('li') 
    const span = document.createElement('span') 
    const i = document.createElement('i') 
    li.textContent = text //<li>text</li>
    i.classList.add('fas', 'fa-trash-alt') //<i class="fas fa-trash-alt"></i>
    span.insertAdjacentElement('afterbegin', i) //<span><i class="fas fa-trash-alt"></i></span>
    li.insertAdjacentElement('afterbegin', span) //<li><span><i class="fas fa-trash-alt"></i></span>text</li>
    ul.insertAdjacentElement('afterbegin', li)// <ul><li><span><i class="fas fa-trash-alt"></i></span>text</li></ul>
}

ul.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
    }

    if(e.target.tagName === 'I'){
        e.target.parentElement.parentElement.remove()
    }
})

active.addEventListener('click', () => {
    const list = document.querySelectorAll('.toDos li')
    for (let i = 0; i < list.length; i++){
        list[i].style.display = 'list-item'
        if(list[i].className ==='checked'){
            list[i].style.display = 'none'
        }
    }
})

performed.addEventListener('click', () => {
    const list = document.querySelectorAll('.toDos li')
    for (let i = 0; i < list.length; i++){
        list[i].style.display = 'list-item'
        if(list[i].className !=='checked'){
            list[i].style.display = 'none'
        }
    }
})

all.addEventListener('click', () => {
    const list = document.querySelectorAll('.toDos li')
    for (let i = 0; i < list.length; i++){
        list[i].style.display = 'list-item'
        if(list[i].className ==='checked'){
            list[i].style.display = 'list-item'
        }
    }
})

tips.addEventListener('click', () => {
  overlay.classList.toggle('hidden');
});

close.addEventListener('click', () => {
  overlay.classList.add('hidden');
});