export interface ICuisine {
  // Name is the cuisine as it's rendered. Don't forget capitalisations
  name: string;
  href: string;
  svg?: JSX.Element;
}

export const cuisines: Array<ICuisine> = [
  { name: 'Italian', href: '/italian' },
  { name: 'French', href: '/french' },
  { name: 'Japanese', href: '/japanese' },
  { name: 'Chinese', href: '/chinese' },
  { name: 'Indian', href: '/indian' },
];
