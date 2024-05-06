const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');

button.addEventListener('click', () => {
    popup.style.display = 'block';
})

popup.addEventListener('click', event => {
    const classClickedEvent = event.target.classList[0];
    console.log(classClickedEvent);
    const classNames = ['popup-close', 'popup-link', 'popup-wrapper']

    const closePopup = classNames.some(classNames => classNames === classClickedEvent)   // o some() itera sobre o array e verifica se um dos itens atende à condição classNames === classClickedEvent e retorna true or false

    if (closePopup) {popup.style.display = 'none'};
});   