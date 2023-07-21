'use client'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Lottie from 'react-lottie-player'

import lottieJson from '@/assets/404-cat.json'


function Error_not_found() {
    const router = useRouter()
    return (
        <>
            <head>
                <title>SeoCandle | Error 404 (Not Found)!!!</title>
            </head>
            <main className="text-black dark:text-stone-300 min-h-screen">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <span className="relative mx-auto block w-full max-w-md md:mt-0 lg:max-w-xl"><Lottie loop animationData={lottieJson} play /></span>
                    <div className="text-center lg:w-2/3 w-full mt-8">
                        <h1 className="title-font text-4xl mb-8 font-medium">404 ERROR!!!</h1>
                        <p className="mt-4 leading-relaxed text-lg">The page you are looking for no longer exist.</p>
                        <p className="mb-8 leading-relaxed text-lg">Return to the <Link className='underline underline-offset-1 text-blue-400' href="/">home page</Link>. And Remember: You haven&apos;t seen anything.</p>
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded-2xl text-lg" onClick={() => router.push('/')}>Home</button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Error_not_found
