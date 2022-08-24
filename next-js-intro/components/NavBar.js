import Link from "next/link";
import { useRouter } from "next/router";
export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/">
        <a
          style={{ color: router.pathname === "/" ? "red" : "blue" }}
          className="hello"
        >
          Home
        </a>
      </Link>
      <Link href="/about-us">
        <a style={{ color: router.pathname === "/about-us" ? "red" : "blue" }}>
          About Us
        </a>
      </Link>
    </nav>
  );
}
