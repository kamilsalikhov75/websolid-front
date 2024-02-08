import image from '@/shared/assets/images/test-image.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}
export const PROJECTS: Project[] = [
  {
    description: 'test description',
    id: 1,
    image,
    title: 'test title'
  },
  {
    description: 'test description',
    id: 2,
    image,
    title: 'test title'
  },
  {
    description: 'test description',
    id: 3,
    image,
    title: 'test title'
  }
];
