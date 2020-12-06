import { Contained } from '../../Contained';

interface Props {
  children: string;
}

export function ArticleDescriptionSection(props: Props) {
  const { children } = props;

  return (
    <Contained>
      <div className="flex justify-center w-full">
        <span className="text-lg lg:text-twoxl lg:w-7/12 bold text-center font-robotoblack text-gray-800">
          {children}
        </span>
      </div>
    </Contained>
  );
}
