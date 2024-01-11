"use client";
import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";


const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

const admins = [
  "2021.soham.nimbalkar@ves.ac.in",
  "2021.anket.kadam@ves.ac.in",
  "2020.manav.tanna@ves.ac.in",
  "2020.shreyansh.singh@ves.ac.in",
  "2020.urvi.pandit@ves.ac.in",
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { data: session } = useSession();
  return (
    <header className="bg-[#090f1b]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-1 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className=" w-auto h-24"
              src="https://res.cloudinary.com/atharva7/image/upload/v1663181518/QuestWebsite/questlogo_xdierg.png"
              alt=""
            />
          </a>
        </div>
        
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          

          <a href="/events" className="text-sm font-semibold leading-6 text-white">
            Events
          </a>
          <a
            href="/blogs"
            className="text-sm font-semibold leading-6 text-white"
          >
            Blogs
          </a>
          <a href="/council" className="text-sm font-semibold leading-6 text-white">
            Council
          </a>
          {admins.includes(session?.user.email) && (
            <a
              href="/add-blog"
              className="text-sm font-semibold leading-6 text-white"
            >
              Add blog
            </a>
          )}
        </Popover.Group>
        
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
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
                
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="/blogs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Blogs
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Company
                </a>
                {session?.user.email == "soham.nimbalkar08@gmail.com" && (
                  <a
                    href="/add-blog"
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    Add blog
                  </a>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
