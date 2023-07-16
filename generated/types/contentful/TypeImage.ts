import type { Asset, Entry, EntryFields } from 'contentful';

export interface TypeImageFields {
  image: Asset;
  caption?: EntryFields.Symbol;
}

export type TypeImage = Entry<TypeImageFields>;
