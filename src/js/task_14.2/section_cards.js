// cards images
import cardImg1 from '../../static/images/Frame1.png'
import cardImg2 from '../../static/images/Frame2.png'
import cardImg3 from '../../static/images/Frame3.png'
import cardImg4 from '../../static/images/Frame4.png'
import cardImg5 from '../../static/images/Frame5.png'
import cardImg6 from '../../static/images/Frame6.png'
import cardImg7 from '../../static/images/Frame7.png'
import cardImg8 from '../../static/images/Frame8.png'


// Создаем и Работаем с SECTION with CARDS
// Создаем контейнер для SECTION-CARDS
export const sectionCardsContainer = document.createElement('div');
sectionCardsContainer.classList.add('container__section-cards'); // <div class="container__section-cards"></div>

const sectionCards = document.createElement('section');
sectionCards.classList.add('section-cards'); // <section class="section-cards"></section>

// Создаем 2 элемента DIV для наполнения контентом
for (let i = 0; i < 2; i++) {
    const div = document.createElement('div');
    sectionCards.append(div);
}

// Добавляем class для DIV 
sectionCards.children[0].classList.add('container-text'); // <div class="container-text"></div>
sectionCards.children[1].classList.add('container-cards'); // <div class="container-cards"></div>


// Через шаблоны вставляем основной контент в HEADER DIV
// 0: div.header-menu__logo
const containerTextTPL = `
    <a href="!#" class="container-text__button">
        <span>Our services</span>
    </a>
    <h2>What Creative Design We Offer</h2>
    <p>Business owners and managers lead by example. The values and work ethic displayed by a company's decision makers have a direct ...</p>
`;
sectionCards.children[0].insertAdjacentHTML('beforeend', containerTextTPL);


// cards with images 
const cards = [
    {
        id: 1,
        title: 'Product management',
        img: `url('${cardImg1}')`,
    },
    {
        id: 2,
        title: 'Web & Mobile Development',
        img: `url('${cardImg2}')`,
    },
    {
        id: 3,
        title: 'Brochures & Flyers',
        img: `url('${cardImg3}')`,
    },
    {
        id: 4,
        title: 'Logo & name cards',
        img: `url('${cardImg4}')`,
    },
    {
        id: 5,
        title: 'Marketing & Commuication',
        img: `url('${cardImg5}')`,
    },
    {
        id: 6,
        title: 'Business Development',
        img: `url('${cardImg6}')`,
    },
    {
        id: 7,
        title: 'Human Resources',
        img: `url('${cardImg7}')`,
    },
    {
        id: 8,
        title: 'Infographics & Illustrations',
        img: `url('${cardImg8}')`,
    },
];


cards.forEach( (card) => {

    const divContainer = document.createElement('div'); 
    divContainer.classList.add('container-card'); // <div class="container-card"></div>
        
    const cardTPL = `
        <div class="card card-${card.id}">
            <div class="card__image" style="background-image: ${card.img}"></div>
            <a href="!#" class="card__title">${card.title}</a>
            <button type="button" class="card-btn">Learn more ></button>
        </div>
    `;

    divContainer.insertAdjacentHTML('beforeend', cardTPL);

    // Добавляем divContainer в sectionCards 
    sectionCards.children[1].append(divContainer);
    
});


// Добавляем sectionCards в sectionCardsContainer
sectionCardsContainer.append(sectionCards); 

