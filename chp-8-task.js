let inputs = document.querySelectorAll('input');

let modAnsEl = document.querySelector('.mod-ans');
let addAnsEl = document.querySelector('.add-ans');
let subAnsEl = document.querySelector('.sub-ans');
let mulAnsEl = document.querySelector('.mul-ans');

let modResetBtn = document.querySelector('.mod-reset-btn');
let addResetBtn = document.querySelector('.add-reset-btn');
let subResetBtn = document.querySelector('.sub-reset-btn');
let mulResetBtn = document.querySelector('.mul-reset-btn');

const modulus = () => {
    let num1 = inputs[0].value;
    let num2 = inputs[1].value;

    modAnsEl.innerHTML = num1 % num2;

    modResetBtn.onclick = () => {
        inputs[0].value = "";
        inputs[1].value = "";
        modAnsEl.innerHTML = "?";
    }
}

const addition = () => {
    let num1 = +inputs[2].value;
    let num2 = +inputs[3].value;

    addAnsEl.innerHTML = num1 + num2;

    addResetBtn.onclick = () => {
        inputs[2].value = "";
        inputs[3].value = "";
        addAnsEl.innerHTML = "?";
    }
}

const subtraction = () => {
    let num1 = inputs[4].value;
    let num2 = inputs[5].value;

    subAnsEl.innerHTML = num1 - num2;

    subResetBtn.onclick = () => {
        inputs[4].value = "";
        inputs[5].value = "";
        subAnsEl.innerHTML = "?";
    }
}

const multiplication = () => {
    let num1 = inputs[6].value;
    let num2 = inputs[7].value;

    mulAnsEl.innerHTML = num1 * num2;

    mulResetBtn.onclick = () => {
        inputs[6].value = "";
        inputs[7].value = "";
        mulAnsEl.innerHTML = "?";
    }
}