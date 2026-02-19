const comment_section = document.getElementById("comment_section");
const user_text = document.getElementById("user_input");
const writing_frequency_counter = document.getElementById("writing_frequency_counter");

let generatedComments = [];

/*Comment adding mechanincs...*/
function Comment(username, text) {
    if (! username || ! text) return;
    function renderComment(data) {
        let id = generatedComments.length
        const commentHTML = `<div class="comment" id="${id}">
        <span class="username">${data.username}</span>
        <span id="comment_id">#${id}</span>
        <hr class="comment-sectioner">
        <p class="text">${data.text}</p>
        </div>`;
        comment_section.innerHTML += commentHTML;
    }
    
    this.username = username;
    this.text = text;
    renderComment(this)
    generatedComments.push(data)
    
    // Notify: "New comment..."
    console.log(generatedComments)
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
    minFrequency: 40, // The minimal frequency value for generating a next comment.
    minFreqReached: false,
    get minFrequencyReached () {
        if (this.frequency === this.minFrequency) {
            this.minFreqReached = true;
            console.log(`Minimum frequency ${this.minFrequency} reached.`);
        }
        return this.minFreqReached;
    },
    
    get frequency () {return this.freq},
    set frequency (value) {
        // Update frequency.
        this.freq = value;
        writing_frequency_counter.textContent = this.frequency;
        
        // Check if threshold has been reached
        this.minFrequencyReached
    },  
};

function generateComments() {
    console.log("Starting comment generation")
    function restart(minFrequencyReached) {
        if (minFrequencyReached) {
            new Comment("Gut", `There's enough text: ${writing.frequency}`);
            writing.frequency = 0;
        } else {
            console.log("There isn't enough text: ", writing.frequency);
        }
        generateComments();
    }

    setTimeout(() => {
        restart(writing.minFrequencyReached);
    }, chooseRandomTimeout(10_000, 12_000));
}

generateComments();


// Adding random comments [TESTING]
function commentObject(username, text) {
    return {
        username: username,
        text: text
    }
}

const myComments = [
    commentObject("Gut", "Muito esquisito está esse texto, não consigo entender nada."),
    commentObject("JP", "ndasçheuwoçhdbuioaphcebnejãthtiaoemefa58946317.d478a9w7d8wawdia9pey7gr9-7280-9eqjajdiawe[ajwiehw[0yr8yuogaywge6yglgwatyfetwiorastaeifwtaefwryia bngyrowfetaraçryasfwr61r379pqt0dwagdapsbcgtctozlgsdh478a9w7d8wawdia9pey7gr9-7280-9eqjajdiawe[ajwiehw[0yr8yuogaywge6yglgwatyfetwiorastaeifwtaefwryia bngyrowfetaraçryasfwr61r379pqt478a9w7d8wawdia9pey7gr9-7280-9eqjajdiawe[ajwiehw[0yr8yuogaywge6yglgwatyfetwiorastaeifwtaefwryia bngyrowfetaraçryasfwr61r379pqt478a9w7d8wawdia9pey7gr9-7280-9eqjajdiawe[ajwiehw[0yr8yuogaywge6yglgwatyfetwiorastaeifwtaefwryia bngyrowfetaraçryasfwr61r379pqt"),
    commentObject("Bro Code", "Viu só? O texto está enlouquecendo as pessoas. Vou dar um fora daqui!"),
    commentObject("???????", "The randomTimeout function chooses a random timeout between the parameters (num1, num2) and starts the timer to execute the function in the *func* parameter, in this example case, the function executed is restart() which will restart the randomCommentGenerator, the timer, char counter [will reset to 0 if needed] and, at the end restart anew, keeping the functional loop going.")
]

myComments.forEach((element) => {
    new Comment(element.username, element.text)
})