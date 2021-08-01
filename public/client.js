// var io = io("http://localhost:3000")


const socket = io()


let name = 'lok';
let message_area = document.querySelector('.message_area')
let textarea = document.querySelector('#text_area')

do {
    name = prompt('Enter your name')
} while (!name);



socket.on('database-message', (msg) => {
    msg.forEach(data => {
        appendMessage(data, 'incoming')
        scrollToBottom()
    });

})






textarea.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        sendMessage(e.target.value)
    }

})


function sendMessage(message) {
    // console.log(message)
    let msg = {
        user: name,
        message: message.trim(),
        msg_type: 'outgoing'
    }

    appendMessage(msg, msg.msg_type)
    textarea.value = ''
    scrollToBottom()


    //send server
    socket.emit('message', msg)


}



function appendMessage(msg, type) {
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className, 'message')


    let markup = `
    
    <h4>${msg.user}</h4>
    <p>${msg.message}</p>
    `


    mainDiv.innerHTML = markup
    message_area.appendChild(mainDiv)



}




//recive server
socket.on('message', (msg) => {
    appendMessage(msg, 'incoming')
    scrollToBottom()
})


//database_message


function scrollToBottom() {
    message_area.scrollTop = message_area.scrollHeight

}