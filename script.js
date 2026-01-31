const comment_section = document.getElementById("comment_section");
const user_text = document.getElementById("user_input");
const writing_frequency_counter = document.getElementById("writing_frequency_counter");

let comments = [];

/*Comment adding mechanincs...*/
function Comment(username, text) {
    if (! username || ! text) return;
    function renderComment(data) {
        let id = comments.length
        return `<div class="comment" id="${id}">
        <span class="username">${data.username}</span>
        <span id="comment_id">#${id}</span>
        <hr class="comment-sectioner">
        <p class="text">${data.text}</p>
        </div>`;
    }
    
    this.username = username;
    this.text = text;
    
    comment_section.innerHTML += renderComment(this);
    comments[comments.length] = this;
    // Notify: "New comment..."
    console.log(comments)
    return this
}

// You can add comments using the console >_ new Comment("username", "text")

user_text.oninput = function () {
    writing.frequency += 1
}

/*Adding comments dinamically*/
function chooseRandomTimeout(min, max) {
    let difference = max - min;
    let timeout = Math.trunc(min + (Math.random() * difference));
    console.log("Timeout started: ", timeout);
    return timeout
}

let writing = {
    freq: 0,
    threshold: 40, // The minimal value for generating a next comment.
    isEnoughText: false,
    get frequency () {return this.freq},
    set frequency (value) {
        // Update frequency.
        this.freq = value;
        writing_frequency_counter.textContent = this.frequency;
        
        // Monitor if threshold has been reached
        if (this.isEnoughText) return;
        let thresholdReached = this.frequency >= this.threshold;
        if (thresholdReached) {
            console.log(`Threshold ${this.threshold} reached.`);
            this.isEnoughText = true;
        }
    },  
};

function generateComments() {
    console.log("Starting comment generation")
    function restart(isEnoughText) {
        if (isEnoughText) {
            new Comment("Gut", `There's enough text: ${writing.frequency}`);
            writing.frequency = 0;
        } else {
            console.log("There isn't enough text: ", writing.frequency);
        }
        generateComments();
    }

    setTimeout(() => {
        restart(writing.isEnoughText);
    }, chooseRandomTimeout(10_000, 12_000));
}

generateComments();