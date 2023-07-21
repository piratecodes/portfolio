import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import logo from "@/assets/logo.svg";
export default function Footer(){
    return(

        <footer className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <Link className="inline-block pt-1 pb-1 mr-4 text-lg whitespace-no-wrap flex flex-row space-x-1.5 items-center" href="/">
                        <Image className={`h-10 w-auto`} src={logo} alt="logo" height="0" width="0" size="100vw" />
                        <label className={`text-2xl font-bold`}>Subham Sarkar</label>
                    </Link>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="/terms-and-condition" className="hover:underline">Terms &amp; Conditions</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
            <p className="text-sm text-gray-500 sm:text-center">© 2023 <Link
                href="/#" className="hover:underline">Subham™</Link>. All Rights Reserved.
            </p>
        </footer>

    )
}