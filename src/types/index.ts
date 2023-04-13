import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export type IBiblicalWrapping<TObject extends {}> = {
  [key in keyof TObject]: TObject[key]
};

export type FortAwesomeIconName = IBiblicalWrapping<IconProp>;
