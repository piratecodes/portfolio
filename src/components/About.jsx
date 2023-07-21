import React from 'react'

import { BsFillCheckSquareFill } from 'react-icons/bs'
export default function About(){
    return(
        <div id={`about`} className="container py-20 scroll-mt-16">

            <section className="my-6 text-center space-y-4">
                <h2 className="text-3xl lg:text-5xl font-bold uppercase">About Me</h2>

                <p className={`mx-auto px-2 max-w-screen-md`}>I am part of a small team of experienced and dedicated professionals who share my passion for helping businesses grow. We have a proven track record of success, and we are always looking for new ways to use marketing and technology to help our clients achieve their goals.</p>
            </section>

            <section className="flex flex-col sm:flex-row gap-2.5">
                <div className="w-full sm:w-1/2 px-4 space-y-6">
                    <h3 className="py-2.5 border-b border-black text-3xl font-bold text-center sm:text-left">Video Intro</h3>
                    <iframe className={`aspect-video w-full h-auto`} src="https://www.youtube.com/embed/zCcfDLDXn2Y?list=PLaMgGJYe022Xl4ctJhPEejYPxaxKWmxHC" title="Q &amp; A with ANKITA DATTA | #AskAnkita | ART ASYLUM"
                        loading={`lazy`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                </div>

                <div className="w-full sm:w-1/2 px-4 space-y-4">
                    <h3 className="py-2.5 border-b border-black text-3xl font-bold text-center sm:text-left">Multi Capability</h3>
                    <p className={`text-xl`}>Me and my team offers a wide range of multi-capable solutions that can help businesses of all sizes achieve their goals.</p>
                    <ul className={`mt-1.5 px-2 flex flex-wrap gap-1.5 items-start list-decimal list-inline`}>
                        <li><strong className={`text-lg font-semibold`}>Scalability:</strong> We can scale our solutions to meet the needs of your business, whether you are a small startup or a large enterprise.</li>
                            <ul className={`sm:w-3/4 px-4 flex flex-row justify-left gap-5`}>
                                <li className="flex flex-row space-x-1.5"><BsFillCheckSquareFill className={`text-lg text-cyan-400`} /> <label>Grows with your business</label></li>
                                <li className="flex flex-row space-x-1.5"><BsFillCheckSquareFill className={`text-lg text-cyan-400`} /> <label>No need to start over</label></li>
                            </ul>
                        <li><strong className={`text-lg font-semibold`}>Flexibility:</strong> Our solutions are flexible and can be customized to meet your specific requirements.</li>
                            <ul className={`sm:w-3/4 px-4 flex flex-row justify-left gap-5`}>
                                <li className="flex flex-row space-x-1.5"><BsFillCheckSquareFill className={`text-lg text-cyan-400`} /> <label>Customizable to your needs</label></li>
                                <li className="flex flex-row space-x-1.5"><BsFillCheckSquareFill className={`text-lg text-cyan-400`} /> <label>Adaptable to change</label></li>
                            </ul>
                        <li><strong className={`text-lg font-semibold`}>Security:</strong> Our solutions are secure and protect your data from unauthorized access.</li>
                            <ul className={`sm:w-3/4 px-4 flex flex-row justify-left gap-5`}>
                                <li className="flex flex-row space-x-1.5"><BsFillCheckSquareFill className={`text-lg text-cyan-400`} /> <label>Protects your data</label></li>
                                <li className="flex flex-row space-x-1.5"><BsFillCheckSquareFill className={`text-lg text-cyan-400`} /> <label>Prevents unauthorized access</label></li>
                            </ul>
                        <li><strong className={`text-lg font-semibold`}>Cost-effectiveness:</strong> Our solutions are cost-effective and can save you money.</li>
                            <ul className={`sm:w-3/4 px-4 flex flex-row justify-left gap-5`}>
                                <li className="flex flex-row space-x-1.5"><BsFillCheckSquareFill className={`text-lg text-cyan-400`} /> <label>Saves you money</label></li>
                                <li className="flex flex-row space-x-1.5"><BsFillCheckSquareFill className={`text-lg text-cyan-400`} /> <label>ROI-positive</label></li>
                            </ul>
                    </ul>

                </div>
            </section>
        </div>
    )
}