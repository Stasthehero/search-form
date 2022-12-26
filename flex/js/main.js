const findButton = document.getElementsByName('find-button')[0];
const cardsField = document.querySelector('.content');
const inputForm = document.getElementById('input-form');
const persons = [
    {name: 'Александр Бородулин', salary: '500 тыс.рублей'},
    {name: 'Даня Ценев', salary: '500 тыс.рублей'},
    {name: 'Татьяна Зобова', salary: '250 тыс.рублей'},
    {name: 'Даня Ценев', salary: '500 тыс.рублей'}
];

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


