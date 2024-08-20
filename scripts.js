const readMoreLinks = document.querySelectorAll('.read-more');

readMoreLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    link.href = 'javascript:void(0)';
    const messageId = link.getAttribute('data-message-id');
    const messageContainer = document.getElementById(messageId);
    messageContainer.classList.toggle('expanded');
  });
});


