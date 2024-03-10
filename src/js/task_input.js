
const ROOT = document.querySelector('#root');

const myInputTPL = `        
    <div class="input-container">
        <label for="input">Text</label>
        <input type="text" id="input" placeholder="Write your text">
        <button class='button' type="button">Send</button>
    </div>
`;

ROOT.insertAdjacentHTML('beforeend', myInputTPL);

const paragraph = document.createElement('p');
paragraph.classList.add('result');

// ROOT.append(paragraph);
ROOT.insertAdjacentElement('beforeend', paragraph);

const inputContainer = document.querySelector('.input-container');
const inputElem = inputContainer.querySelector('#input');
const btnElem = inputContainer.querySelector('.button');

// to block the button
btnElem.disabled = true;

btnElem.addEventListener('click', () => {
        // interaction with elem for text-result by already created element paragraph
    // less safety way of interaction 
    // paragraph.textContent = inputElem.value;

    // created elem for text-result across ROOT.querySelector('.result')
    // more safety code, better to find this element first 
    const resultElem = ROOT.querySelector('.result');

    if (inputElem.value) {
        resultElem.textContent = inputElem.value;
    }

    inputElem.value = '';
    btnElem.disabled = true;
});


// change
// inputElem.addEventListener('change', (event) => {
//     const resultElem = ROOT.querySelector('.result');
//     resultElem.textContent = event.target.value
// });


// input
inputElem.addEventListener('input', (event) => {
    // console.log(event.target.value);

    // checking the text inside input
    if (!event.target.value) {
        btnElem.disabled = true;
    } else {
        btnElem.disabled = false;
    }

    // const resultElem = ROOT.querySelector('.result');
    // resultElem.textContent = event.target.value;
});







