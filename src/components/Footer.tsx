import { Logo } from './Logo';
import { Facebook } from './icons/Facebook';
import { Twitter } from './icons/Twitter';
import { Instagram } from './icons/Instagram';
import { Pinterest } from './icons/Pinterest';

export const Footer = () => (
  <footer className="w-full px-8 py-10 bg-[#232127] text-white flex items-start justify-around">
    <Logo color="#ffffff" />

    <div className="text-white">
      <h3>Features</h3>
      <ul>
        <li>Link Shortening</li>
        <li>Branded Links</li>
        <li>Analytics</li>
      </ul>
    </div>

    <div>
      <h3>Resources</h3>
      <ul>
        <li>Blog</li>
        <li>Developers</li>
        <li>Support</li>
      </ul>
    </div>

    <div>
      <h3>Company</h3>
      <ul>
        <li>About</li>
        <li>Our team</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>
    </div>

    <div className="flex">
      <Facebook />
      <Twitter />
      <Pinterest />
      <Instagram />
    </div>
  </footer>
);
