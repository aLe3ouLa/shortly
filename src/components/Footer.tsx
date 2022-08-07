import { Logo } from './Logo';
import FB from '../assets/icon-facebook.svg';
import Twitter from '../assets/icon-twitter.svg';
import Pinterest from '../assets/icon-pinterest.svg';
import IG from '../assets/icon-instagram.svg';

export const Footer = () => (
  <footer className="w-full p-8 bg-[#232127] text-white columns-4 gap-3">
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

    <div>
      <img src={FB} />
      <img src={Twitter} />
      <img src={Pinterest} />
      <img src={IG} />
    </div>
  </footer>
);
