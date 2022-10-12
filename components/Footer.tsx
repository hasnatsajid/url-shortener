import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className="footerBox">© 2022 Hassuu - Tool to shorten a long link.</div>
      <ul>
        <li>
          <Link href="/terms-of-service">Terms of Service</Link>
        </li>
        <li>
          <Link href="/">|</Link>
        </li>
        <li>
          <Link href="/privacy">Privacy</Link>
        </li>
        <li>
          <Link href="/">|</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
