const future = document.querySelector('.future');
const futureTitle = future.querySelector('.future__title');
const popupWindow = document.querySelector('.popup-background')
const buttonCallPopup = document.querySelectorAll('.call-popup')

function textFutureTitle() {
    
    if(futureTitle.textContent === 'Будущее уже здесь'){
     futureTitle.textContent = 'Future has come';
    } else {
        futureTitle.textContent = 'Будущее уже здесь';
    }
}

function popupActive() {
    popupWindow.classList.add('popup-background_active');
}

function popupClose(event) {
    event.preventDefault();
    console.log(event.currentTarget, event.target)
    if( (event.target === event.currentTarget) || event.target === popupWindow.querySelector('.form-popup__button')) {
        popupWindow.classList.remove('popup-background_active')
    }
    
}



popupWindow.addEventListener('click', popupClose);
setInterval(textFutureTitle, 3000);

for (let i = 0; i < buttonCallPopup.length; i++) {
    buttonCallPopup[i].addEventListener('click',popupActive);
}