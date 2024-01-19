import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar () {
    return(
        <nav className=" bg-violet-400">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* <Link href=# className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src= className="h-8" alt="Logo" />
        </Link> */}
        <div className="flex space-x-3 ">
            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex  flex-wrap space-x-8 rtl:space-x-reverse flex-row mt-0 border-0 items-center">
            <li>
                <Link href="#" className="block py-2 px-3 md:p-0 text-gray-900 hover:text-pink-100" aria-current="page">Inicio</Link>
            </li>
            <li>
                <Link href="#" className="block py-2 px-3 md:p-0 text-gray-900 hover:text-pink-100">Sobre mi</Link>
            </li>
            <li>
                <Link href="#" className="block py-2 px-3 md:p-0 text-gray-900 hover:text-pink-100 ">Proyectos</Link>
            </li>
            <li>
                <Link href="#" className="block py-2 px-3 md:p-0 text-gray-900 hover:text-pink-100">Contacto</Link>
            </li>
            </ul>
        </div>
        </div>
        </nav>

    )
}