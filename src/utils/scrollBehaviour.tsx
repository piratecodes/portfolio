import React from 'react'

export default function ScrollBehaviour() {

    const [complition, setComplition] = React.useState<number>(0)

    React.useEffect(()=>{
        const updateScrollCompition = () => {
            const scrollHeight: number = document.body.scrollHeight - window.innerHeight
            if(scrollHeight) setComplition(Number((window.scrollY / scrollHeight).toFixed(2)) * 100)
        }

        window.addEventListener('scroll', updateScrollCompition)

        return() => window.removeEventListener('scroll', updateScrollCompition)

    }, [])

  return (complition)
}

