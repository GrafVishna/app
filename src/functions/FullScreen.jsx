import platform from 'platform'

const FullScreen = () => {
    let vh
    (platform.os.family === 'iOS' || platform.os.family === 'Android')
        ? vh = window.innerHeight * 0.01
        : vh = window.innerHeight

    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

export default FullScreen