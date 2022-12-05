import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

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

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                User
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/login">
                        <p
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Login
                        </p>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/signup">
                        <p
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Sign up
                        </p>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          {/* <li>
            <Link href="/login" legacyBehavior>
              <a className={router.pathname == "/login" ? "text-tertiary" : ""}>
                login
              </a>
            </Link>
          </li>
          <li>
            <Link href="/signup" legacyBehavior>
              <a
                className={router.pathname == "/signup" ? "text-tertiary" : ""}
              >
                sign up
              </a>
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
