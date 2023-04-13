import React, { useState } from 'react';
import { Icon } from '../icon/Icon';
import type { FortAwesomeIconName } from '../../types';
import { getRandomInt } from '../../utils';
import { Button } from '../index';

export interface IRandomIcon {
  iconNames: FortAwesomeIconName[]
  delay: number
}

export const RandomIcon = (prop: IRandomIcon) => {
  const [icon, setIcon] = useState(-1);

  const getIcon = () => {
    const randomIndex = getRandomInt(1953);

    const timerId = setTimeout(() => {
      setIcon(randomIndex);
    }, prop.delay);

    return () => {
      clearTimeout(timerId);
    };
  };

  return (
    <>
      {icon >= 0 ? <Icon iconName={prop.iconNames[icon]} /> : null}
      <Button onClick={getIcon}>
        Click me
      </Button>
    </>
  );
};
