import { Button, ButtonType } from './Button';

export const Input = () => (
  <div className="bg-slate-500 px-2 py-3">
    <input
      className="px-4 py-3 rounded-md mr-4"
      type="text"
      placeholder="Shorten a link here..."
    />
    <Button type={ButtonType.PRIMARY} text="Shorten it" />
  </div>
);
