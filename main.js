const menu = [
            { name: 'Борщ', price: 90, type: 'суп' },
            { name: 'Пюре с котлетой', price: 150, type: 'горячее' },
            { name: 'Салат', price: 70, type: 'закуска' },
            { name: 'Компот', price: 40, type: 'напиток' },
            { name: 'Пицца', price: 200, type: 'горячее' }
        ];

        const menuBlock = document.querySelector('#menu');
        const drinksBlock = document.querySelector('#drinks');
        const totalBlock = document.querySelector('#total');

        function createCard(dish) {
            const card = document.createElement('div');
            card.classList.add('card');

            const name = document.createElement('h3');
            name.textContent = dish.name;

            const price = document.createElement('p');
            price.textContent = 'Цена: ' + dish.price + ' руб.';

            const type = document.createElement('p');
            type.textContent = 'Тип: ' + dish.type;

            card.append(name, price, type);

            if (dish.price > 100) {
                card.classList.add('expensive');
            }

            if (dish.price < 60) {
                card.classList.add('cheap');
            }

            return card;
        }

        const sortedMenu = [...menu].sort((a, b) => a.price - b.price);

        sortedMenu.forEach(dish => {
            const card = createCard(dish);
            menuBlock.append(card);
        });

        const totalPrice = menu.reduce((sum, dish) => sum + dish.price, 0);

        totalBlock.textContent =
            'Общая стоимость: ' + totalPrice +
            ' руб. | Количество блюд: ' + menu.length;

        document.querySelectorAll('#menu .card').forEach(card => {
            if (card.textContent.includes('напиток')) {
                card.remove();
            }
        });

        const dishOfDay = {
            name: 'Блюдо дня',
            price: 120,
            type: 'специальное'
        };

        const specialCard = createCard(dishOfDay);

        menuBlock.prepend(specialCard);

        const mostExpensive = [...menu].sort(
            (a, b) => b.price - a.price
        )[0];

        const copyCard = createCard(mostExpensive).cloneNode(true);
        menuBlock.append(copyCard);

        const drinks = menu.filter(dish => dish.type === 'напиток');

        drinks.forEach(drink => {
            drinksBlock.append(createCard(drink));
        });