let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; //Web Speech Api
const recognition = new SpeechRecognition();
function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

/*recognition.onend=function(){
    mic.style.background="#ff3b3b";
}*/
recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    /*chatbotvoice(transcript);*/
    console.log(transcript);
}
mic.addEventListener("click", function(){
    /*mic.style.background='#39c81f';*/
    recognition.start();
    console.log("Activated");
    return value;
})