const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Olá Habibi',
    'Gostei do seu popotao',
    'Ai que barriguinha linda',
    'Quero pegar no seu buchinho',
    'Chique Chique Bahia',
    'Aii o Xibiu'
]

button.addEventListener('click', () => createNotification())

function createNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('toast');
    notification.innerText = getRandomMessage()

    toasts.appendChild(notification)

    setTimeout(() => {
        notification.remove()
    }, 2000);
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}
