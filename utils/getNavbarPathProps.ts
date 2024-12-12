import { fetchImageFeed } from 'contentful/helpers';
import { YEAR_STRINGS } from 'utils/constants';

export type NavbarPathProps = {
  navbarPathProps: string[];
};

type T = {
  [key: string]: string; // Index signature for the accumulator
};

export const getNavbarPathProps = async (): Promise<NavbarPathProps> => {
  const res = await fetchImageFeed();

  if (!res) return { navbarPathProps: [] };

  // need to assign to a variable to properly 'await'
  const imagesWithYearTag = res
    .filter(image =>
      image.metadata.tags.some(tag => YEAR_STRINGS.includes(tag.sys.id)),
    )
    .map(image => {
      return {
        slug: image.metadata.tags.filter(tag =>
          YEAR_STRINGS.includes(tag.sys.id),
        )[0],
        title: image.fields.title,
      };
    });

  const navbarPathPropsObject = imagesWithYearTag.reduce((prev, cur) => {
    if (!prev[cur.slug.sys.id]) {
      prev[cur.slug.sys.id] = cur.slug.sys.id;
    }

    return prev;
  }, {} as T);

  const navbarPathProps = Object.keys(navbarPathPropsObject).sort((a, b) => {
    // Ensure that the first element is the most recent year
    return Number(b) - Number(a);
  });

  return {
    navbarPathProps,
  };
};
