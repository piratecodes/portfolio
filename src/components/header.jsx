'use client'
import React from "react";
import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css'

import img1 from '@/assets/header/bg1.png'
import img2 from '@/assets/header/bg2.png'
import Link from "next/link";

export default function Home() {
    const handleScroll = (e) => {
        // first prevent the default behavior
        e.preventDefault();
        // get the href and remove everything before the hash (#)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        // get the element by id and use scrollIntoView
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });
    };
    function imageHold(){
        return(
            <div role="status"
                 className="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                    <path
                        d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        )
    }
    return (
        <React.Fragment>
            <header id={`home`} className={`bg-neutral-200/25 scroll-mt-16`}>
                <Splide
                    options={ {
                        rewind: true, type: 'fade', autoplay: 'true', snap: true,  arrows: true,
                    } }
                    aria-label="Team Achievements"
                >
                    <SplideSlide>
                        <figure className={`relative w-full h-auto object-contain`}>
                            <Image src={img1} alt={`heading 1`} className={`z-10 h-96 md:h-80 w-full lg:h-auto object-cover object-right`} width="0" height="0" sizes={`100vw`} placeholder="blur" onBlur={imageHold} />
                            <figcaption className="top-12 md:top-1/4 left-12 md:left-24 absolute z-20 inset-0 w-full h-full max-w-xs md:max-w-lg text-white">
                                <h2 className={`text-2xl md:text-3xl font-bold uppercase`}> <span className={`text-cyan-400`}>Grow</span> Your Business with Marketing and Software Development</h2>
                                <p className={`my-3 text-justify`}>We help businesses grow their online presence through effective marketing and software development strategies. </p>
                                <Link className="outline-none inline-block align-middle text-center font-normal rounded leading-normal no-underline bg-cyan-400 text-white border-b-4 border-cyan-600 hover:bg-cyan-700 py-2 px-3 leading-tight text-xl" href="/#read-features" onClick={handleScroll}>Read More</Link>
                            </figcaption>
                        </figure>
                    </SplideSlide>

                    <SplideSlide>
                        <figure className={`relative w-full h-auto object-contain`}>
                            <Image src={img2} alt={`heading 2`} className={`z-10 h-96 md:h-80 w-full lg:h-auto object-cover object-right`} width="0" height="0" sizes={`100vw`} placeholder="blur" onBlur={imageHold} />
                            <figcaption className="top-12 md:top-1/4 left-12 md:left-24 absolute z-20 inset-0 w-full h-full max-w-xs md:max-w-lg text-white">
                                <h2 className={`text-2xl md:text-3xl font-bold uppercase`}>Let Me Help You Take Your Business to the <span className={`text-cyan-400`}>Next</span> Level</h2>
                                <p className={`my-3 text-justify `}>We are passionate about helping businesses grow. We will use our expertise in marketing and technology to help you take your business to the next level.</p>
                                <Link className="outline-none inline-block align-middle text-center font-normal rounded leading-normal no-underline bg-cyan-400 text-white border-b-4 border-cyan-600 hover:bg-cyan-700 py-2 px-3 leading-tight text-xl" href="/#read-features" onClick={handleScroll}>Read More</Link>
                            </figcaption>
                        </figure>
                    </SplideSlide>

                </Splide>

                <section id={`read-features`} className="container py-10 scroll-mt-16">
                    <div className="flex flex-wrap items-center gap-y-2">
                        <div className="sm:w-3/4 pr-4 pl-4 space-y-4">
                            <h1 className={`text-2xl lg:text-3xl font-bold`}>A Proven Track Record of Success in Helping Businesses Grow</h1>
                            <p className={``}>
                                I am a marketing and software development professional who helps businesses grow in today&apos;s digital age. I understand that the way businesses market themselves has changed dramatically in recent years, with the rise of social media and mobile apps. Businesses need to find new ways to reach their target audiences, and that&apos;s where I come in.
                            </p>
                        </div>
                        <div className="sm:w-1/4 pr-4 pl-4 text-right">
                            <Link className="inline-block align-middle text-center select-none border-b-4 border-cyan-700 font-normal whitespace-no-wrap rounded leading-normal no-underline bg-cyan-400 text-white hover:bg-cyan-600 py-2 px-3 leading-tight text-xl" href="/#get-in-touch" onClick={handleScroll}>Contact Now!</Link>
                        </div>
                    </div>
                </section>
            </header>
        </React.Fragment>
    )
}
