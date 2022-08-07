import { Button, ButtonType } from './Button';
import Decorator from '../assets/bg-boost-desktop.svg';

export const CTA = () => (
  <div
    className="bg-[#3B3054] px-2h-44 rounded-md relative w-full"
    style={{ zIndex: '1' }}
  >
    <img
      src={Decorator}
      alt=""
      className="absolute top-0 left-0 w-full h-full"
      style={{ zIndex: '2' }}
    />
    <div className="flex flex-col items-center justify-center h-full py-8">
      <h2 className="font-bold text-xl text-white mb-4">
        Boost your links today
      </h2>
      <Button buttonType={ButtonType.PRIMARY} text="Get Started" rounded />
    </div>
  </div>
);
