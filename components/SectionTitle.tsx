import { ReactNode } from 'react';

interface Props {
  children: ReactNode | string;
}

export function SectionTitle(props: Props) {
  const { children } = props;

  return (
    <div className="relative flex justify-center mb-3 text-xl text-center font-primary text-primary">
      <p className="pb-2">{children}</p>
      <div className="absolute bottom-0 w-10 h-1 mt-8 rounded-full bg-secondary"></div>
    </div>
  );
}
