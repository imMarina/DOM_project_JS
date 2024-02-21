// DOM

// Навигация по документу 
const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;
// console.log(htmlElement); // <html></html> 
// console.log(headElement); // <head></head>
// console.log(bodyElement); // <body></body>


// Получаем первые и последние элементы объекта body
const firstChildNode = bodyElement.firstChild;
const lastChildNode = bodyElement.lastChild;
// console.log(firstChildNode); // #text (текстовый узел или символ перевода строки data: "\n    \n    ")
// console.log(lastChildNode); // <script src="./script.js"></script>


// Коллекция childNodes содержит список всех детейб включая текстовые узлы
const childNodes = bodyElement.childNodes;
// console.log(childNodes); 
// NodeList(4) [text, section.methods, text, script]
// 0: text
// 1: section.methods
// 2: text
// 3: script
// 4: text
// 5: comment
// 6: text
// 7: script
// 8: text
// length: 9
// [[Prototype]]: NodeList

// Для проверки наличия дочерних узлов существует также специальная функция hasChildNodes
console.log(bodyElement.hasChildNodes()); // true

// Коллекция childNodes - это особый перебираемый объект - псевдомассив
// В childNodes находятся и текстовые узлы, и узлы-элементы, и узлы-комментарии, если они есть.
// Отличия от массивов:
// 1. Для перебора коллекции мы можем использовать for..of
// 2. Методы массивов не будут работать, потому что коллекция - это не массив.

// Перебор коллекции
for (let node of childNodes) {
    // console.log(node);
    // #text:
    // <section class=​"methods">​<h2>​Методы NodeList​</h2>​<div class=​"methods-content">​…​</div>​</section>​
    // #text 
    // <script src=​"./​script.js">​</script>​
}


// Соседние и родительские узлы
const previousSiblingNode = bodyElement.previousSibling;
const nextSiblingNode = bodyElement.nextSibling;
const parentNode = bodyElement.parentNode;
// console.log(previousSiblingNode); // #text
// console.log(nextSiblingNode); // null
// console.log(parentNode); // <html lang=​"ru">​<head>​…​</head>​<body>​…​</body>​</html>​


// Узлы-элементы представляют собой теги, которые формируют структуру страницы.
// Получаем коллекцию всех дочерних элементов
const bodyChildren = bodyElement.children;
// console.log(bodyChildren); 
// HTMLCollection(2) [section.methods, script]
// 0: section.methods
// 1: script
// 2: script
// length: 3
// [[Prototype]]: HTMLCollection
