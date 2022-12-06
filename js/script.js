
/* 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
*/
const superLinkEl = document.getElementById('super_link');
console.log(superLinkEl);

/* 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
 */

const cardLinkEl = document.querySelectorAll('.card-link');
console.log(cardLinkEl);
cardLinkEl.forEach(element => {
    element.textContent = 'ссылка';
});

/*3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body", и вывести полученную коллекцию в консоль.
*/

const cardBodyEl = document.querySelector('.card-body');
const cardLinkEl1 = cardBodyEl.querySelectorAll('.card-link');
console.log(cardLinkEl1);


/*4. Найти первый попавшийся элемент на странице, у которого есть атрибут data-number со значением 50 и вывести его в консоль.
*/

const dataNumberEl = document.querySelector('[data-number="50" ');
console.log(dataNumberEl);

/*5. Выведите содержимое тега title в консоль.
*/

const tegTitleEl = document.querySelector('title');
console.log(tegTitleEl.textContent);

/*6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
*/

const cardTitleEl = document.querySelector('.card-title');
console.log(cardTitleEl.parentElement);

/*7. Создайте тег p, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
*/

const pEl = document.createElement('p');
pEl.textContent = 'Привет';
const cardEl = document.querySelector('.card');
cardEl.prepend(pEl);

/* 8. Удалите тег h6 на странице.
*/
const h6El = document.querySelector('h6');
const parentH6El = h6El.parentElement;
parentH6El.removeChild(h6El);
