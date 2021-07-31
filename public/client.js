// var io = io("http://localhost:3000")


const socket = io()

let name;
let message_area = document.querySelector('.message_area')
let textarea = document.querySelector('#text_area')

do {
    name = prompt('Enter your name')
} while (!name);


textarea.addEventListener('keyup', (e)=>{
    if(e.key === 'Enter'){
        sendMessage(e.target.value)
    }

})


function sendMessage(message){
    // console.log(message)
    let msg = {
        user:name,
        message:message
    }

    appendMessage(msg,'outgoing')
    textarea.value = ''
    scrollToBottom()


}



function appendMessage(msg, type){

}


function scrollToBottom(){
    message_area.scrollTop = message_area.scrollHeight

}