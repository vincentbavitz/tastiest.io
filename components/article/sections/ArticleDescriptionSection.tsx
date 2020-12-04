interface Props {
  children: string;
}

export function ArticleDescriptionSection(props: Props) {
  const { children } = props;

  return (
    <div className="flex justify-center w-full">
      <span
        style={{ maxWidth: '75%' }}
        className="text-twoxl bold text-center font-robotoblack text-gray-800"
      >
        {children}
      </span>
    </div>
  );
}
