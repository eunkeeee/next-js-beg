import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about-us">
        <a className={router.pathname === "/about-us" ? "active" : ""}>
          About Us
        </a>
        <style jsx global>{`
          a {
            text-decoration: none;
          }
          .active {
            color: tomato;
          }
        `}</style>
      </Link>
    </nav>
  );
}
