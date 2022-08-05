import { Button, ButtonType } from './Button';
import Decorator from '../assets/bg-shorten-desktop.svg';

export const Input = () => (
  <div
    className="bg-[#3B3054] px-2 py-3 h-44 rounded-md mt-10 relative"
    style={{ zIndex: '1' }}
  >
    <img
      src={Decorator}
      alt=""
      className="absolute top-0 left-0 w-full h-full"
      style={{ zIndex: '2' }}
    />
    <div className="flex items-center justify-center h-full">
      <input
        className="px-4 py-2 rounded-md mr-4 w-4/5 bg-white "
        style={{ zIndex: '3' }}
        type="text"
        placeholder="Shorten a link here..."
      />
      <Button type={ButtonType.PRIMARY} text="Shorten it" />
    </div>
  </div>
);