import React from 'react';

export enum ButtonType {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

interface ButtonProps {
  text: string;
  type: ButtonType;
  marginRight?: boolean;
  rounded?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, type = ButtonType.PRIMARY, marginRight, rounded = false }, ref) => {
    return (
      <button
        ref={ref}
        className={`cursor-pointer px-4 py-2 ${
          type === ButtonType.PRIMARY ? 'bg-[#29C7C7]' : 'bg-transparent'
        } ${type === ButtonType.PRIMARY ? 'text-white' : 'text-black'}
        ${marginRight && 'mr-4'}
        ${rounded ? 'rounded-full' : 'rounded-md'}
        hover:bg-[#29C7C7]/50
        `}
      >
        {text}
      </button>
    );
  }
);
