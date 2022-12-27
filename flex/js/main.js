const findButton = document.getElementsByName('find-button')[0];
const cardsField = document.querySelector('.content');
const inputForm = document.getElementById('input-form');
const clearButton = document.getElementsByName('clear-button')[0];
const persons = [
    {name: 'Александр Бородулин', salary: '500 тыс.рублей'},
    {name: 'Даня Ценев', salary: '500 тыс.рублей'},
    {name: 'Татьяна Зобова', salary: '250 тыс.рублей'},
    {name: 'Даня Ценев', salary: '500 тыс.рублей'}
];

let clearSearchForm = function () {
    inputForm.value = '';
    cardsField.innerHTML = '';
    init();
};

clearButton.addEventListener('click', () => {
    clearSearchForm();
})


let drawCard = (user) => {
    cardsField.insertAdjacentHTML(
        'afterbegin',
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


findButton.addEventListener("click", () => {
    findCard(inputForm.value);
});


let init = function () {
    persons.forEach((user) => {
        drawCard(user);
    });
};

init();


