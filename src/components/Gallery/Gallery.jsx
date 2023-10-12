import {ScreenLockToggle} from "@src/functions/ScreenLock.jsx";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';

const Gallery = ({children, params}) => {
    return (
        <LightGallery
            speed={500}
            licenseKey={'7EC452A9-0CFD441C-BD984C7C-17C8456E'}
            onAfterOpen={() => ScreenLockToggle(true)}
            onAfterClose={() => ScreenLockToggle(false)}
            selector={'.gallery-item'}
            {...params}
        >
            {children}
        </LightGallery>
    )
}

export default Gallery