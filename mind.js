document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('response').textContent = 'Yay! I am so happy!';
});

document.getElementById('noBtn').addEventListener('mouseover', function() {
    const button = this;
    const container = button.parentElement;
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const offsetX = Math.random() * (containerRect.width - buttonRect.width);
    const offsetY = Math.random() * (containerRect.height - buttonRect.height);

    button.style.position = 'absolute';
    button.style.left = `${offsetX}px`;
    button.style.top = `${offsetY}px`;
});
