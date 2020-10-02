interface IGenerateURLParams {
  city: string;
  cuisine: string;
  slug: string;
}

export const generateURL = ({ city, cuisine, slug }: IGenerateURLParams) =>
  `${city}/${cuisine}/${slug}`;
