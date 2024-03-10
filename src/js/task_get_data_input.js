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
        function: () => {},
    },
    {
        id: 2,
        type: 'number',
        function: () => {},
    },
    {
        id: 3,
        type: 'color',
        function: () => {},
    },
    {
        id: 4,
        type: 'date',
        function: () => {},
    },
    {
        id: 5,
        type: 'range',
        function: () => {},
    },
    {
        id: 6,
        type: 'password',
        function: () => {},
    },
    {
        id: 7,
        type: 'email',
        function: () => {},
    },
    {
        id: 8,
        type: 'checkbox',
        function: () => {},
    },
]


inputs.forEach( (input) => {

    const formElem = document.createElement('form');
    formElem.classList.add('form');
    
    const inputFormTPL = `
        <label for="input-${input.id}">Input Type <b>${input.type}</b></label>
        <div class="div-input">
            <input type="${input.type}" id="input-${input.id}"> 
            <button type="button" class="btn-${input.id}">Confirm</button>
        </div>
        <p class="out out-${input.id}"></p>
    `;


    formElem.insertAdjacentHTML('beforeend', inputFormTPL);
    divContainer.append(formElem);

    const inputElem = formElem.querySelector(`#input-${input.id}`);
    const btn = formElem.querySelector(`.btn-${input.id}`);
    const result = formElem.querySelector(`.out-${input.id}`);


    btn.addEventListener("click", () => {

        const data = inputElem.value;

        if (data) {
            result.textContent = data;
            inputElem.value = '';
        } 

        result.textContent = data;
    });
});

