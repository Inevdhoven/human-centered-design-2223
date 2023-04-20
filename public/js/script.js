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


// Set constraints for the video stream
var constraints = { video: { facingMode: "user" }, audio: false };
// Define constants
const cameraBtn = document.querySelector('#camera-btn');
const camera = document.querySelector('#camera');
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
            camera.classList.add("active");
            cameraView.srcObject = stream;
            cameraView.play();
            cameraView.classList.add("active");
            cameraTrigger.classList.add("active");
        })
        .catch(function (error) {
            console.error("Oops. Something is broken.", error);
        });
}

cameraBtn.addEventListener("click", function () {
    cameraBtn.style.display = "none";
    cameraStart();
});

// Take a picture when cameraTrigger is tapped
cameraTrigger.addEventListener("click", function () {
    cameraOutput.classList.add("active");
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");

    // send the image to the server
    socket.emit('image', {
        name: inputName.value,
        image: cameraOutput.src
    });
});

socket.on('image', (data) => {
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = data.image;
    li.appendChild(img);
    li.innerHTML += data.name;

    // Check if the message is sent by the user
    if (data.name === inputName.value) {
        li.classList.add('current-user');
    }

    messages.appendChild(li);
    typingState.innerHTML = "";
    messages.scrollTop = messages.scrollHeight
});
