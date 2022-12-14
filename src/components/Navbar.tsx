import React from 'react';
import Logo from '../assets/logo.svg';
import { Button, ButtonType } from './Button';

export const Navbar = () => {
  const ref = React.createRef<HTMLButtonElement>();

  return (
    <nav className="flex items-center justify-between px-40 py-4 w-full">
      <div className="flex items-center">
        <img src={Logo} alt="Shortly logo" className="pr-12" />
        <ul className="flex list-none">
          <li className="pr-8 font-xs text-slate-500">Features</li>
          <li className="pr-8 font-xs text-slate-500">Pricing</li>
          <li className="font-xs text-slate-500">Resources</li>
        </ul>
      </div>
      <div>
        <Button
          rounded
          text="Login"
          buttonType={ButtonType.SECONDARY}
          marginRight
          ref={ref}
        />
        <Button rounded text="Sign Up" buttonType={ButtonType.PRIMARY} />
      </div>
    </nav>
  );
};
