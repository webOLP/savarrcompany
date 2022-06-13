const future = document.querySelector('.future');
const futureTitle = future.querySelector('.future__title');


function textFutureTitle() {
    
    if(futureTitle.textContent === 'Будущее уже здесь'){
     futureTitle.textContent = 'Future has come';
    } else {
        futureTitle.textContent = 'Будущее уже здесь';
    }
}


setInterval(textFutureTitle, 3000);