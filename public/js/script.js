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

// const video = document.getElementById('video');
// const canvas = document.getElementById('canvas');
// const snap = document.getElementById('snap');
// const cameraBtn = document.getElementById('camera-btn');
// const cameraContainer = document.getElementById('camera-container');

// const constraints = {
//     video: true
// };

// async function startCamera() {
//     try {
//         const stream = await navigator.mediaDevices.getUserMedia(constraints);
//         handleSuccess(stream);
//         cameraContainer.style.display = 'block';
//         video.classList.add('active'); // Voeg class "active" toe aan video
//         canvas.classList.add('active'); // Voeg class "active" toe aan canvas
//         cameraBtn.style.display = 'none';
//         video.play(); // Start het afspelen van de video
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

// // Voeg eventlistener toe aan video-element om afspelen te triggeren bij gebruikersinteractie
// video.addEventListener('click', function () {
//     video.play();
// });

// const video = document.getElementById('video');
// const canvas = document.getElementById('canvas');
// const snap = document.getElementById('snap');
// const uploadBtn = document.getElementById('upload-btn');
// const cameraContainer = document.getElementById('camera-container');
// const uploadUrl = "https://example.com/upload"; // URL om de afbeelding naar te uploaden

// const constraints = {
//     video: true
// };

// async function startCamera() {
//     try {
//         const stream = await navigator.mediaDevices.getUserMedia(constraints);
//         handleSuccess(stream);
//         cameraContainer.style.display = 'block';
//         video.classList.add('active');
//         canvas.classList.add('active');
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
//     uploadBtn.style.display = 'block';
// });

// uploadBtn.addEventListener("click", function () {
//     const imageData = canvas.toDataURL(); // Zet de afbeeldingdata om naar een DataURL
//     const xhr = new XMLHttpRequest(); // Maak een nieuwe XMLHttpRequest
//     xhr.open("POST", uploadUrl); // Stel de URL en methode in voor de upload
//     xhr.setRequestHeader("Content-Type", "application/json"); // Stel de content-type header in
//     xhr.send(JSON.stringify({ image: imageData })); // Verstuur de afbeeldingdata in een JSON object
// });

// // Open de camera als de pagina geladen is
// startCamera();


// Set constraints for the video stream
var constraints = { video: { facingMode: "user" }, audio: false };
// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger")
// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function (stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(function (error) {
            console.error("Oops. Something is broken.", error);
        });
}
// Take a picture when cameraTrigger is tapped
cameraTrigger.onclick = function () {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
};
// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);