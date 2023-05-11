let socket = io();
let messages = document.querySelector('section ul');
let inputText = document.querySelector('input#message');
let inputName = document.querySelector('input#name');
let send = document.querySelector('button#send');
let typingState = document.querySelector('p');

// send text
document.querySelector('form.message').addEventListener('submit', event => {
    event.preventDefault()
    let data = { name: inputName.value, message: inputText.value }
    // console.log(inputText.value)
    socket.emit('chat', data);
    // console.log(inputName.value, inputText.value);
    inputText.value = '';
})

inputText.addEventListener('keypress', () => {
    socket.emit('typing', inputName.value)
})

socket.on('history', (history) => {
    history.forEach((data) => {
        addMessage(data)
    })
})

socket.on('chat', (data) => {
    let li = document.createElement('li');
    li.textContent = data.name + ': ' + data.message;

    // Check if the message is sent by the user
    if (data.name === inputName.value) {
        li.classList.add('current-user');
    }

    messages.appendChild(li);
    typingState.innerHTML = "";
    messages.scrollTop = messages.scrollHeight
})

socket.on('typing', (inputName) => {
    // console.log(inputName);
    typingState.innerHTML = (inputName + " is aan het typen...")
    setTimeout(() => {
        typingState.innerHTML = "";
    }, 3000);
})

function addMessage(data) {
    messages.appendChild(Object.assign(document.createElement('li'), { textContent: data.name + ': ' + data.message }))
    messages.scrollTop = messages.scrollHeight
}

const popup = document.querySelector('.emoji-popup');
const emojiBtn = document.querySelector('#emoji-btn');
const closeBtn = document.querySelector('#close-popup');

var isDialogSupported = true;
if (!window.HTMLDialogElement) {
    document.body.classList.add("no-dialog");
    isDialogSupported = false;
}

emojiBtn.addEventListener('click', () => {
    console.log('open popup')
    if (isDialogSupported) {
        modal.showModal();
        // console.log('show modal')
    }
    //   Focus first input when dialog opens
    modal.querySelector("input").focus();
});

closeBtn.addEventListener('click', () => {
    // console.log('close popup')
    if (isDialogSupported) {
        modal.close();
    }
});

modal.addEventListener("transitionend", e => {
    modal.querySelector("input").focus();
});

const dialog = document.querySelector('#modal');

dialog.addEventListener('focusin', trapFocus);
dialog.addEventListener('focusout', trapFocus);

function trapFocus(event) {
    console.log('trap focus')
    const dialogElements = dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstElement = dialogElements[0];
    const lastElement = dialogElements[dialogElements.length - 1];
    const bodylanguage = document.querySelector('#bodylanguage input:last-of-type');
    // console.log(event.target)

    if (document.activeElement === closeBtn) {
        event.preventDefault();
        // console.log('close is focused')
        closeBtn.addEventListener('keydown', (event) => {
            if (event.key === 'Shift') {
                // console.log('shift tab pressed')
                bodylanguage.focus();
                event.preventDefault();
            } else if (event.key === 'Tab') {
                // console.log('tab pressed')
                firstElement.focus();
                event.preventDefault();
            }
        })
    }
    if (document.activeElement === firstElement) {
        event.preventDefault();
        // console.log('first element is focused')
        firstElement.addEventListener('keydown', (event) => {
            if (event.key === 'Shift') {
                // console.log('shift tab pressed')
                closeBtn.focus();
                event.preventDefault();
            }
        });
    }
}

// let inputaddBrows = document.querySelector('label[for="addbrows"] input#addbrows');
// let inputBrows = document.querySelectorAll('input[name="brows"]');

// console.log(inputaddBrows, inputBrows)

// inputBrows.forEach((input) => {
//     input.addEventListener('change', () => {
//         if (input.checked) {
//             inputaddBrows.checked = true;
//             console.log('checked')
//         }
//     })
// });

// let inputaddBodylanguage = document.querySelector('label[for="addbodylanguage"] input#addbodylanguage');
// let inputBodylanguage = document.querySelectorAll('input[name="bodylanguage"]');

// console.log(inputaddBodylanguage, inputBodylanguage)

// inputBodylanguage.forEach((input) => {
//     input.addEventListener('change', () => {
//         if (input.checked) {
//             inputaddBodylanguage.checked = true;
//             console.log('checked')
//         }
//     })
// });

const brows = document.querySelector('.face .brows');
const eyes = document.querySelector('.face .eyes');
const mouth = document.querySelector('.face .mouth');
const bodylanguage1 = document.querySelector('.emoji .bodylanguage');
console.log(bodylanguage1)

const inputEyes1 = document.querySelector('input#eyes1');
const inputEyes2 = document.querySelector('input#eyes2');
const inputEyes3 = document.querySelector('input#eyes3');
const inputEyes4 = document.querySelector('input#eyes4');

const inputMouth1 = document.querySelector('input#mouth1');
const inputMouth2 = document.querySelector('input#mouth2');
const inputMouth3 = document.querySelector('input#mouth3');
const inputMouth4 = document.querySelector('input#mouth4');

const inputBrows1 = document.querySelector('input#brows1');
const inputBrows2 = document.querySelector('input#brows2');
const inputBrows3 = document.querySelector('input#brows3');

