document.addEventListener('DOMContentLoaded', function() {
    const chatIcon = document.getElementById('chat-icon');
    const chatBox = document.getElementById('chat-box');

    chatIcon.addEventListener('click', function() {
        chatBox.classList.toggle('show');
    });
});
