import { Card } from './Card';

import BrandRecognition from '../assets/icon-brand-recognition.svg';
import DetailRecords from '../assets/icon-detailed-records.svg';
import FullyCustomizable from '../assets/icon-fully-customizable.svg';

export const Statistics = () => (
  <section className="mt-28">
    <h2 className="font-bold text-2xl">Advanced Statistics</h2>
    <p className="text-sm text-[#9E9AA7]">
      Track how your links are performing across the web with our advanced
      statistics dashboard
    </p>

    <div className="flex justify-between items-start mt-20">
      <Card
        icon={DetailRecords}
        title="Detailed Records"
        content="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform
        better decisions."
      />

      <Card
        icon={BrandRecognition}
        title="Brand Recognition"
        content="Boost your brand recognition with each click.
    Generic links don’t mean a thing. Branded links help instil confidence in
    your content."
      />

      <Card
        icon={FullyCustomizable}
        title="Fully Customizable"
        content="Improve brand awareness and content discoverability  through customizable links, supercharging audience
        engagement."
      />
    </div>
  </section>
);
