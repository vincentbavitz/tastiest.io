import { ReactNode } from 'react';

interface Props {
  children: ReactNode | string;
}

export function SectionTitle(props: Props) {
  const { children } = props;

  return (
    <div className="relative flex justify-center mb-3 text-2xl text-center font-secondary tracking-wide text-primary">
      <h3 className="pb-2">{children}</h3>
      <div className="absolute bottom-0 w-10 h-1 mt-8 rounded-full bg-primary"></div>
    </div>
  );
}
