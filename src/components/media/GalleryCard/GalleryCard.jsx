import PropTypes from 'prop-types';

import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';

import './GalleryCard.scss'
import {ScreenLock, ScreenLockToggle} from "@src/functions/ScreenLock.jsx";


const GalleryCard = ({elementData}) => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <LightGallery
            speed={500}
            licenseKey={'7EC452A9-0CFD441C-BD984C7C-17C8456E'}
            onAfterOpen={() => ScreenLockToggle(true)}
            onAfterClose={() => ScreenLockToggle(false)}
        >
            <a href={elementData.src}
               className='img-card aspect-[300/500] overflow-hidden relative flex items-end group'
               data-sub-html={`<h4>${elementData.title}</h4><p>${elementData.subtitle}</p>`}>
                <img className='absolute object-cover top-0 left-0 w-full h-full group-hover:scale-105 duration-1000'
                     srcSet={elementData.src} alt="Image"/>
                <div className='img-card__content relative z-10 bg-gradient w-full'>
                    <h4 className='item-title font-serif mb-2 last:mb-0'>{elementData.title}</h4>
                    <p>{elementData.subtitle}</p>
                </div>
            </a>

        </LightGallery>
    );
};

GalleryCard.propTypes = {
    elementData: PropTypes.shape()
};

export default GalleryCard;