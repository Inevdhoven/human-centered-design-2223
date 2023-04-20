let socket = io();
let messages = document.querySelector('section ul');
let inputText = document.querySelector('input#message');
let inputName = document.querySelector('input#name');
let send = document.querySelector('button#send');
let typingState = document.querySelector('p');

// send text
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault()
    let data = { name: inputName.value, message: inputText.value }
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

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById('snap');
const cameraBtn = document.getElementById('camera-btn');
const cameraContainer = document.getElementById('camera-container');

async function startCamera() {
    try {
        const constraints = {
            video: {
                facingMode: 'environment' // Gebruik "user" om de frontcamera te gebruiken
            }
        };
        const stream = await navigator.mediaDevices.getUserMedia(constraints); // Vraag toestemming voor de camera
        handleSuccess(stream); // Als de gebruiker toestemming geeft, start de camera
        cameraContainer.style.display = 'block'; // Laat de camera zien
        cameraBtn.style.display = 'none'; // Verberg de knop om de camera te starten
    } catch (e) {
        console.error('Error: ', e);
    }
}

function handleSuccess(stream) {
    window.stream = stream; // Zorg ervoor dat de stream beschikbaar is in de console
    video.srcObject = stream; // Laat de video zien
}

snap.addEventListener("click", function () {
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height); // Maak een foto van de video
});

cameraBtn.addEventListener("click", function () {
    startCamera(); // Start de camera
});

// Pas de grootte van de video- en canvas-elementen aan op basis van het apparaat
function adjustVideoSize() {
    const videoRatio = video.videoWidth / video.videoHeight;
    const containerWidth = cameraContainer.offsetWidth;
    const containerHeight = cameraContainer.offsetHeight;
    const containerRatio = containerWidth / containerHeight;

    if (videoRatio > containerRatio) {
        video.width = containerWidth;
        video.height = containerWidth / videoRatio;
    } else {
        video.width = containerHeight * videoRatio;
        video.height = containerHeight;
    }
    canvas.width = video.width;
    canvas.height = video.height;
}

// Voer de aanpassing van de video- en canvas-grootte uit bij het laden van de pagina en bij het draaien van het apparaat
adjustVideoSize();
window.addEventListener('resize', adjustVideoSize);
window.addEventListener('orientationchange', adjustVideoSize);

// const constraints = {
//     video: true
// };

// async function startCamera() {
//     try {
//         const stream = await navigator.mediaDevices.getUserMedia(constraints);
//         handleSuccess(stream);
//         cameraContainer.style.display = 'block';
//         cameraBtn.style.display = 'none';
//     } catch (e) {
//         console.error('Error: ', e);
//     }
// }

// function handleSuccess(stream) {
//     window.stream = stream;
//     video.srcObject = stream;
// }

// snap.addEventListener("click", function () {
//     canvas.getContext("2d").drawImage(video, 0, 0, 640, 480);
// });

// cameraBtn.addEventListener("click", function () {
//     startCamera();
// });