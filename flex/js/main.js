const findButton = document.getElementsByName('find-button')[0];
const cardsField = document.querySelector('.content');
const persons = [
    {name: 'Александр Бородулин', salary: '500 тыс.рублей'},
    {name: 'Даня Ценев', salary: '500 тыс.рублей'},
    {name: 'Татьяна Зобова', salary: '250 тыс.рублей'}
];


let init = function () {
    persons.forEach((user) => {

        let drawCard = () => {
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
        drawCard();

        findButton.addEventListener("click", () => {
            let inputForm = document.getElementById('input-form').value;
            let deleteCard = function () {
                if (user.name === inputForm) {
                    cardsField.innerHTML = '';
                    const filteredPerson = persons.filter((person) => {
                        return person.name === inputForm;
                                                // cardsField.insertAdjacentHTML(
                        //     'afterbegin',
                        //     '<div class="card">\n' +
                        //     '                    <div class="card__img">\n' +
                        //     '                        <img src="https://picsum.photos/200" alt="">\n' +
                        //     '                    </div>\n' +
                        //     '                    <div class="card__info">\n' +
                        //     '                        <div class="card__title">' + person.name + '</div>\n' +
                        //     '                        <div class="card__description">' + person.salary + '</div>\n' +
                        //     '                    </div>\n' +
                        //     '                </div>'
                        // )
                    })
                }
                                else {
                }

            }
            deleteCard();
        })
    })
};

init();


