const findButton = document.getElementsByName('find-button')[0];
const cardsField = document.querySelector('.content');
const inputForm = document.getElementById('input-form');
const clearButton = document.getElementsByName('clear-button')[0];
const addButton = document.getElementsByName('add-button')[0];
const addModalButton = document.getElementsByName('modal-new-card-button')[0];
const closeModalButton = document.getElementsByName('close-modal-button')[0];
const closeX = document.querySelector('.close');
const modalInputName = document.querySelector('.input-name ')
const modalInputSalary = document.querySelector('.input-salary')
const modalContent = document.querySelector('.modal-content');
const persons = [
    {name: 'Александр Бородулин', salary: '500 тыс.рублей'},
    {name: 'Даня Ценев', salary: '500 тыс.рублей'},
    {name: 'Татьяна Зобова', salary: '250 тыс.рублей'},
    {name: 'Даня Ценев', salary: '500 тыс.рублей'}
];

//функция очистки поля ввода
let clearSearchForm = function () {
    inputForm.value = '';
    cardsField.innerHTML = '';
    init();
};


//событие на кнопку очистить
clearButton.addEventListener('click', () => {
    clearSearchForm();
})

//функция отрисовки карточки
let drawCard = (user) => {
    cardsField.insertAdjacentHTML(
        'beforeend',
        '<div class="card">\n' +
        '                    <div class="card__img">\n' +
        '                        <img src="https://picsum.photos/200" alt="">\n' +
        '                    </div>\n' +
        '                    <div class="card__info">\n' +
        '                        <div class="card__title">' + user.name + '</div>\n' +
        '                        <div class="card__description">' + user.salary + '</div>\n' +
        '                    </div>\n' +
        '                </div>'
    )
}
//функция поиска карточки и сравнения с массивом
let findCard = function (userName) {
    cardsField.innerHTML = '';
    const filteredPerson = persons.filter((person) => {
        return person.name.toLowerCase().includes(userName.toLowerCase());
    });
    if (filteredPerson.length > 0) {
    } else {
        cardsField.insertAdjacentHTML('afterbegin',
            '<p class="not-found">Увы... ничего не найдено\n' +
            '</p>\n' +
            '<div class=img>\n' +
            '<img class="not-found-image" src="./img/notfound.png" alt="#">\n' +
            '</div>'
        );
    }

    filteredPerson.forEach((user) => {
        drawCard(user);
    })
};

//событие на кнопку поиск
findButton.addEventListener("click", () => {
    findCard(inputForm.value);
});

//эта функция отрисовывает все карточки
let init = function () {
    persons.forEach((user) => {
        drawCard(user);
    });
};

init();


//кнопка, отображающая модальное окно
addButton.addEventListener("click",(e)=>{
    modalContent.style.display="flex";
    e.stopPropagation();
    });



// Крестик для закрытия модального окна
closeX.onclick = function () {
    modalContent.style.display="none";
};


//Кнопка для закрытия модального окна
closeModalButton.addEventListener("click",function () {
    modalContent.style.display="none";
});

let modalChildren = modalContent.childNodes;

console.log(modalChildren);

//закрывает модульное окно по клику вне окна
window.onclick = function (e) {
        if (e.target !== modalContent ) {
        modalContent.style.display = "none";
    }
 };



//
// addModalButton.addEventListener("click",function () {
//
// })
