import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "./perfios.png";

const navigation = [
  { name: "Home /", href: "#" },
  { name: "Product Documentation /", href: "#" },
  { name: "Api Documentation", href: "#" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#1A0292] font-poppins">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 lg:px-8 bg-[#1A0292]"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Perfios</span>
                <img className="h-20 w-auto" src={logo} alt="" />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            {/* <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div> */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
              <a
                href="#"
                className="text-lg font-semibold leading-6 text-white"
              >
                Create Account <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>

          <nav className="bg-[#1A0292] mb-4">
            <div className="hidden lg:flex lg:gap-x-4 mx-24 bg-[#1A0292]">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-semibold leading-6 text-white"
                >
                  {item.name}
                </a>
              ))}

              <div className=" lg:flex lg:flex-1 lg:justify-end mb-4">
                <form method="GET">
                  <div className="relative text-gray-600 focus-within:text-gray-400">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <button
                        type="submit"
                        className="p-1 focus:outline-none focus:shadow-outline"
                      >
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                      </button>
                    </span>
                    <input
                      type="search"
                      name="q"
                      className="py-2 text-sm text-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                      placeholder="Search..."
                    />
                  </div>
                </form>
              </div>
            </div>
          </nav>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#1A0292] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Perfios</span>
                  <img className="h-8 w-auto" src={logo} alt="" />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Create Account
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
      </div>
      <div className="hidden lg:flex lg:gap-x-12 ">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-lg font-semibold leading-6 text-white"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* <div className="hidden lg:flex lg:gap-x-12 my-36 mx-24 bg-[#1A0292]">
{navigation.map((item) => (
  <a
    key={item.name}
    href={item.href}
    className="text-lg font-semibold leading-6 text-white"
  >
    {item.name}
  </a>
))}
</div> */}
    </>
  );
}
