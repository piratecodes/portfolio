'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RxHamburgerMenu } from 'react-icons/rx'

import ScrollBehaviour from '@/utils/scrollBehaviour'
import logo from '@/assets/logo.svg'

export default function Nav(){
    const navRef = React.useRef()
    const toogleMenu = () => {
        if (navRef.current.classList.contains('hidden')) {
            navRef.current.classList.remove('hidden')
            navRef.current.classList.add('block')
        }
        else if (navRef.current.classList.contains('block')) {
            navRef.current.classList.remove('block')
            navRef.current.classList.add('hidden')
        }
    }
    // const handleScroll = (e) => {
    //     // first prevent the default behavior
    //     e.preventDefault();
    //     // get the href and remove everything before the hash (#)
    //     const href = e.currentTarget.href;
    //     const targetId = href.replace(/.*\#/, "");
    //     // get the element by id and use scrollIntoView
    //     const elem = document.getElementById(targetId);
    //     window.scrollTo({
    //         top: elem?.getBoundingClientRect().top,
    //         behavior: "smooth"
    //     })
    // };

    //ScrollProgress
    const completion = ScrollBehaviour()

    return(
        <nav id="main-menu" className="sticky top-0 z-50 relative flex flex-wrap items-center content-between py-3 px-4 bg-white/60 backdrop-blur-sm" role="banner">
            <div className="container flex flex-col lg:flex-row md:justify-between items-start lg:items-center">
                <section className="flex flex-row md:flex-col lg:flex-none justify-between w-full lg:w-auto">
                    <Link className="inline-block pt-1 pb-1 mr-4 text-lg whitespace-no-wrap flex flex-row space-x-1.5 items-center" href="/"><Image className={`h-10 w-auto`} src={logo} alt="logo" height="0" width="0" size="100vw" /><label className={`text-2xl font-bold dark:text-zinc-800`}>Subham Sarkar</label></Link>
                    <button type="button" className="md:hidden" data-toggle="collapse" data-target=".navbar-collapse" onClick={toogleMenu}>
                        <span className="sr-only">Toggle navigation</span>
                        <RxHamburgerMenu className={`text-3xl`} />
                    </button>
                </section>
                <section ref={navRef} className="hidden w-full lg:w-auto md:flex md:flex-row lg:place-content-end pt-4 lg:pt-0 ease-out">
                    <ul className="h-64 py-1.5 md:py-0 md:h-auto flex flex-col md:flex-row pl-0 mb-0 list-reset justify-between w-full space-y-4 md:space-y-0 md:space-x-5 overflow-auto text-lg dark:text-stone-800">
                        <Link className="hover:underline underline-offset-2 text-decoration-neutral-100 dark:text-decoration-neutral-800" href={{ pathname: '/' }}>Home</Link>
                        <Link className="hover:underline underline-offset-2 text-decoration-neutral-100 dark:text-decoration-neutral-800" href={{ pathname: '/', hash: "features" }}>Features</Link>
                        <Link className="hover:underline underline-offset-2 text-decoration-neutral-100 dark:text-decoration-neutral-800" href={{ pathname: '/', hash: "services" }}>Services</Link>
                        <Link className="hover:underline underline-offset-2 text-decoration-neutral-100 dark:text-decoration-neutral-800" href={{ pathname: '/', hash: "about" }}>About</Link>
                        <Link className="hover:underline underline-offset-2 text-decoration-neutral-100 dark:text-decoration-neutral-800" href={{ pathname: '/', hash: "meet-team" }}>Team</Link>
                        <Link className="hover:underline underline-offset-2 text-decoration-neutral-100 dark:text-decoration-neutral-800" href={{ pathname: '/', hash: "get-in-touch" }}>Contact</Link>
                    </ul>
                </section>
            </div>
            <span className='absolute left-0 bottom-0 h-0.5 w-full rounded-r-full bg-gray-400 shadow shadow-stone-400 dark:bg-zinc-700 transition transform ease-linear duration-300' style={{ transform: `translateX(${completion - 100}%)` }} />
        </nav>
    )
}