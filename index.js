document.addEventListener('DOMContentLoaded', function () {
    console.clear();
    // ваш код поместить тут


    //? 1. Создать функцию которая принимает два. Функция проверяет является ли первый элемент родителям для второго элемента isParent(parent, child) => true || false

    const parent = document.querySelector('article');
    const child = parent.firstChild;

    const isParent = (parent, child) =>  console.log(child.parentElement === parent);
    // isParent(parent, child);


    //? 2. Найти элемент который находится перед списком ul

    const ul = document.querySelector('ul');
    const prevUl = ul.previousElementSibling;
    // console.log(prevUl);

    //? 3. Найти параграф и получить его текстовые содержимое

    const p = document.querySelector('p');
    const pText = p.innerText
    // console.log(pText);

    //? 4. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию виде объекта о типе узла, имени узла и количестве дочерних узлов.

    const node = document.querySelector('ul');
    console.log(ul.nodeName);



    // console.log(3);
    
});







//? 4. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию виде объекта о типе узла, имени узла и количестве дочерних узлов.

//? 5. Найти список и добавить ему класс "list"