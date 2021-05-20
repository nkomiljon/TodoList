'use strict';

const rootEl = document.getElementById('root');

const headerEl = document.createElement('header');
headerEl.style = "display: flex; align-items: center; padding: 0 1rem; text-align: center; background: #ccc; text-transform: uppercase;";
rootEl.appendChild(headerEl);

const headerTextEl = document.createElement('h1');
headerTextEl.textContent = "TodoList";
headerTextEl.style = "display: inline-block; margin: 1rem auto; color: black";
headerEl.appendChild(headerTextEl);



const listEl = document.createElement('ul');
listEl.style = 'list-style: none; padding: 0; margin: 0;';
rootEl.appendChild(listEl);

const errorEl = document.createElement('div');
errorEl.style = 'list-style: none; color: red; margin: 10px; text-align: center;';
rootEl.insertBefore(errorEl, rootEl.lastChild);

const formEl = document.createElement('form');
formEl.style = 'display: flex; background-color: #fafafa; border-top: 1px solid rgba(0,0,0,.1); padding: 10px;'
rootEl.appendChild(formEl);

const nameContainerEl = document.createElement('div');
formEl.appendChild(nameContainerEl);

const nameLabelEl = document.createElement('label');
nameLabelEl.textContent = 'Название';
nameLabelEl.htmlFor = 'name-input';
nameLabelEl.style = 'padding: .5em;';
nameContainerEl.appendChild(nameLabelEl);

const nameInputEl = document.createElement('input');
nameInputEl.id = 'name-input';
nameInputEl.style = 'width: 450px; padding: .5em; border-radius: 2px; font-size: 1rem;';
nameContainerEl.appendChild(nameInputEl);

const addButtonEl = document.createElement('button');
addButtonEl.textContent = 'Добавить';
addButtonEl.style = 'padding: .5em; margin: .5em;';
nameContainerEl.appendChild(addButtonEl);

let wishes = [];

formEl.onsubmit = evt => {
    evt.preventDefault();

    errorEl.textContent = '';
    let error = null;

    const name = nameInputEl.value.trim();
    if (name === '') {
        error = 'Заполните поле Название';
        errorEl.textContent = error;
        nameInputEl.focus();
        return;
    }
    if (name.length >= 55) {
        error = 'Поля Название не должно быть 50 символов!';
        errorEl.textContent = error;
        nameInputEl.focus();
        return;
    }

    const wish = { name, };
    wishes.unshift(wish);

    formEl.reset();

    const rowLiEl = document.createElement('li');
    rowLiEl.style = 'margin: 12px; padding: 5px; color: black; font-size: 1rem;';
    rowLiEl.textContent = `Название ${wish.name}`;
    listEl.insertBefore(rowLiEl, listEl.firstChild);

    const removeEl = document.createElement('button');
    removeEl.style = 'padding: 5px; margin-left: auto;';
    removeEl.textContent = 'Удалить';
    removeEl.onclick = () => {
        listEl.removeChild(rowLiEl);
        wishes = wishes.filter(o => o !== wish);
    };
    rowLiEl.appendChild(removeEl);
};