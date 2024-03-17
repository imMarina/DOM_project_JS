// RADIO button
import backgroundImg from '../static/images/Background_Input.jpg'

const root = document.querySelector('#root');
const divContainer = root.querySelector('.container')

// Adding CSS to bg-image 
divContainer.style.backgroundImage = `url('${backgroundImg}')`;
divContainer.style.backgroundRepeat = 'no-repeat';
divContainer.style.backgroundSize = 'cover';
divContainer.style.backgroundPosition = 'center';


const forms = [
    {
        id: 1,
        type: 'radio',
        TPL:  `<p>Input Type <b>Radio</b></p>
        <div class="div-input">
            <input type="radio" class="input-1" id="gender1" name="gender" value="male" checked />
            <label for="gender1">Male</label>
            <input type="radio" class="input-1" id="gender2" name="gender" value="female" />
            <label for="gender2">Female</label>
            <button class="btn" type="button">Confirm</button>
        </div>
        <p class="out"></p>`,
    },
    {
        id: 2,
        type: 'select',
        TPL:  `
        <p><b>Select</b> the city</p>
        <div class="div-input">
            <select class="select-2">
                <option value="Moscow">Moscow</option>
                <option value="Tokio">Tokio</option>
                <option value="Milan">Milan</option>
                <option value="New York">New York</option>
            </select>
            <button class="btn" type="button">Confirm</button>
        </div>
        <p class="out"></p>
`,
    },
    {
        id: 3,
        type: 'textarea',
        TPL: `
        <p><b>Textarea</b></p>
        <div class="div-input">
            <textarea class="textarea-3" cols="30" rows="5"></textarea>
            <button class="btn" type="button">Confirm</button>
        </div>
        <p class="out"></p>
`,
    },
]


forms.forEach( (form) => {

    const formElem = document.createElement('form');
    formElem.classList.add('form');

    // Add HTML elements by ${form.TPL}
    formElem.insertAdjacentHTML('beforeend', `${form.TPL}`);
    divContainer.append(formElem);

    const btn = formElem.querySelector(`.btn`);
    const result = formElem.querySelector(`.out`);

    if (form.type === 'radio') {
        btn.addEventListener('click', () => {
            const radioCollection = document.querySelectorAll(`.input-${form.id}`);
            let data;
            for (let radio of radioCollection) {
                if (radio.checked) {
                    data = radio.value;
                    break;
                }
            }
            result.textContent = data;
        });
    } else {
        btn.addEventListener('click', () => {
            const element = document.querySelector(`.${form.type}-${form.id}`);
            const data = element.value;
            if (data) {
                result.textContent = data;
                element.value = '';
            } 
        });
    }

});

