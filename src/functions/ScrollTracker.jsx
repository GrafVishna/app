import {useEffect, useState, useCallback} from 'react'

function useScrollTracker(threshold) {
    const [isScrolled, setIsScrolled] = useState(false)

    const handleScroll = useCallback(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        setIsScrolled(scrollTop >= threshold)
    }, [threshold])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    return isScrolled
}

export default useScrollTracker
