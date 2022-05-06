const getRating = () => {
    return Math.floor(Math.random() * 100 + 1);
}

const users = [
    {
        ID: 1,
        rating: getRating(),
        firstName: 'Николай',
        lastName: 'Ризак'
    },
    {
        ID: 2,
        rating: getRating(),
        firstName: 'Елена',
        lastName: 'Крачковская'
    },
    {
        ID: 3,
        rating: getRating(),
        firstName: 'Юрий',
        lastName: 'Кравец'
    },
    {
        ID: 4,
        rating: getRating(),
        firstName: 'Алёна',
        lastName: 'Крупенко'
    },
    {
        ID: 5,
        rating: getRating(),
        firstName: 'Илья',
        lastName: 'Рожок'
    },
    {
        ID: 6,
        rating: getRating(),
        firstName: 'Оксана',
        lastName: 'Тригуб'
    },
    {
        ID: 7,
        rating: getRating(),
        firstName: 'Vasilii',
        lastName: 'Zalizniak'
    },
    {
        ID: 8,
        rating: getRating(),
        firstName: 'Георгий',
        lastName: 'Благообразов'
    },
    {
        ID: 9,
        rating: getRating(),
        firstName: 'Юнус',
        lastName: 'Сейтназаров'
    },
    {
        ID: 10,
        rating: getRating(),
        firstName: 'Дмитрий',
        lastName: 'Малаховский'
    },
    {
        ID: 11,
        rating: getRating(),
        firstName: 'Роман',
        lastName: 'Грачев'
    }
]

export default users;