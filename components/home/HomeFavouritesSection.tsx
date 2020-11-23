import { SectionTitle } from '../SectionTitle';

interface Props {
  cards: JSX.Element[];
}

export function HomeFavouritesSection(props: Props) {
  const { cards } = props;

  return (
    <div>
      <SectionTitle>Discover your next favourite dish!</SectionTitle>
      <div className="md:flex overflow-x-hidden mx-6 my-8 space-x-6">
        {cards}
      </div>
    </div>
  );
}
