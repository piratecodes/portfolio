import React from "react";
import Image from 'next/image'

import Header from '@/components/header'
import Features from '@/components/features'
import Services from '@/components/services'
import About from '@/components/About'
import Process from '@/components/process'
import Teams from '@/components/Team'
import Contact from '@/components/contact'

export const metadata = {
    alternates:{
        canonical: "/",

    },
}
export default function Home() {
    return (
        <React.Fragment>
            <Header />
            <Features />
            <Services />
            <About />
            <Process />
            <Teams />
            {/*<Testimonials />*/}
            <Contact />
        </React.Fragment>
    )
}
