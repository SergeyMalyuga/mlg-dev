import {WorkCard} from '../models/work-card.model';
import {nanoid} from 'nanoid';

export const getWorksData =  (): WorkCard[] => [
  {
    id: nanoid(),
    image: '/assets/images/raster/elimak.jpg',
    alt: 'Elimak',
    url: 'https://elimak.ru/',
    description: 'Строительная компания, специализирующаяся на комплексных проектах. Выполняем весь спектр работ — от строительства домов до внутренней отделки и ландшафтного дизайна. Берём на себя проектирование, согласование, закупку материалов и реализацию. Для нас важно, чтобы заказчик получил готовое пространство, где продумано всё: от планировки до благоустройства участка.',
    width: 1695,
    height: 1223,
    tools: ['Typescript', 'Angular', 'RXJS', 'NGRX', 'Swiper'],
  },
  {
    id: nanoid(),
    image: '/assets/images/raster/survive.jpg',
    alt: 'Survive',
    url: 'https://github.com/SergeyMalyuga/survive',
    description: 'Выжить любой ценой. Survive — многопользовательский шутер в жанре королевской битвы. Падай на карту, ищи оружие, сражайся и становись последним выжившим. Динамичные бои, разрушаемое окружение и постоянная опасность на каждом шагу.',
    width: 1698,
    height: 1222,
    tools: ['Typescript', 'Angular', 'RXJS', 'NGRX', 'Swiper'],
  },
  {
    id: nanoid(),
    image: '/assets/images/raster/cyber-punk.jpg',
    alt: 'CyberPunk',
    url: 'https://github.com/SergeyMalyuga/cyberpunk',
    description: 'Небольшой проект, созданный по игре Cyberpunk 2077. На сайте собрана информация о вселенной игры и геймплее. Также есть разделы покупки и спонсорского товара. ',
    width: 1695,
    height: 1224,
    tools: ['Typescript', 'Angular', 'RXJS', 'NGRX', 'Swiper'],
  },
  {
    id: nanoid(),
    image: '/assets/images/raster/moon-river.jpg',
    alt: 'Moon-River',
    url: 'https://github.com/SergeyMalyuga/moon-river',
    description: 'Проект, посвящённый ювелирным украшениям для мужчин и женщин. Здесь собрана информация о стилях, материалах и тенденциях. Сайт помогает разобраться в выборе украшений — от классических обручальных колец до современных минималистичных подвесок.',
    width: 1694,
    height: 1223,
    tools: ['Typescript', 'Angular', 'RXJS', 'NGRX', 'Swiper'],
  },
  {
    id: nanoid(),
    image: '/assets/images/raster/aura.jpg',
    alt: 'Aura',
    url: 'https://github.com/SergeyMalyuga/aura',
    description: 'Сайт с крипто-стикерами для тех, кто живёт в мире блокчейна и мемов. Собрал здесь наклейки с любимыми крипто-персонажами: быками и медведями, биткоин-максималистами, собаками из DOGE и вечными циклами "дно-дно-дно". Для ноутбуков, бутылок с водой и холодильников — чтобы каждый знал, что ты в теме.',
    width: 1697,
    height: 1225,
    tools: ['Typescript', 'Angular', 'RXJS', 'NGRX', 'Swiper'],
  }
]
