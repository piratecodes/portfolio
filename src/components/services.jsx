'use client'
import React from "react";
import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css'

import img1 from "@/assets/header/bg1.png";
import img2 from "@/assets/header/bg2.png";
import {BiLineChart, BiSolidCircle} from "react-icons/bi";

export default function Home() {
    return (

        <section id="services" className="container pt-16 scroll-mt-16">

            <div className="my-6 text-center space-y-4">
                <h2 className="text-3xl lg:text-5xl font-bold uppercase">My Services</h2>

                <p className={`px-2 mx-auto max-w-screen-md`}>If you are looking for a marketing and software development professional who can help you grow your business, then I am the person for you. I have the experience, the expertise, and the passion to help you achieve your goals. Contact me today to learn more about how I and my team can help you grow your business.</p>
            </div>

            <div className="mx-auto px-2 py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:max-w-screen-xl">
                {/*<div className="features">*/}
                    <div className="lg:w-8/12" data-wow-duration="300ms" data-wow-delay="0ms">
                        <div className="flex items-center space-x-6">
                            <div className="relative border rounded-full p-1.5 border-neutral-300 hover:bg-cyan-50">
                                <BiSolidCircle className={`absolute p-1 my-auto -right-2.5 fill-cyan-500 inset-y-0 rounded-full bg-white text-xl`} />
                                <BiLineChart className={`text-5xl fill-cyan-700 hover:bg-cyan-400 rounded-full p-3`} />
                            </div>
                            <div className="flex-1">
                                <h3 className="mb-1 text-2xl font-bold">UI/ UX design</h3>
                                <p className={`text-justify`}>Our UI/UX design services will help you create a visually appealing and user-friendly website or app that will keep your customers coming back for more.</p>
                            </div>
                        </div>
                    </div>


                    <div className="lg:w-8/12" data-wow-duration="300ms"
                         data-wow-delay="100ms">
                        <div className="flex items-center space-x-6">
                            <div className="relative border rounded-full p-1.5 border-neutral-300 hover:bg-cyan-50">
                                <BiSolidCircle className={`absolute p-1 my-auto -right-2.5 fill-cyan-500 inset-y-0 rounded-full bg-white text-xl`} />
                                <BiLineChart className={`text-5xl fill-cyan-700 hover:bg-cyan-400 rounded-full p-3`} />
                            </div>
                            <div className="flex-1">
                                <h3 className="mb-1 text-2xl font-bold">Backend Architecture</h3>
                                <p className={`text-justify`}>Our backend architecture is designed to be scalable, reliable, and secure, so you can be confident that your data is safe and your applications will always be available.</p>
                            </div>
                        </div>
                    </div>


                    <div className="lg:w-8/12" data-wow-duration="300ms"
                         data-wow-delay="200ms">
                        <div className="flex items-center space-x-6">
                            <div className="relative border rounded-full p-1.5 border-neutral-300 hover:bg-cyan-50">
                                <BiSolidCircle className={`absolute p-1 my-auto -right-2.5 fill-cyan-500 inset-y-0 rounded-full bg-white text-xl`} />
                                <BiLineChart className={`text-5xl fill-cyan-700 hover:bg-cyan-400 rounded-full p-3`} />
                            </div>
                            <div className="flex-1">
                                <h3 className="mb-1 text-2xl font-bold">SEO & SEM Services</h3>
                                <p className={`text-justify`}><strong className={`font-semibold`}>SEO:</strong> Improve your website&apos;s ranking in search engines and drive more traffic to your site.</p>
                                <p className={`text-justify`}><strong className={`font-semibold`}>SEM:</strong> Get your website in front of more potential customers through paid search ads</p>
                            </div>
                        </div>
                    </div>


                    <div className="lg:w-8/12" data-wow-duration="300ms"
                         data-wow-delay="300ms">
                        <div className="flex items-center space-x-6">
                            <div className="relative border rounded-full p-1.5 border-neutral-300 hover:bg-cyan-50">
                                <BiSolidCircle className={`absolute p-1 my-auto -right-2.5 fill-cyan-500 inset-y-0 rounded-full bg-white text-xl`} />
                                <BiLineChart className={`text-5xl fill-cyan-700 hover:bg-cyan-400 rounded-full p-3`} />
                            </div>
                            <div className="flex-1">
                                <h3 className="mb-1 text-2xl font-bold">Android & iOS App</h3>
                                <p className={`text-justify`}>Our easy-to-use app is available on both Android and iOS devices, so you can reach your customers on the platform they prefer.</p>
                            </div>
                        </div>
                    </div>


                    <div className="lg:w-8/12" data-wow-duration="300ms"
                         data-wow-delay="400ms">
                        <div className="flex items-center space-x-6">
                            <div className="relative border rounded-full p-1.5 border-neutral-300 hover:bg-cyan-50">
                                <BiSolidCircle className={`absolute p-1 my-auto -right-2.5 fill-cyan-500 inset-y-0 rounded-full bg-white text-xl`} />
                                <BiLineChart className={`text-5xl fill-cyan-700 hover:bg-cyan-400 rounded-full p-3`} />
                            </div>
                            <div className="flex-1">
                                <h3 className="mb-1 text-2xl font-bold">Win App</h3>
                                <p className={`text-justify`}>Win App Service is a powerful cloud platform that lets you build, deploy, and scale your Windows apps quickly and easily.</p>
                            </div>
                        </div>
                    </div>


                    <div className="lg:w-8/12" data-wow-duration="300ms"
                         data-wow-delay="500ms">
                        <div className="flex items-center space-x-6">
                            <div className="relative border rounded-full p-1.5 border-neutral-300 hover:bg-cyan-50">
                                <BiSolidCircle className={`absolute p-1 my-auto -right-2.5 fill-cyan-500 inset-y-0 rounded-full bg-white text-xl`} />
                                <BiLineChart className={`text-5xl fill-cyan-700 hover:bg-cyan-400 rounded-full p-3`} />
                            </div>
                            <div className="flex-1">
                                <h3 className="mb-1 text-2xl font-bold">API Services</h3>
                                <p className={`text-justify`}>Our API service provides a simple and easy way to integrate your business with our platform, giving you access to our vast resources and helping you to grow your business.</p>
                            </div>
                        </div>
                    </div>

                {/*</div>*/}
            </div>

        </section>

    )
}
