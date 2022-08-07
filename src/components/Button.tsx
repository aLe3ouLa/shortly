import React from 'react';

export enum ButtonType {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  buttonType: ButtonType;
  marginRight?: boolean;
  rounded?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      text,
      buttonType = ButtonType.PRIMARY,
      marginRight,
      rounded = false,
      onClick,
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        style={{ zIndex: '3' }}
        className={`cursor-pointer px-4 py-2 ${
          buttonType === ButtonType.PRIMARY ? 'bg-[#29C7C7]' : 'bg-transparent'
        } ${buttonType === ButtonType.PRIMARY ? 'text-white' : 'text-black'}
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
