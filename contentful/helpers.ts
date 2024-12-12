import type { ContentfulClientApi } from 'contentful';

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const contentful = require('contentful');
const client: ContentfulClientApi<'WITHOUT_UNRESOLVABLE_LINKS'> =
  contentful.createClient({
    space,
    accessToken,
  });

export async function fetchImageFeed() {
  try {
    const response = await client.getAssets({
      'metadata.tags.sys.id[in]': ['feed'],
    });

    // Ensure all image URLs are absolute
    response.items.forEach(item => {
      const image = item.fields.file;

      if (!image) {
        console.log(`Image not found for ${item.fields.title}`);
        return;
      }

      if (
        image.url &&
        typeof image.url === 'string' &&
        image.url.startsWith('//')
      ) {
        image.url = `https:${image.url}`;
      }
    });

    return response.items;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}

export async function fetchImagesByYear(year?: string) {
  try {
    const response = await client.getAssets({
      'metadata.tags.sys.id[in]': ['feed'],
    });

    const imagesByGivenYear = response.items.filter(item => {
      const yearTag = item.metadata.tags.find(tag => tag.sys.id === year);
      return yearTag !== undefined;
    });

    // Ensure all image URLs are absolute
    imagesByGivenYear.forEach(item => {
      const image = item.fields.file;

      if (!image) {
        console.log(`Image not found for ${item.fields.title}`);
        return;
      }

      if (
        image.url &&
        typeof image.url === 'string' &&
        image.url.startsWith('//')
      ) {
        image.url = `https:${image.url}`;
      }
    });

    return imagesByGivenYear;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchImageFeed, fetchImagesByYear };
