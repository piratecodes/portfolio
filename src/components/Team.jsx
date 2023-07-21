import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { BiUpArrow } from 'react-icons/bi'

import img1 from '@/assets/me.jpg'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Teams(){
    const jsonPerson = {
        "@context": "https://schema.org/",
        "@type": "Person",
        "name": "Subham Sarkar",
        "url": "http://localhost",
        "image": "http://localhost/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.11bb706a.jpg&w=1920&q=75",
        "sameAs": [
            "https://www.facebook.com/subhamsarkar1999",
            "https://www.twitter.com/subhamsarkar99",
            "https://www.instagram.com/subhamsarkar99",
            "https://www.linkedin.com/in/subhamsarkar99",
            "https://www.github.com/piratecodes"
        ],
        "jobTitle": "One Who Remains",
        "worksFor": {
            "@type": "Organization",
            "name": "Subham Sanctuary"
        }
    }
    const jsonFAQ = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
            "@type": "Question",
            "name": "What are the benefits of working with a marketing and software development company?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": `Increased visibility: A marketing and software development company can help you increase your visibility online and attract new customers.
                I   Improved customer experience: A marketing and software development company can help you improve the customer experience by creating a more user-friendly website and mobile app.
                    Increased efficiency: A marketing and software development company can help you increase efficiency by automating tasks and streamlining your processes.
                    Reduced costs: A marketing and software development company can help you reduce costs by outsourcing your marketing and software development needs.`
            }
        },{
                "@type": "Question",
                "name": "What are the different types of marketing and software development services?",
                "acceptedAnswer": {
                "@type": "Answer",
                    "text": `Web development:  This includes creating and maintaining websites.
                    Mobile app development:  This includes creating and maintaining mobile apps.
                    Search engine optimization (SEO):  This involves optimizing your website to rank higher in search engine results pages (SERPs).
                    Pay-per-click (PPC) advertising:  This involves paying for ads to appear when people search for specific keywords.
                    Email marketing: This involves sending email messages to your customers and prospects.
                    Social media marketing:  This involves using social media platforms to connect with your customers and prospects.`
                }
        },{
                "@type": "Question",
                "name": "How do I choose the right marketing and software development company for my business?",
                "acceptedAnswer": {
                "@type": "Answer",
                    "text": `Consider your needs: What are your specific marketing and software development needs?
                    Do your research: Get quotes from multiple companies and compare their services and pricing.
                    Ask for references: Get references from current and former clients to see how the company has performed in the past.
                    Get a feel for the company culture: Make sure the company's culture is a good fit for your business.`
                }
        }]
}
    return(
        <section id="meet-team">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonPerson) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonFAQ) }}
            />
            <div className="container py-16 scroll-mt-16">
                <div className="my-6 text-center space-y-4">
                    <h2 className="text-3xl lg:text-5xl font-bold uppercase">Meet The Team</h2>
                    <p className={`mx-auto max-w-screen-md`}>We are committed to providing our clients with the highest level of service. We listen to your needs and work with you to develop a customized solution that meets your specific requirements. We are also always available to answer your questions and provide support.</p>
                </div>
                <svg className='sr-only' width="0" height="0">
                    <linearGradient id="insta-gradient" x1="50%" y1="100%" x2="50%" y2="0%">
                        <stop offset="0%" style={{ "stopColor": "rgb(254,218,117)", "stopOpacity": "1.00" }} />
                        <stop offset="25%" style={{ "stopColor": "rgb(250,126,30)", "stopOpacity": "1.00" }} />
                        <stop offset="50%" style={{ "stopColor": "rgb(214,41,118)", "stopOpacity": "1.00" }} />
                        <stop offset="75%" style={{ "stopColor": "rgb(150,47,191)", "stopOpacity": "1.00" }} />
                        <stop offset="100%" style={{ "stopColor": "rgb(79,91,213)", "stopOpacity": "1.00" }} />
                    </linearGradient>
                </svg>
                <div className="p-6 md:p-8 lg:p-12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center max-w-screen-xl">

                    <div className="rounded-t-3xl overflow-hidden p-0.5 bg-gray-800/50">
                        <div className="rounded-t-3xl bg-gray-300/75" data-wow-duration="400ms" data-wow-delay="0ms">
                            <section className={`rounded-t-3xl overflow-hidden`}>
                                <Image className="w-full h-auto" src={img1} alt="my pic" height="0" width="0" sizes="100vw" draggable={false} />
                            </section>
                            <section className={`p-2.5`}>
                                <h3 className={`font-bold text-3xl`}>Subham Sarkar</h3>
                                <span>The One Who Remains</span>
                            </section>
                            <p className={`p-2.5`}>A highly skilled and experienced backend/frontend developer with 6+ years of industry experience, including a strong track record in digital marketing for business development.</p>
                            <ul className="p-2.5 flex flex-wrap gap-4 justify-center">
                                <li><Link href="https://www.facebook.com/subhamsarkar1999" target="_blank"><FaFacebook className={`text-3xl fill-blue-600`} /><label className={`sr-only`}>Facebook</label></Link></li>
                                <li><Link href="https://www.instagram.com/subhamsarkar99" target="_blank"><FaInstagram className={`text-3xl fill-[url(#insta-gradient)]`} /><label className={`sr-only`}>Instagram</label></Link></li>
                                <li><Link href="https://www.twitter.com/subhamsarkar99" target="_blank"><FaTwitter className={`text-3xl fill-blue-400`} /><label className={`sr-only`}>Twitter</label></Link></li>
                                <li><Link href="https://www.linkedin.com/in/subhamsarkar99" target="_blank"><FaLinkedin className={`text-3xl fill-blue-500`} /><label className={`sr-only`}>Linked In</label></Link></li>
                                <li><Link href="https://www.github.com/piratecodes" target="_blank"><FaGithub className={`text-3xl fill-slate-800`} /><label className={`sr-only`}>Github</label></Link></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <hr className={`my-12 bg-gradient-to-r via-40% via-gray-500 to-60%`} />

                <div className="p-8 flex flex-col lg:flex-row gap-6">
                    <div className="w-full lg:w-1/2 space-y-5">
                        <h3 className="py-2 text-xl font bold border-b border-gray-200">Our Skills</h3>
                        <section className={`mt-1 space-y-2.5`}>
                            <div className={`space-y-1`}>
                                <strong className={`ml-1.5 font-semibold`}>UI/ UX design</strong>
                                <section className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className="w-[50%] h-full bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"> 85%</div>
                                </section>
                            </div>
                            <div className={`space-y-1`}>
                                <strong className={`ml-1.5 font-semibold`}>API & Backend</strong>
                                <section className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className="w-[95%] h-full bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"> 95%</div>
                                </section>
                            </div>
                            <div className={`space-y-1`}>
                                <strong className={`ml-1.5 font-semibold`}>SEO & SEM </strong>
                                <section className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className="w-[90%] h-full bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"> 90%</div>
                                </section>
                            </div>
                            <div className={`space-y-1`}>
                                <strong className={`ml-1.5 font-semibold`}>Mobile Application</strong>
                                <section className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className="w-[80%] h-full bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"> 80%</div>
                                </section>
                            </div>
                        </section>
                        {/*<progress max="100" value="50" data-label="50%" className={`relative text-center h-3 rounded-full before:content-[attr(data-label)] before:text-xs before:text-white before:align-middle before:absolute before:inset-x-0`} />*/}
                    </div>

                    {/*<div className="col-sm-4">*/}
                    {/*    <h3 className="column-title">Our History</h3>*/}
                    {/*    <div role="tabpanel">*/}
                    {/*        <ul className="nav main-tab nav-justified" role="tablist">*/}
                    {/*            <li role="presentation" className="active">*/}
                    {/*                <a href="#tab1" role="tab" data-toggle="tab" aria-controls="tab1"*/}
                    {/*                   aria-expanded="true">2010</a>*/}
                    {/*            </li>*/}
                    {/*            <li role="presentation">*/}
                    {/*                <a href="#tab2" role="tab" data-toggle="tab" aria-controls="tab2"*/}
                    {/*                   aria-expanded="false">2011</a>*/}
                    {/*            </li>*/}
                    {/*            <li role="presentation">*/}
                    {/*                <a href="#tab3" role="tab" data-toggle="tab" aria-controls="tab3"*/}
                    {/*                   aria-expanded="false">2013</a>*/}
                    {/*            </li>*/}
                    {/*            <li role="presentation">*/}
                    {/*                <a href="#tab4" role="tab" data-toggle="tab" aria-controls="tab4"*/}
                    {/*                   aria-expanded="false">2014</a>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*        <div id="tab-content" className="tab-content">*/}
                    {/*            <div role="tabpanel" className="tab-pane fade active in" id="tab1"*/}
                    {/*                 aria-labelledby="tab1">*/}
                    {/*                <p>It is a long established fact that a reader will be distracted by the readable*/}
                    {/*                    content of a page when looking at its layout.</p>*/}
                    {/*                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution*/}
                    {/*                    of letters readable English.</p>*/}
                    {/*            </div>*/}
                    {/*            <div role="tabpanel" className="tab-pane fade" id="tab2" aria-labelledby="tab2">*/}
                    {/*                <p>It is a long established fact that a reader will be distracted by the readable*/}
                    {/*                    content of a page when looking at its layout.</p>*/}
                    {/*                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution*/}
                    {/*                    of letters readable English.</p>*/}
                    {/*            </div>*/}
                    {/*            <div role="tabpanel" className="tab-pane fade" id="tab3" aria-labelledby="tab3">*/}
                    {/*                <p>It is a long established fact that a reader will be distracted by the readable*/}
                    {/*                    content of a page when looking at its layout.</p>*/}
                    {/*                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution*/}
                    {/*                    of letters readable English.</p>*/}
                    {/*            </div>*/}
                    {/*            <div role="tabpanel" className="tab-pane fade" id="tab4" aria-labelledby="tab3">*/}
                    {/*                <p>It is a long established fact that a reader will be distracted by the readable*/}
                    {/*                    content of a page when looking at its layout.</p>*/}
                    {/*                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution*/}
                    {/*                    of letters readable English.</p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className="w-full lg:w-1/2">
                        <h3 className="py-2 text-xl font bold border-b border-gray-200">FAQs</h3>
                        <div className="mt-2 space-y-4" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="relative panel panel-default">
                                <h4 id={`q1`} className="pl-2.5 py-0.5 h-24 sm:h-8 w-full font-bold text-lg border border-cyan-500" >
                                    What are the benefits of working with a marketing and software development company?
                                </h4>
                                <input htmlFor={`q1`} type="checkbox" className={`absolute peer z-20 top-0 inset-x-0 w-full h-24 sm:h-8 opacity-0`} />
                                <BiUpArrow className={`absolute z-10 right-2 top-1/2 sm:top-2 text-lg peer-checked:rotate-180 transition-all delay-100 duration-500`} />
                                <div className="p-0 border-cyan-500 w-full max-h-0 overflow-hidden peer-checked:border peer-checked:overflow-auto peer-checked:p-2.5 peer-checked:max-h-28 transition-all delay-100 duration-500 scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-neutral-300">
                                    <ul className={`mt-1.5 flex flex-wrap gap-1.5 items-start list-square list-inside`}>
                                        <li><strong className={`text-lg font-semibold`}>Increased visibility:</strong> A marketing and software development company can help you increase your visibility online and attract new customers.</li>
                                        <li><strong className={`text-lg font-semibold`}>Improved customer experience:</strong> A marketing and software development company can help you improve the customer experience by creating a more user-friendly website and mobile app.</li>
                                        <li><strong className={`text-lg font-semibold`}>Increased efficiency:</strong> A marketing and software development company can help you increase efficiency by automating tasks and streamlining your processes.</li>
                                        <li><strong className={`text-lg font-semibold`}>Reduced costs:</strong> A marketing and software development company can help you reduce costs by outsourcing your marketing and software development needs.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="relative panel panel-default">
                                <h4 id={`q2`} className="pl-2.5 py-0.5 h-24 sm:h-8 w-full font-bold text-lg border border-cyan-500" >
                                    What are the different types of marketing and software development services?
                                </h4>
                                <input htmlFor={`q2`} type="checkbox" className={`absolute peer z-20 top-0 inset-x-0 w-full h-24 sm:h-8 opacity-0`} />
                                <BiUpArrow className={`absolute z-10 right-2 top-1/2 sm:top-2 text-lg peer-checked:rotate-180 transition-all delay-100 duration-500`} />
                                <div className="p-0 border-cyan-500 w-full max-h-0 overflow-hidden peer-checked:border peer-checked:overflow-auto peer-checked:p-2.5 peer-checked:max-h-28 transition-all delay-100 duration-500 scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-neutral-300">
                                    <ul className={`mt-1.5 flex flex-wrap gap-1.5 items-start list-square list-inside`}>
                                        <li><strong className={`text-lg font-semibold`}>Web development:</strong>  This includes creating and maintaining websites.</li>
                                        <li><strong className={`text-lg font-semibold`}>Mobile app development:</strong>  This includes creating and maintaining mobile apps.</li>
                                        <li><strong className={`text-lg font-semibold`}>Search engine optimization (SEO):</strong>  This involves optimizing your website to rank higher in search engine results pages (SERPs).</li>
                                        <li><strong className={`text-lg font-semibold`}>Pay-per-click (PPC) advertising:</strong>  This involves paying for ads to appear when people search for specific keywords.</li>
                                        <li><strong className={`text-lg font-semibold`}>Email marketing:</strong>  This involves sending email messages to your customers and prospects.</li>
                                        <li><strong className={`text-lg font-semibold`}>Social media marketing:</strong>  This involves using social media platforms to connect with your customers and prospects.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="relative panel panel-default">
                                <h4 id={`q3`} className="pl-2.5 py-0.5 h-24 sm:h-8 w-full font-bold text-lg border border-cyan-500">
                                    How do I choose the right marketing and software development company for my business?
                                </h4>
                                <input type="checkbox" className={`absolute peer z-20 top-0 inset-x-0 w-full h-24 sm:h-8 opacity-0`} />
                                <BiUpArrow className={`absolute z-10 right-2 top-1/2 sm:top-2 text-lg peer-checked:rotate-180 transition-all delay-100 duration-500`} />
                                <div className="p-0 border-cyan-500 w-full max-h-0 overflow-hidden peer-checked:border peer-checked:overflow-auto peer-checked:p-2.5 peer-checked:max-h-28 transition-all delay-100 duration-500 scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-neutral-300">
                                    <ul className={`mt-1.5 flex flex-wrap gap-1.5 items-start list-square list-inside`}>
                                        <li><strong className={`text-lg font-semibold`}>Consider your needs:</strong> What are your specific marketing and software development needs?</li>
                                        <li><strong className={`text-lg font-semibold`}>Do your research:</strong> Get quotes from multiple companies and compare their services and pricing.</li>
                                        <li><strong className={`text-lg font-semibold`}>Ask for references:</strong> Get references from current and former clients to see how the company has performed in the past.</li>
                                        <li><strong className={`text-lg font-semibold`}>Get a feel for the company culture:</strong> Make sure the company&apos;s culture is a good fit for your business.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}