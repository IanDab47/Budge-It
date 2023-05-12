import { Link } from "wouter";

import "./style.less";

export default function Navbar() {
  return (
    <nav>
      <div className="main-tabs">
        <Link href="/">Home</Link>
        <Link href="#">App</Link>
        <Link href="#">About</Link>
      </div>

      <div className="account-tabs">
        <Link href="/sign-in">Sign In</Link>
        <Link href="/register">Sign Up</Link>
      </div>
    </nav>
  );
}
