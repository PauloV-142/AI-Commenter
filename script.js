const comment_section = document.getElementById("comment_section");
const user_text = document.getElementById("user_input");
let commentCounter = 1;

function insertComment(data) {
    function newComment(data) {
        return `<div class="comment" id="${commentCounter}">
        <span class="username">${data.username}</span>
        <span id="comment_id">#${commentCounter}</span>
        <hr class="comment-sectioner">
        <p class="text">${data.text}</p>
        </div>`;
    }
    comment_section.innerHTML += newComment(data);
    commentCounter += 1;
}

function UserComment() {
    this.username = window.prompt(`#${commentCounter} Apelido:`)
    this.text = window.prompt(`Comentário:`)
    return this
}

user_text.onclick = function() {
    insertComment(new UserComment());
}