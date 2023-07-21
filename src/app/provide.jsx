'use client'
import React from 'react'
import { ThemeProvider, useTheme } from 'next-themes'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { useReportWebVitals } from 'next/web-vitals'
import {onCLS, onFID, onLCP} from 'web-vitals'
import { toast, ToastContainer } from 'react-toastify';


export default function Providers({ children }) {
    const [mounted, setMounted] = React.useState(false)
    const { systemTheme, theme, setTheme } = useTheme()

    useReportWebVitals((metric) => {
        onCLS(console.log);
        onFID(console.log);
        onLCP(console.log);
    })

    React.useEffect(()=>{
        setMounted(true);
        //Toastie Event
        if (location.pathname === '/' && location.reload) { toast("Welcome to Subham's Sanctuary.!!! ", { position: "bottom-center", toastId: 1 }) }

        //Prevent Right Click
        document.addEventListener('contextmenu', (e) => e.preventDefault());

        //Prevent Passive listener
        // document.addEventListener('touchstart', (e) => e.preventDefault(), {passive: true});
        // document.addEventListener('touchmove', (e) => e.preventDefault(), {passive: true});
        // document.addEventListener('wheel', (e) => e.preventDefault(), {passive: true});

    },[])
    function tostifie() {
        if (!mounted) return null
        const currentTheme = theme === 'system' ? systemTheme : theme
        return <ToastContainer autoClose={1800} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover toastStyle={currentTheme === 'dark' ? { background: "linear-gradient(to right bottom, #607d81, #567888, #58708c, #66668b, #79597f, #75577e, #71547e, #6d527d, #4a5a85, #225f7f, #08616f, #21605a)", color: "white" } : { background: "linear-gradient(to right bottom, #81deea, #9cdefb, #bddcff, #dadbfd, #eeddf5, #eadaf2, #e5d6f0, #e1d3ed, #bfcbee, #93c6e7, #67c0d1, #51b7ad)", color: "black" }} />
    }
    return (
        <>
            <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_Recaptcha_Site_Key} scriptProps={{ async: false, defer: false, appendTo: "head", nonce: undefined, }} >
                <ThemeProvider enableSystem={true} attribute="class">
                    {tostifie()}
                    {children}
                </ThemeProvider>
            </GoogleReCaptchaProvider>
        </>
    )
}
