

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


import logo from "../../assets/image001.jpg";

const navigation = [
  { name: 'Home Page', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Contact Us', href: '#' },
  { name: 'About Us', href: '#' },
]

export default function Header() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
              <div className="lg:flex lg:flex-1 hidden lg:show">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src={logo}
                    className="h-8 w-auto"
                  />
                </a>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
               
              </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
              <div className="fixed inset-0 z-50" />
              <DialogPanel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      alt=""
                      src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                      className="h-8 w-auto"
                    />
                  </a>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="py-6">
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </Dialog>
          </header>
    // <Disclosure as="nav" className="bg-white">
    //   <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    //     <div className="relative flex h-16 items-center justify-between">
    //       <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //         {/* Mobile menu button*/}
    //         <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
    //           <span className="absolute -inset-0.5" />
    //           <span className="sr-only">Open main menu</span>
    //           <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
    //           <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
    //         </DisclosureButton>
    //       </div>
    //       <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    //         <div className="flex shrink-0 items-center">
    //           <img
    //             alt="Your Company"
    //             src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
    //             className="h-8 w-auto"
    //           />
    //         </div>
    //         <div className="hidden sm:ml-6 sm:block">
    //           <div className="flex space-x-4">
    //             {navigation.map((item) => (
    //               <a
    //                 key={item.name}
    //                 href={item.href}
    //                 aria-current={item.current ? 'page' : undefined}
    //                 className={classNames(
    //                   item.current ? 'border-b-2' : 'text-gray-800 hover:border-b-2 ',
    //                   'px-3 py-2 text-sm font-medium',
    //                 )}
    //               >
    //                 {item.name}
    //               </a>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
         
    //     </div>
    //   </div>

    //   <DisclosurePanel className="sm:hidden">
    //     <div className="space-y-1 px-2 pt-2 pb-3">
    //       {navigation.map((item) => (
    //         <DisclosureButton
    //           key={item.name}
    //           as="a"
    //           href={item.href}
    //           aria-current={item.current ? 'page' : undefined}
    //           className={classNames(
    //             item.current ? 'bg-gray-900 text-white' : ' hover:bg-gray-700 hover:text-white',
    //             'block rounded-md px-3 py-2 text-base font-medium',
    //           )}
    //         >
    //           {item.name}
    //         </DisclosureButton>
    //       ))}
    //     </div>
    //   </DisclosurePanel>
    // </Disclosure>
  )
}
