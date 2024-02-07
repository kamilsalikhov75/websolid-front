interface FooterBlock {
  label: React.ReactNode;
  routes: Route[];
}
export const FOOTER_BLOCKS: FooterBlock[] = [
  {
    label: 'Услуги',
    routes: [
      {
        href: '#',
        label: 'Web разработка'
      },
      {
        href: '#',
        label: 'Написание парсеров'
      }
    ]
  },
  {
    label: 'Компания',
    routes: [
      {
        href: '/about',
        label: 'О нас'
      },
      {
        href: '/contacts',
        label: 'Контакты'
      },
      {
        href: '/projects',
        label: 'Портфолио'
      }
    ]
  },
  {
    label: 'Технологический стэк',
    routes: [
      {
        href: '#',
        label: 'React/Next'
      },
      {
        href: '#',
        label: 'Nest'
      },
      {
        href: '#',
        label: 'Selenium'
      },
      {
        href: '#',
        label: 'Strapi'
      }
    ]
  }
];
