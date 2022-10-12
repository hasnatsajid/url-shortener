import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="top">
        <div className="logo">
          <Link href="/">URL SHORTENER</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
