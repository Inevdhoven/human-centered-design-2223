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
    console.log(inputText.value)
    socket.emit('chat', data);
    console.log(inputName.value, inputText.value);
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
    console.log(inputName);
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

// emojiBtn.addEventListener('click', () => {
//     popup.classList.toggle('show');
// });

// closeBtn.addEventListener('click', () => {
//     console.log('close')
//     popup.classList.remove('show');
// });



var isDialogSupported = true;
if (!window.HTMLDialogElement) {
    document.body.classList.add("no-dialog");
    isDialogSupported = false;
}

emojiBtn.addEventListener('click', () => {
    console.log('open popup')
    if (isDialogSupported) {
        modal.showModal();
        console.log('show modal')
    }
    //   Focus first input when dialog opens
    modal.querySelector("input").focus();
});

closeBtn.addEventListener('click', () => {
    console.log('close popup')
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
    console.log(event.target)

    if (document.activeElement === closeBtn) {
        event.preventDefault();
        console.log('close is focused')
        closeBtn.addEventListener('keydown', (event) => {
            if (event.key === 'Shift') {
                console.log('shift tab pressed')
                bodylanguage.focus();
                event.preventDefault();
            } else if (event.key === 'Tab') {
                console.log('tab pressed')
                firstElement.focus();
                event.preventDefault();
            }
        })
    }
    if (document.activeElement === firstElement) {
        event.preventDefault();
        console.log('first element is focused')
        firstElement.addEventListener('keydown', (event) => {
            if (event.key === 'Shift') {
                console.log('shift tab pressed')
                closeBtn.focus();
                event.preventDefault();
            }
        });
    }
}

// function trapFocus(event) {
//     console.log('trap focus')
//     const dialogElements = dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
//     const firstElement = dialogElements[0];
//     const lastElement = dialogElements[dialogElements.length - 1];
//     const bodylanguage = document.querySelector('#bodylanguage input');

//     if (event.target === lastElement && !event.enterKey) {
//         // If focus is going out of the dialog from the last element, set it to the first element
//         console.log('focus last element')
//         closeBtn.focus();
//         event.preventDefault();
//     } else if (event.target === closeBtn && !event.enterKey) {
//         console.log('focus close button')
//         firstElement.focus();
//         event.preventDefault();
//     } else if (event.target === firstElement && event.enterKey) {
//         // If focus is going out of the dialog from the first element, set it to the last element
//         console.log('focus first element')
//         lastElement.focus();
//         event.preventDefault();
//     }
// }


