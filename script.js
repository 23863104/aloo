const messages = [
    "Are you sure you don't love me?",
    "Please reconsider, will you be my valentine?",
    "Come on, give it a chance!",
    "You know you want to say yes!",
    "I'll keep asking until you say yes!"
];

let messageIndex = 0;

document.getElementById('noBtn').addEventListener('click', () => {
    if (messageIndex < messages.length) {
        document.getElementById('message').innerText = messages[messageIndex];
        messageIndex++;
    } else {
        messageIndex = 0;
        document.getElementById('message').innerText = messages[messageIndex];
    }
});

document.getElementById('yesBtn').addEventListener('click', () => {
    document.getElementById('message').innerText = "Yay! I love you too!";
});
