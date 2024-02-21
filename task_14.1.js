
// Задача 14.1
// Найти все DOM-узлы html-разметки index.html.

const section = bodyElement.querySelector('.methods');
console.log(section); 

const sectionNodes = section.childNodes;
console.log(sectionNodes); 
// NodeList(5) [text, h2, text, div.methods-content, text]
// 0: text
// 1: h2
// 2: text
// 3: div.methods-content
// 4: text
// length: 5
// [[Prototype]]: NodeList

const sectionElements = section.children;
console.log(sectionElements); // h2, div.methods-content
// HTMLCollection(2) [h2, div.methods-content]
// 0: h2
// 1: div.methods-content
// length: 2
// [[Prototype]]: HTMLCollection


const h2 = section.querySelector('h2');
// console.log(h2); // <h2>Методы NodeList</h2>
// console.log(h2.textContent); // Методы NodeList

const divMain = section.querySelector('.methods-content');
// console.log(divMain); // <h2>Методы NodeList</h2>
// console.log(divMain.children); 
// HTMLCollection(5) [div#item_index, div#entries, div#foreach, div#keys, div#values, item_index: div#item_index, entries: div#entries, foreach: div#foreach, keys: div#keys, values: div#values]

const divMethods = divMain.querySelectorAll('div');
// console.log(divMethods); 
// NodeList(5) [div#item_index, div#entries, div#foreach, div#keys, div#values]
// 0: div#item_index
// 1: div#entries
// 2: div#foreach
// 3: div#keys
// 4: div#values
// length: 5
// [[Prototype]]: NodeList