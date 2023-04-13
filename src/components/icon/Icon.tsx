import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//
import type { FortAwesomeIconName } from '../../types';

interface IIcon {
  iconName: FortAwesomeIconName
}

export const Icon = (prop: IIcon) => {
  return (
    <FontAwesomeIcon icon={prop.iconName} />
  );
};
