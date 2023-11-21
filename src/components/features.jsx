import React from "react";
import Image from 'next/image'
import { BiLineChart, BiSolidCircle } from 'react-icons/bi'
import { FaCubes, FaChartPie } from 'react-icons/fa'

import img from '@/assets/main-feature.png'
import img2 from '@/assets/cta2/cta2-img.png'

export default function Features() {
    return (
        <React.Fragment>
            <div id="features" className="container py-20 scroll-mt-16">
                <section className="text-center space-y-4">
                    <h2 className="text-4xl font-bold uppercase">Awesome Features</h2>

                    <p className={`px-2 mx-auto max-w-screen-md`}>I have helped businesses of all sizes grow their businesses through effective marketing and software development strategies. I am skilled in a variety of marketing channels, including social media, search engine optimization, and pay-per-click advertising. I am also experienced in developing and deploying custom software mobile applications.</p>
                </section>
                <section className="mt-12 flex flex-wrap items-center gap-y-4">
                    <div className="sm:w-1/2 px-4 wow fadeInLeft">
                        <Image className="w-auto h-auto" src={img} alt="Features Image" height="0" width="0" size="100vw" draggable={false} />
                    </div>
                    <div className="sm:w-1/2 px-4 space-y-6">
                        <section className="flex items-center space-x-6">
                            <div className="relative border rounded-full p-1.5 border-neutral-300 hover:bg-cyan-50">
                                <BiSolidCircle className={`absolute p-1 my-auto -right-2.5 fill-cyan-500 inset-y-0 rounded-full bg-white text-2xl`} />
                                <BiLineChart className={`text-6xl fill-cyan-700 hover:bg-cyan-400 rounded-full p-3`} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold">Expertise & Scalability</h3>
                                <p className={`text-lg`}>We have a team of experienced professionals who are experts in marketing and software development. We can scale our services to meet the needs of your business, whether you are a small startup or a large enterprise.</p>
                            </div>
                        </section>

                        <section className="flex items-center space-x-6">
                            <div className="relative border rounded-full p-1.5 border-neutral-300 hover:bg-cyan-50">
                                <BiSolidCircle className={`absolute p-1 my-auto -right-2.5 fill-cyan-500 inset-y-0 rounded-full bg-white text-2xl`} />
                                <FaCubes className={`text-6xl fill-cyan-700 hover:bg-cyan-400 rounded-full p-3`} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold">Flexibility & Security</h3>
                                <p className={`text-lg`}>We take security seriously and protect your data with the latest security measures. We are cost-effective and can save you money on your marketing and software development needs.</p>
                            </div>
                        </section>

                        <section className="flex items-center space-x-6">
                            <div className="relative border rounded-full p-1.5 border-neutral-300 hover:bg-cyan-50">
                                <BiSolidCircle className={`absolute p-1 my-auto -right-2.5 fill-cyan-500 inset-y-0 rounded-full bg-white text-2xl`} />
                                <FaChartPie className={`text-6xl fill-cyan-700 hover:bg-cyan-400 rounded-full p-3`} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold">Cost-effectiveness & Communication</h3>
                                <p className={`text-lg`}>We are cost-effective and can save you money on your marketing and software development needs. We are excellent communicators and keep you updated on our progress.</p>
                            </div>
                        </section>

                        <section className="flex items-center space-x-6">
                            <div className="relative border rounded-full p-1.5 border-neutral-300 hover:bg-cyan-50">
                                <BiSolidCircle className={`absolute p-1 my-auto -right-2.5 fill-cyan-500 inset-y-0 rounded-full bg-white text-2xl`} />
                                <FaChartPie className={`text-6xl fill-cyan-700 hover:bg-cyan-400 rounded-full p-3`} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold">Customer service</h3>
                                <p className={`text-lg`}>We are committed to providing excellent customer service and are always available to answer your questions and address your concerns.</p>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
            <section className={`bg-slate-900/95`}>
                <div className="container text-center text-white pt-12 max-w-sm md:max-w-lg lg:max-w-none">
                    <h2 className="text-4xl lg:text-5xl font-bold visible duration-300 delay-100" data-wow-duration="300ms" data-wow-delay="0ms" style={{animationName: "fadeInUp"}}>
                        The Network Build: A <span className={`text-cyan-400`}>Blueprint</span> for Success
                    </h2>
                    <p className="my-6 mx-auto max-w-screen-md" data-wow-duration="300ms" data-wow-delay="100ms">
                        A network build is the process of designing, deploying, and configuring a network infrastructure. It can be a complex and challenging task, but it is essential for ensuring the reliable and efficient operation of a network.
                    </p>
                    <Image className="w-full h-auto object-cover object-center" src={img2} alt="success banner" draggable={false} />
                </div>
            </section>
        </React.Fragment>
    )
}
