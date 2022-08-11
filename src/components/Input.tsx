import { Button, ButtonType } from './Button';
import Decorator from '../assets/bg-shorten-desktop.svg';
import { useState } from 'react';
import { Link } from './Link';

interface DataType {
  code: string;
  original_link: string;
  full_short_link: string;
  full_short_link2: string;
  full_short_link3: string;
}

export const Input = () => {
  const [query, setQuery] = useState<string>('');
  const [data, setData] = useState<DataType>();

  const onHandleClick = async () => {
    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${query}`);
    const data = await result.json();

    setData(data.result);
  };

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <div
        className="bg-[#3B3054] px-2 py-3 h-44 rounded-md mt-10 relative w-3/4"
        style={{ zIndex: '1' }}
      >
        <img
          src={Decorator}
          alt=""
          className="absolute top-0 left-0 w-full h-full rounded-md"
          style={{ zIndex: '2' }}
        />
        <div className="flex items-center justify-center h-full">
          <input
            className="px-4 py-2 rounded-md mr-4 w-4/5 bg-white "
            style={{ zIndex: '3' }}
            type="text"
            placeholder="Shorten a link here..."
            value={query}
            onChange={onHandleChange}
          />
          <Button
            buttonType={ButtonType.PRIMARY}
            text="Shorten it"
            onClick={onHandleClick}
          />
        </div>
      </div>

      {data && (
        <div className="w-full px-24 bg-[#efefef] py-12 flex flex-col items-center">
          <Link
            original={data?.original_link}
            short_link={data?.full_short_link}
          />
          <Link
            original={data?.original_link}
            short_link={data?.full_short_link2}
          />
          <Link
            original={data?.original_link}
            short_link={data?.full_short_link3}
          />
        </div>
      )}
    </>
  );
};
