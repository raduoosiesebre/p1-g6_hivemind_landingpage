import {Disclosure, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react'
import {Bars3Icon, BellIcon, XMarkIcon} from '@heroicons/react/24/outline'


export default function NavigationBar(){
    const navigation = [
        { name: 'Home', href: '/', current: true },
        { name: 'Productes', href: '/products', current: false },
        { name: 'Blog', href: '#', current: false },
        { name: 'Contacta\'ns', href: '#', current: false },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return(
        <Disclosure as="nav" className="bg-black/60 rounded-3xl mt-2 w-5/6 mx-auto backdrop-blur-2xl sticky top-2 z-10">
            <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8 ">
                <div className="relative flex h-16 items-center justify-between">
 
                    {/* Mobile menu button and menu panel */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    {/* Hamburger / Cross Icon Toggle */}
                                    <Disclosure.Button
                                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    >
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>

                                    {/* Mobile Menu Panel */}
                                    <Disclosure.Panel className="absolute left-0 z-10 mt-72 w-48 rounded-lg bg-gray-800 shadow-lg">
                                        <div className="space-y-1 px-2 pb-3 pt-2">
                                            {navigation.map((item) => (
                                                <Disclosure.Button
                                                    key={item.name}
                                                    as="a"
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-gray-900 text-white'
                                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'block rounded-md px-3 py-2 text-base font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </Disclosure.Button>
                                            ))}
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>


                    {/* Logo Section */}
                    <div className="flex items-center ml-10">
                        <img
                            alt="Your Company"
                            src="public/hivemind_logo_nobg.png"
                            className="h-8 w-auto"
                        />
                    </div>

                    {/* Links Section */}
                    <div className="flex-1 flex justify-center">
                        <div className="hidden sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Profile Section */}
                    <div className="flex items-center space-x-4">
                        <button
                            type="button"
                            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative">
                            <div>
                                <MenuButton
                                    className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        alt="User profile"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        className="h-8 w-8 rounded-full"
                                    />
                                </MenuButton>
                            </div>
                            <MenuItems
                                className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5"
                            >
                                <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                                        Your Profile
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                                        Settings
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                                        Sign out
                                    </a>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </Disclosure.Button>
                    ))}
                </div>
            </Disclosure.Panel>
        </Disclosure>
    );
}