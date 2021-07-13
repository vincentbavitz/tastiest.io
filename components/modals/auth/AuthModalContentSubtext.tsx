import { ReactNode } from 'react';

interface ContentSubtextProps {
  children: ReactNode;
}

export const ContentSubtext = ({ children }: ContentSubtextProps) => {
  return <div className="text-sm text-center">{children}</div>;
};
