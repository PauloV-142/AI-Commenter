const comment_section = document.getElementById("comment_section");
const user_text = document.getElementById("user_input");
let commentCounter = 1;
let addedComments = [];

/*Comment adding mechanincs...*/
function Comment(username, text) {
    function renderComment(data) {
        return `<div class="comment" id="${data.id}">
        <span class="username">${data.username}</span>
        <span id="comment_id">#${data.id}</span>
        <hr class="comment-sectioner">
        <p class="text">${data.text}</p>
        </div>`;
    }
    comment_section.innerHTML += renderComment(this);
    
    this.username = username;
    this.text = text;
    this.id = ++commentCounter;
    
    addedComments[this.id] = this;
    // Notify
    console.log(addedComments)
    return this
}
function UserComment() {
    username = window.prompt(`#${commentCounter} Apelido:`)
    text = window.prompt(`Comentário:`)
    return new Comment(username, text)
}

user_text.onclick = function() {
    new UserComment()
}

/*Adding comments dinamically*/

function chooseRandomTimeout(min, max) {
    return Math.trunc(min + (Math.random() * max))
}

let flowData = {
    timeoutId: null,
    writingFrequency: 0,
    writingFrequencyThreshold: 10,
    number: 0,
    get isEnoughText () {
        return flowData.writingFrequency >= flowData.writingFrequencyThreshold;
    }
    
};
function flow() {
    flowData.timeoutId = setTimeout(() => {
        handleFlowRestarting(flowData.isEnoughText);
        flowData.number += 1;
        console.log("Starting new Flow:", flowData.number);
    }, chooseRandomTimeout(30_000, 120_000));
}

function handleFlowRestarting(isEnoughText) {
    if (isEnoughText) {
        window.alert("Adding new comment");
        // Add new comment
    } else {
        flow();
    }

}

// Let flow be a function, that calls the timeout at the end

// 1. The user writes something.
user_text.onchange = function handleTextareaUpdates() {
    if (flowData.ongoing) {
        flowData.writingFrequency += 1;
    } else {
        flowData.start()
    }
};
// Temporary, com 
var exampleComments = [];