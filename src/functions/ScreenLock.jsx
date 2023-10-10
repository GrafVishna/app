export const ScreenLock = (statePage) => {
    ScreenLockToggle(statePage);
};

export const ScreenLockToggle = (stateLock) => {
    const width = window.innerWidth - document.documentElement.clientWidth;

    if (stateLock === false) {
        document.documentElement.classList.remove('lock');
    } else {
        document.documentElement.classList.add('lock');
    }
};
