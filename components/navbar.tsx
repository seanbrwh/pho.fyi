import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <header className="w-full h-16 bg-secondary fixed top-0 flex flex-row justify-between items-center px-5 z-10">
      <div className="w-1/2 font-serif text-2xl">Panda Moon Art Creations</div>
      <nav className="w-1/2 font-sans text-lg capitalize font-semibold">
        <ul className="flex flex-row justify-around ">
          <li>
            <Link href="/" legacyBehavior>
              <a className={router.pathname == "/" ? "text-tertiary" : ""}>
                home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a className={router.pathname == "/about" ? "text-tertiary" : ""}>
                about
              </a>
            </Link>
          </li>
          <li>
            <Link href="/gallery" legacyBehavior>
              <a
                className={router.pathname == "/gallery" ? "text-tertiary" : ""}
              >
                gallery
              </a>
            </Link>
          </li>
          <li>
            <Link href="/shop" legacyBehavior>
              <a className={router.pathname == "/shop" ? "text-tertiary" : ""}>
                shop
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog" legacyBehavior>
              <a className={router.pathname == "/blog" ? "text-tertiary" : ""}>
                blog
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
