import React from 'react'
import { BsCup, BsCartFill, BsRocketTakeoffFill } from 'react-icons/bs'
import { FaBullhorn,  FaHeart, FaImage } from  'react-icons/fa'
export default function Process(){
    return(
        <div className={`text-white bg-slate-900 py-16 scroll-mt-16`}>
            <div className="container">
                <section className="text-center space-y-4">
                    <h2 className="text-4xl font-bold uppercase">Our Process</h2>

                    <p className={`mx-auto px-2 max-w-screen-md`}>Our process is simple, yet effective. We first understand your needs and goals. Then, we develop a custom solution that meets those needs. We then implement the solution and provide ongoing support. Our goal is to help you achieve your goals and exceed your expectations.</p>
                </section>

                <div className="flex flex-wrap text-center justify-center">
                    <section className="p-4 md:w-1/3 sm:w-1/2">
                        <div className="flex flex-col items-center space-y-2.5" data-wow-duration="400ms" data-wow-delay="0ms">
                            <div className="relative p-4 rounded-full border border-cyan-400">
                                <span className={`absolute z-30 -top-2 inset-x-0 w-5 h-5 mx-auto bg-white rounded-full text-black border border-cyan-400 content-center`}> 1 </span>
                                <BsCup className={`z-20 text-4xl`} />
                            </div>
                            <h3 className={`uppercase font-bold text-2xl`}>MEET</h3>
                        </div>
                    </section>
                    <section className="p-4 md:w-1/3 sm:w-1/2">
                        <div className="flex flex-col items-center space-y-2.5" data-wow-duration="400ms" data-wow-delay="0ms">
                            <div className="relative p-4 rounded-full border border-cyan-400">
                                <span className={`absolute z-30 -top-2 inset-x-0 w-5 h-5 mx-auto bg-white rounded-full text-black border border-cyan-400 content-center`}> 2 </span>
                                <FaBullhorn className={`z-20 text-4xl`} />
                            </div>
                            <h3 className={`uppercase font-bold text-2xl`}>Plan</h3>
                        </div>
                    </section>
                    <section className="p-4 md:w-1/3 sm:w-1/2">
                        <div className="flex flex-col items-center space-y-2.5" data-wow-duration="400ms" data-wow-delay="0ms">
                            <div className="relative p-4 rounded-full border border-cyan-400">
                                <span className={`absolute z-30 -top-2 inset-x-0 w-5 h-5 mx-auto bg-white rounded-full text-black border border-cyan-400 content-center`}> 3 </span>
                                <FaImage className={`z-20 text-4xl`} />
                            </div>
                            <h3 className={`uppercase font-bold text-2xl`}>DESIGN</h3>
                        </div>
                    </section>
                    <section className="p-4 md:w-1/3 sm:w-1/2">
                        <div className="flex flex-col items-center space-y-2.5" data-wow-duration="400ms" data-wow-delay="0ms">
                            <div className="relative p-4 rounded-full border border-cyan-400">
                                <span className={`absolute z-30 -top-2 inset-x-0 w-5 h-5 mx-auto bg-white rounded-full text-black border border-cyan-400 content-center`}> 4 </span>
                                <FaHeart className={`z-20 text-4xl`} />
                            </div>
                            <h3 className={`uppercase font-bold text-2xl`}>DEVELOP</h3>
                        </div>
                    </section>
                    <section className="p-4 md:w-1/3 sm:w-1/2">
                        <div className="flex flex-col items-center space-y-2.5" data-wow-duration="400ms" data-wow-delay="0ms">
                            <div className="relative p-4 rounded-full border border-cyan-400">
                                <span className={`absolute z-30 -top-2 inset-x-0 w-5 h-5 mx-auto bg-white rounded-full text-black border border-cyan-400 content-center`}> 5 </span>
                                <BsCartFill className={`z-20 text-4xl`} />
                            </div>
                            <h3 className={`uppercase font-bold text-2xl`}>TESTING</h3>
                        </div>
                    </section>
                    <section className="p-4 md:w-1/3 sm:w-1/2">
                        <div className="flex flex-col items-center space-y-2.5" data-wow-duration="400ms" data-wow-delay="0ms">
                            <div className="relative p-4 rounded-full border border-cyan-400">
                                <span className={`absolute z-30 -top-2 inset-x-0 w-5 h-5 mx-auto bg-white rounded-full text-black border border-cyan-400 content-center`}> 6 </span>
                                <BsRocketTakeoffFill className={`z-20 text-4xl`} />
                            </div>
                            <h3 className={`uppercase font-bold text-2xl`}>LAUNCH</h3>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}