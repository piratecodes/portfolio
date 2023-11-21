import React from 'react'

export default function Contact(){
    return(
        <div id={`get-in-touch`} className="text-gray-600 body-font relative scroll-mt-16">
            <section className="absolute inset-0 bg-cyan-100">
                <iframe className={`opacity-60 contrast-125 border-0`}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.040572680859!2d88.37756077594432!3d22.763875525931372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89b43e22edf53%3A0xaebfac677c08dcb0!2sSUBHAM%20APARTMENT!5e0!3m2!1sen!2sin!4v1689721598371!5m2!1sen!2sin"
                    width="100%" height="100%" allowFullScreen="" loading="lazy" title="map"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
            <section className="container px-5 py-16 mx-auto flex">
                <div className="lg:w-2/6 md:w-1/3 bg-white/75 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    <h2 className="text-gray-900 text-center text-2xl mb-1 font-medium title-font">Contact Info</h2>
                    <article className={`p-3 bg-gray-100/95 rounded-lg border border-stone-600`}>
                        <p className="font-bold leading-relaxed mb-0.5 text-gray-600">Subham Sarkar</p>
                        <p className="leading-relaxed mb-0.5 text-gray-600">40, Sister Nivedita Sarani</p>
                        <p className="leading-relaxed mb-0.5 text-gray-600">Nona Chandan Pukur</p>
                        <p className="leading-relaxed mb-0.5 text-gray-600">Barrackpore</p>
                        <p className="leading-relaxed mb-0.5 text-gray-600">Kolkata-700122</p>
                        <p className="leading-relaxed mb-0.5 text-gray-600">WB - India </p>
                    </article>
                    <div className="relative mt-5 mb-2.5">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="name" id="name" name="name"
                               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className="relative mb-2.5">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email"
                               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className="relative mb-2.5">
                        <label htmlFor="subject" className="leading-7 text-sm text-gray-600">Subject</label>
                        <input type="subject" id="subject" name="subject"
                               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className="relative mb-2.5">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea id="message" name="message"
                                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                  spellCheck="false" data-ms-editor="true"></textarea>
                    </div>
                    <button
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button
                    </button>
                    <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook
                        viral artisan.</p>
                </div>
            </section>
        </div>
    )
}