import Logo from '../assets/logo.svg';

export const Navbar = () => {
  return (
    <nav>
      <img src={Logo} alt="Shortly logo" />

      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
    </nav>
  );
};
