interface Props {
  children: string;
}

export function SectionTitle(props: Props) {
  const { children } = props;

  // Titlize all our words... All uppercase but the first letter is big.

  return (
    <div className="relative flex flex-col justify-center items-center mb-3 text-2xl text-center tracking-wide">
      <h3 className="text-primary font-primary pb-2 uppercase font-semibold">
        <span className="text-4xl font-medium tracking-tight">
          {children[0]}
        </span>
        {children.slice(1)}
      </h3>
      {/* <div className="absolute bottom-0 w-16 h-1 mt-8 rounded-full bg-primary"></div> */}

      <img
        style={{ width: '20rem' }}
        src="/assets/title-divider.svg"
        className="h-auto"
      />
    </div>
  );
}
