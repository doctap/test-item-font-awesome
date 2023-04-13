import React from 'react';

interface IButton {
  onClick: () => void
  children: React.ReactNode
}

export const Button = (prop: IButton) => {
  return (
    <button onClick={prop.onClick} >{prop.children}</button>
  );
};
