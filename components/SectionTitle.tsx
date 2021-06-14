interface Props {
  children: string;
}

export function SectionTitle(props: Props) {
  const { children } = props;

  return (
    <div className="relative flex justify-center mb-3 text-xl text-center font-somatic text-primary">
      <p className="pb-2">{children}</p>
      <div className="absolute bottom-0 w-10 h-1 mt-8 rounded-full bg-secondary"></div>
    </div>
  );
}
