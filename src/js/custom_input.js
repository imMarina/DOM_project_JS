const ROOT = document.querySelector('#root');

const myInput = ROOT.querySelector('.my-input');
const input = myInput.querySelector('#input');
const customInput = myInput.querySelector('.custom-input');
const textInput = customInput.querySelector('.text-input');

customInput.addEventListener('click', () => {
    // При клике направить фокус на скрытый <input>
    input.focus();
});

input.addEventListener('input', (event) => {
    // Отображение текста из скрытого <input> на custom input
    textInput.textContent = event.target.value;
    // console.log(event.target.value);
});

// Событие focus вызывается в момент фокусировки.
input.addEventListener('focus', () => {
    textInput.classList.add('focused');
});

// Событие blur вызывается когда элемент теряет фокус.
input.addEventListener('blur', () => {
    textInput.classList.remove('focused');
});