// DOM создание «живых» страниц. drafts
// lesson with Sasha

const page = document.querySelector('#page');

// Создание элемента через innerHTML
// page.innerHTML = '<p>Project <b>DOM JS</b></p>';
// page.textContent = ''<p>Project <b>DOM JS</b></p>'';

// Создание элемента с помощью .createElement('')
const title = document.createElement('p');
title.innerHTML = 'Project <b>DOM JS</b>';

// Затирание содержимого page
// page.innerHTML = '';

// Удаление предыдущего элемента
// const testParagraph = page.querySelector('.test');
// testParagraph.remove();

// Удаление предыдущего элемента с помощью firstElementChild
while (page.firstElementChild) {
    page.firstElementChild.remove();
}

// Добавление нового элемента в DOM дерево
page.append(title);


// Create wrapper DIV by createElement() and append()
// output
// <div class="testImg">
//      <h2 style="color: red;">Title: Image Background</h2>
//      <p style="color: white; font-size: 30px;">Paragraph: Image Background</p>
//  </div> 

const div = document.createElement('div'); 
div.classList.add('testImg');

const h2 = document.createElement('h2');
h2.textContent = 'Title: Image Background';
h2.style.color = 'red';

const p = document.createElement('p');
p.textContent = 'Paragraph: Image Background';
p.style.color = 'white';
p.style.fontSize = '30px';

div.append(h2, p);
page.append(div);


// когда нужно внедрить готовый фрагмент верстки
// более оптимизированный вариант .createDocumentFragment();
// const wrapper = document.createDocumentFragment();
// wrapper.append(h2, p);
// page.append(wrapper);


// не совсем надежный вариант частого использования innerHTML
// лучше использовать insertAdjacentHTML

// insertAdjacentHTML/Text/Element
// elem.insertAdjacentHTML(where, html).

const TPL = `
<div class="testImg2">
    <h3 style="color: red;">Title</h3>
    <p style="color: blue;">Paragraph</p>
</div> 
`;

page.insertAdjacentHTML('beforeend', TPL);


// https://learn.javascript.ru/modifying-document#insertadjacenthtml-text-element
// Создание элемента

// DOM-узел можно создать двумя методами:

// document.createElement(tag) // Создаёт новый элемент с заданным тегом:
let span = document.createElement('span');

// document.createTextNode(text) // Создаёт новый текстовый узел с заданным текстом:
let textNode = document.createTextNode('А вот и я');


// Методы вставки
// Чтобы наш div появился, нам нужно вставить его где-нибудь в document. Например, в document.body.
// Для этого есть метод append, в нашем случае: document.body.append(div).

// node.append(...nodes or strings) – добавляет узлы или строки в конец node,
// node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
// node.before(...nodes or strings) –- вставляет узлы или строки до node,
// node.after(...nodes or strings) –- вставляет узлы или строки после node,
// node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками.

// elem.before('before'); // вставить строку "before" перед <elem>
// elem.after('after'); // вставить строку "after" после <elem>

// insertAdjacentHTML/Text/Element
// elem.insertAdjacentHTML(where, html).

/*
На практике часто используется только insertAdjacentHTML.
Потому что для элементов и текста у нас есть методы append/prepend/before/after – их быстрее написать,
и они могут вставлять как узлы, так и текст.
*/

// Первый параметр – это специальное слово, указывающее, куда по отношению к elem производить вставку. 
// Значение должно быть одним из следующих:

// "beforebegin" – вставить html непосредственно перед elem,
// "afterbegin" – вставить html в начало elem,
// "beforeend" – вставить html в конец elem,
// "afterend" – вставить html непосредственно после elem.

// У метода есть два брата:
// elem.insertAdjacentText(where, text) – такой же синтаксис, но строка text вставляется «как текст», вместо HTML,
// elem.insertAdjacentElement(where, elem) – такой же синтаксис, но вставляет элемент elem.

// Они существуют, в основном, чтобы унифицировать синтаксис. На практике часто используется только insertAdjacentHTML. Потому что для элементов и текста у нас есть методы append/prepend/before/after – их быстрее написать, и они могут вставлять как узлы, так и текст.


// Удаление узлов
// Для удаления узла есть методы node.remove().

const alertTest = document.createElement('div');
alertTest.className = "alert";
alertTest.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";

page.prepend(alertTest);
setTimeout(() => alertTest.remove(), 5000);

// Клонирование узлов: cloneNode
// Как вставить ещё одно подобное сообщение?
// Мы могли бы создать функцию и поместить код туда. Альтернатива – клонировать существующий div и изменить текст внутри него (при необходимости).
// Вызов elem.cloneNode(true) создаёт «глубокий» клон элемента – со всеми атрибутами и дочерними элементами. Если мы вызовем elem.cloneNode(false), тогда клон будет без дочерних элементов.


// DocumentFragment
// DocumentFragment является специальным DOM-узлом, который служит обёрткой для передачи списков узлов.


// Методы для создания узлов:

// document.createElement(tag) – создаёт элемент с заданным тегом,
// document.createTextNode(value) – создаёт текстовый узел (редко используется),
// elem.cloneNode(deep) – клонирует элемент, если deep==true, то со всеми дочерними элементами.
// Вставка и удаление:

// node.append(...nodes or strings) – вставляет в node в конец,
// node.prepend(...nodes or strings) – вставляет в node в начало,
// node.before(...nodes or strings) – вставляет прямо перед node,
// node.after(...nodes or strings) – вставляет сразу после node,
// node.replaceWith(...nodes or strings) – заменяет node.
// node.remove() – удаляет node.
// Устаревшие методы:

// parent.appendChild(node)
// parent.insertBefore(node, nextSibling)
// parent.removeChild(node)
// parent.replaceChild(newElem, node)
// Все эти методы возвращают node.

// Если нужно вставить фрагмент HTML, то elem.insertAdjacentHTML(where, html) вставляет в зависимости от where:

// "beforebegin" – вставляет html прямо перед elem,
// "afterbegin" – вставляет html в elem в начало,
// "beforeend" – вставляет html в elem в конец,
// "afterend" – вставляет html сразу после elem.
// Также существуют похожие методы elem.insertAdjacentText и elem.insertAdjacentElement, они вставляют текстовые строки и элементы, но они редко используются.

// Чтобы добавить HTML на страницу до завершения её загрузки:

// document.write(html)
// После загрузки страницы такой вызов затирает документ. В основном встречается в старых скриптах.