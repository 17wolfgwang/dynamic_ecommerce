import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'Soccer',
    imageUrl: '/images/preview-image/lionel-messi.webp',
    route: 'shop/soccer'
  },
  {
    id: 2,
    title: 'Basketball',
    imageUrl: '/images/preview-image/LeBron-James.jpeg',
    route: 'shop/basketball'

  },
  {
    id: 3,
    title: 'Baseball',
    imageUrl: '/images/preview-image/otani.jpeg',
    route: 'shop/baseball'
  },
  {
    id: 4,
    title: 'Football',
    imageUrl: '/images/preview-image/tom-brady.jpeg',
    route: 'shop/football'
  },
  {
    id: 5,
    title: 'Tennis',
    imageUrl: '/images/preview-image/Roger-Federer.webp',
    route: 'shop/tennis'
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;