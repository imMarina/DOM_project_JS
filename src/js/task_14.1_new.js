
const section = document.querySelector('section');
// console.log(section); // <section class="methods">...</section>

const title = section.querySelector('h2');
// console.log(title); // <h2>Методы NodeList</h2>
// console.log(title.textContent); // Методы NodeList

const divMain = section.querySelector('.methods-content');
// console.log(divMain); // <div class="methods-content">...</div>

const methods = [];

const divElements = divMain.querySelectorAll('div');
// console.log(divElements); // NodeList(5) [div#item_index, div#entries, div#foreach, div#keys, div#values]

divElements.forEach( (div) => {

    const obj = {
        id: div.getAttribute('id'),
        firstChild: div.firstElementChild,
        lastChild: div.lastElementChild,
    };

    methods.push(obj);
});

console.log(methods);

// (5) [{…}, {…}, {…}, {…}, {…}]
// 0: {id: 'item_index', firstChild: h4, lastChild: p}
// 1: {id: 'entries', firstChild: h4, lastChild: p}
// 2: {id: 'foreach', firstChild: h4, lastChild: p}
// 3: {id: 'keys', firstChild: h4, lastChild: p}
// 4: {id: 'values', firstChild: h4, lastChild: p}
// length: 5 [[Prototype]]: Array(0)

// [
//     {
//         "id": "item_index",
//         "firstChild": {},
//         "lastChild": {}
//     },
//     {
//         "id": "entries",
//         "firstChild": {},
//         "lastChild": {}
//     },
//     {
//         "id": "foreach",
//         "firstChild": {},
//         "lastChild": {}
//     },
//     {
//         "id": "keys",
//         "firstChild": {},
//         "lastChild": {}
//     },
//     {
//         "id": "values",
//         "firstChild": {},
//         "lastChild": {}
//     }
// ]
