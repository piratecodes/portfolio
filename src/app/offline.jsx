import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import Lottie from 'react-lottie-player'

import lottieJson from '../assets/internet.json'

export default function test() {
    return (
        <>
            <Head>
                <title>SeoCandle | No Internet!!</title>
            </Head>
            <section className="text-black dark:text-stone-300 body-font min-h-screen">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <span className="relative mx-auto block w-full max-w-md md:mt-0 lg:max-w-lg"><Lottie loop animationData={lottieJson} play /></span>
                    <div className="text-center lg:w-2/3 w-full mt-8">
                        <h1 className="title-font text-4xl mb-8 font-medium">NO INTERNET...</h1>
                        <p className="mt-4 leading-relaxed text-lg">Please make sure your network health.</p>
                        <button className="mt-8 inline-flex text-white bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded-2xl text-lg" onClick={() => Router.reload}>Reload</button>   
                    </div>
                </div>
            </section>
        </>
    )
}

