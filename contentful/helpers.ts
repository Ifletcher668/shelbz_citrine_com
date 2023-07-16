import { TypeImage } from 'generated/types/contentful';

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
});

export async function fetchImageFeed() {
  const entries = await client.getEntries({ content_type: 'image' });
  const items: TypeImage[] = entries.items;

  if (items) return items;
  console.log(`Error getting Entries.`);
}

export default { fetchImageFeed };
