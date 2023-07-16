import type { Asset, Entry, EntryFields } from 'contentful';

export interface TypeImageFields {
  image: Asset;
  caption?: EntryFields.Symbol;
}

// @ts-ignore
export type TypeImage = Entry<TypeImageFields>;
