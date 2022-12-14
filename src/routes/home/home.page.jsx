import {CategoryList} from '../../components'
const categories = [
  {
    id: 1,
    title: 'Hats',
    image: 'https://i.ibb.co/cvpntL1/hats.png',
    route: 'shop/hats'
  },
  {
    id: 2,
    title: 'Jackets',
    image: 'https://i.pinimg.com/236x/74/24/16/742416d471d4e4669207dd3bc8982f03.jpg',
    route: 'shop/jackets'
  },
  {
    id: 3,
    title: 'Sneakers',
    image: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route: 'shop/sneakers'
  },
  {
    id: 4,
    title: 'Womens',
    image: 'https://i.ibb.co/GCCdy8t/womens.png',
    route: 'shop/womens'
  },
  {
    id: 5,
    title: 'Mens',
    image: 'https://i.ibb.co/R70vBrQ/mens.png',
    route: 'shop/mens'
  },
]

function HomePage() {
  return (
    <CategoryList categories={categories} />
  );
}

export default HomePage;
