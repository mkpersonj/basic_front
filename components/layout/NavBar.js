import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/board">Board</Link>
      <Link href="/about">About</Link>
    </nav>
  );
};

export default NavBar;
