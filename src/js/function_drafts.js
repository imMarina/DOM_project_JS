
export const checkInputType = (typeIs) => {

    const arr = [
        {
            name: "password",
            text: " must be at least 6 characters, contain 1 uppercase, 1 lowercase, 1 number", 
            regExp: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g,
        },
        {
            name: "email",
            text: " must contain the '@' symbol and the domain name", 
            regExp: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
        },
    ];
    
    let TPL;
    const data = inputElem.value;
    let textResult = `Your ${typeIs} is wrong, please try again!`;
    
    switch (typeIs) {

        case 'password':
            // add tempLayout
            addTextElement(arr);
            
            btn.addEventListener("click", (ev) => {
                validationCheck(ev);
            });
            break;

        case 'email':
            addTextElement(arr);

            btn.addEventListener("click", (ev) => {
                validationCheck(ev);
            });
            break;
        
        default:
        console.log(`Sorry, we are out of ${expr}.`);
    }
    

    function addTextElement(array) {
        array.forEach( (obj) => {
            if (obj.name === typeIs) {
                TPL = `<div class='div-text'><b>${typeIs} </b>${obj.text}</div>`;
            }
            formElem.insertAdjacentHTML('afterbegin', TPL);
        });
    }
    
    function validationCheck(array) {
        array.forEach( (obj) => {
            if (data.match(obj.regExp)) {
                result.textContent = data;
                inputElem.value = '';
            } else {
                result.textContent = textResult;
                // result.textContent = '';
            }
        });
    }
} 

// function for password / email
const addExtraText = (typeIs) => {
    let text = '';

    if (typeIs === 'password') {
        text = " must be at least 6 characters, contain 1 uppercase, 1 lowercase, 1 number";
    } else if (typeIs === 'email') {
        text = " must contain the '@' symbol and the domain name";
    } 
    const TPL = `<div class='div-text'><b>${typeIs} </b>${text}</div>`;
    formElem.insertAdjacentHTML('afterbegin', TPL)
}


function validationCheck(regExp) {
    if (data.match(regExp)) {
        result.textContent = data;
        inputElem.value = '';
    } else {
        result.textContent = `Your ${input.type} is wrong, please try again!`;
        // result.textContent = '';
    }
}