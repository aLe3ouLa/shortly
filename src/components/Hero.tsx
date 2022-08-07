import { Button, ButtonType } from './Button';

import Illustration from '../assets/illustration-working.svg';

export const Hero = () => (
  <section className="flex mt-24 px-36">
    <div className="flex flex-col items-start text-left text-[#252329] basis-12/12 ">
      <h1 className="font-bold mb-2">More than just shorter links</h1>
      <p className="text-[#9E9AA7] mb-8 text-md">
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>

      <Button rounded buttonType={ButtonType.PRIMARY} text="Get Started" />
    </div>
    <img
      src={Illustration}
      alt={'Illustration'}
      width="600"
      className="h-full ml-40"
    />
  </section>
);
