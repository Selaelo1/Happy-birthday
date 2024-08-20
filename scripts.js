const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const messageId = button.getAttribute('data-message-id');
        const messageText = document.getElementById(messageId);
        messageText.classList.toggle('expanded');
        button.textContent = messageText.classList.contains('expanded') ? 'Read Less' : 'Read More';
    });
});