const inputBodylanguage1 = document.querySelector('input#bodylanguage1');
const inputBodylanguage2 = document.querySelector('input#bodylanguage2');
const inputBodylanguage3 = document.querySelector('input#bodylanguage3');
const inputBodylanguage4 = document.querySelector('input#bodylanguage4');
const inputBodylanguage5 = document.querySelector('input#bodylanguage5');

inputEyes1.addEventListener('change', () => {
    eyes.classList.remove('eyes2', 'eyes3', 'eyes4');
    eyes.classList.add('eyes1');
    eyes.innerHTML = '<img src="img/eyes1.png" alt="eyes" class="eyes1">';
});

inputEyes2.addEventListener('change', () => {
    eyes.classList.remove('eyes1', 'eyes3', 'eyes4');
    eyes.classList.add('eyes2');
    eyes.innerHTML = '<img src="img/eyes2.png" alt="eyes" class="eyes2">';
});

inputEyes3.addEventListener('change', () => {
    eyes.classList.remove('eyes1', 'eyes2', 'eyes4');
    eyes.classList.add('eyes3');
    eyes.innerHTML = '<img src="img/eyes3.png" alt="eyes" class="eyes3">';
});

inputEyes4.addEventListener('change', () => {
    eyes.classList.remove('eyes1', 'eyes2', 'eyes3');
    eyes.classList.add('eyes4');
    eyes.innerHTML = '<img src="img/eyes4.png" alt="eyes" class="eyes4">';
});

inputMouth1.addEventListener('change', () => {
    mouth.classList.remove('mouth2', 'mouth3', 'mouth4');
    mouth.classList.add('mouth1');
    mouth.innerHTML = '<img src="img/mouth1.png" alt="mouth" class="mouth1">';
});

inputMouth2.addEventListener('change', () => {
    mouth.classList.remove('mouth1', 'mouth3', 'mouth4');
    mouth.classList.add('mouth2');
    mouth.innerHTML = '<img src="img/mouth2.png" alt="mouth" class="mouth2">';
});

inputMouth3.addEventListener('change', () => {
    mouth.classList.remove('mouth1', 'mouth2', 'mouth4');
    mouth.classList.add('mouth3');
    mouth.innerHTML = '<img src="img/mouth3.png" alt="mouth" class="mouth3">';
});

inputMouth4.addEventListener('change', () => {
    mouth.classList.remove('mouth1', 'mouth2', 'mouth3');
    mouth.classList.add('mouth4');
    mouth.innerHTML = '<img src="img/mouth4.png" alt="mouth" class="mouth4">';
});

inputBrows1.addEventListener('change', () => {
    brows.classList.remove('brows2', 'brows3');
    brows.classList.add('brows1');
    brows.innerHTML = '<img src="img/brows1.png" alt="brows" class="brows1">';
});

inputBrows2.addEventListener('change', () => {
    brows.classList.remove('brows1', 'brows3');
    brows.classList.add('brows2');
    brows.innerHTML = '<img src="img/brows2.png" alt="brows" class="brows2">';
});

inputBrows3.addEventListener('change', () => {
    brows.classList.remove('brows1', 'brows2');
    brows.classList.add('brows3');
    brows.innerHTML = '<img src="img/brows3.png" alt="brows" class="brows3">';
});

inputBodylanguage1.addEventListener('change', () => {
    bodylanguage1.classList.remove('bodylanguage2', 'bodylanguage3', 'bodylanguage4', 'bodylanguage5');
    bodylanguage1.classList.add('bodylanguage1');
    console.log('bodylanguage1');
    bodylanguage1.innerHTML = '<img src="img/bodylanguage1.png" alt="bodylanguage" class="bodylanguage1">';
});

inputBodylanguage2.addEventListener('change', () => {
    bodylanguage1.classList.remove('bodylanguage1', 'bodylanguage3', 'bodylanguage4', 'bodylanguage5');
    bodylanguage1.classList.add('bodylanguage2');
    bodylanguage1.innerHTML = '<img src="img/bodylanguage2.png" alt="bodylanguage" class="bodylanguage2">';
});

inputBodylanguage3.addEventListener('change', () => {
    bodylanguage1.classList.remove('bodylanguage1', 'bodylanguage2', 'bodylanguage4', 'bodylanguage5');
    bodylanguage1.classList.add('bodylanguage3');
    bodylanguage1.innerHTML = '<img src="img/bodylanguage3.png" alt="bodylanguage" class="bodylanguage3">';
});

inputBodylanguage4.addEventListener('change', () => {
    bodylanguage1.classList.remove('bodylanguage1', 'bodylanguage2', 'bodylanguage3', 'bodylanguage5');
    bodylanguage1.classList.add('bodylanguage4');
    bodylanguage1.innerHTML = '<img src="img/bodylanguage4.png" alt="bodylanguage" class="bodylanguage4">';
});

inputBodylanguage5.addEventListener('change', () => {
    bodylanguage1.classList.remove('bodylanguage1', 'bodylanguage2', 'bodylanguage3', 'bodylanguage4');
    bodylanguage1.classList.add('bodylanguage5');
    console.log('bodylanguage5')
    bodylanguage1.innerHTML = '<img src="img/bodylanguage5.png" alt="bodylanguage" class="bodylanguage5">';
});