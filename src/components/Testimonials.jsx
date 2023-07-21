'use client'
import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css'
import Image from "next/image";
import img1 from "@/assets/header/bg1.png";
import img2 from "@/assets/header/bg2.png";

export default function Testimonials(){
    return(
        <div className={`bg-stone-800/75 py-16 px-10 scroll-mt-16`}>
            <section className={`container max-w-screen-lg`}>
                <Splide
                    options={ {
                        rewind: true, type: 'fade', autoplay: 'true', snap: true,  arrows: true,
                    } }
                    aria-label="Team Achievements"
                >
                    <SplideSlide>
                        <figure className={`relative w-full h-auto object-contain`}>
                            <Image src={img1} alt={`ffs`} className={`z-10 h-96 md:h-80 w-full lg:h-auto object-cover object-left`} width="0" height="0" sizes={`100vw`} />
                            <figcaption className="top-12 md:top-1/4 left-12 md:left-24 absolute z-20 inset-0 w-full h-full max-w-xs md:max-w-lg text-white">
                                <h2 className={`text-2xl md:text-3xl font-bold uppercase`}><span className={`text-cyan-400`}>Multi</span> is the best Onepage html template</h2>
                                <p className={`my-3 text-justify`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna incididunt ut labore aliqua. </p>
                                <a className="outline-none inline-block align-middle text-center font-normal rounded leading-normal no-underline bg-cyan-400 text-white border-b-4 border-cyan-600 hover:bg-cyan-700 py-2 px-3 leading-tight text-xl" href="#">Read More</a>
                            </figcaption>
                        </figure>
                    </SplideSlide>

                    <SplideSlide>
                        <figure className={`relative w-full h-auto object-contain`}>
                            <Image src={img2} alt={`ffs`} className={`z-10 h-96 md:h-80 w-full lg:h-auto object-cover object-left`} width="0" height="0" sizes={`100vw`} />
                            <figcaption className="top-12 md:top-1/4 left-12 md:left-24 absolute z-20 inset-0 w-full h-full max-w-xs md:max-w-lg text-white">
                                <h2 className={`text-2xl md:text-3xl font-bold uppercase`}>Beautifully designed <span className={`text-cyan-400`}>free</span> one page template</h2>
                                <p className={`my-3 text-justify `}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna incididunt ut labore aliqua. </p>
                                <a className="outline-none inline-block align-middle text-center font-normal rounded leading-normal no-underline bg-cyan-400 text-white border-b-4 border-cyan-600 hover:bg-cyan-700 py-2 px-3 leading-tight text-xl" href="#">Read More</a>
                            </figcaption>
                        </figure>
                    </SplideSlide>

                </Splide>
            </section>
        </div>
    )
}