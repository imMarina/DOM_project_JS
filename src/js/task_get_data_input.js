
import backgroundImg from '../static/images/Background_Input.jpg'

const root = document.querySelector('#root');
const divContainer = root.querySelector('.container')

// Adding CSS to bg-image 
divContainer.style.backgroundImage = `url('${backgroundImg}')`;
divContainer.style.backgroundRepeat = 'no-repeat';
divContainer.style.backgroundSize = 'cover';
divContainer.style.backgroundPosition = 'center';

// const bgImgTPL = `<img src='${backgroundImg}'`;
// root.innerHTML = bgImgTPL;


const inputs = [
    {
        id: 1,
        type: 'text',
    },
    {
        id: 2,
        type: 'number',
    },
    {
        id: 3,
        type: 'password',
        text: " must be at least 6 characters, contain 1 uppercase, 1 lowercase, 1 number", 
        regExp: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g,
    },
    {
        id: 4,
        type: 'email',
        text: " must contain the '@' symbol and the domain name", 
        regExp: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
    },
    {
        id: 5,
        type: 'color',
    },
    {
        id: 6,
        type: 'date',
    },
    {
        id: 7,
        type: 'range',
    },
    {
        id: 8,
        type: 'checkbox',
    },
]


inputs.forEach( (input) => {
    
    const formElem = document.createElement('form');
    formElem.classList.add('form');

    const inputFormTPL = `
            <label for="input-${input.id}">Input Type <b>${input.type}</b></label>
            <div class="div-input">
                <input type="${input.type}" id="input-${input.id}" name="${input.input}"> 
                <button type="button" class="btn-${input.id}">Confirm</button>
            </div>
            <p class="out out-${input.id}"></p>
            <hr />
        `;
    formElem.insertAdjacentHTML('beforeend', inputFormTPL);
    divContainer.append(formElem);

    const inputElem = formElem.querySelector(`#input-${input.id}`);
    const btn = formElem.querySelector(`.btn-${input.id}`);
    const result = formElem.querySelector(`.out-${input.id}`);

    // extra element + text
    if (input.text) {
        const TPL = `<div class='div-text'><b>${input.type} </b>${input.text}</div>`;
        formElem.insertAdjacentHTML('afterbegin', TPL);
        } 
        
    // btn.addEventListener
    if (input.regExp) {
        btn.addEventListener("click", () => {
            const data = inputElem.value;

            if (data.match(input.regExp)) {
                result.textContent = data;
                inputElem.value = '';
            } else {
                result.textContent = `Your ${input.type} is wrong, please try again!`;
                inputElem.value = '';
            }
        });

    } else if (input.type === 'checkbox') {

            btn.addEventListener("click", () => {
                if (inputElem.checked) {
                    inputElem.checked = false;
                    result.textContent = 'off';
                }
                else {
                    inputElem.checked = true;
                    result.textContent = 'on';
                }
            });

    } else {
        btn.addEventListener("click", () => {
            const data = inputElem.value;
            if (data) {
                result.textContent = data;
                inputElem.value = '';
            } 
        });
    }
}); 