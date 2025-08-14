import React, { useState } from 'react';

import liberty from '../../assets/images/libertyStatue.jpg';
import brooklyn from '../../assets/images/brooklyn.jpg';
import grandCentral from '../../assets/images/grandCentral.jpg';
import groupPhoto from '../../assets/images/groupPhoto.jpg';
import wallSt from '../../assets/images/wallSt.jpg';
import ts1 from '../../assets/images/timesSquare1.jpg';
import ts2 from '../../assets/images/timesSquare2.jpg';

import arrowLeft from '../../assets/svg/arrowLeft.svg';
import arrowRight from '../../assets/svg/arrowRight.svg';

import './carousel.css'

function Carousel() 
{
    const [photoIndex, setPhotoIndex] = useState(0);

    const photoGallery = [
        { title: "Me under the Liberty statue!", img: liberty },
        { title: "A photo of the Manhattan bridge as seen from Brooklyn!", img: brooklyn },
        { title: "Grand Central Station!", img: grandCentral },
        { title: "A group photo with the other guys I went to New York with!", img: groupPhoto },
        { title: "A photo of the iconic Wall Street sign!", img: wallSt },
        { title: "Photo of the famous 'Red Stair' in Times Square.", img: ts1 },
        { title: "Another photo of Times Square!", img: ts2 }
    ];

    function goNext() {
        setPhotoIndex(c => (c + 1) % photoGallery.length);
    }

    function goPrevious() {
        setPhotoIndex(c => (c - 1 + photoGallery.length) % photoGallery.length);
    }

    return (
        <div id="imageContainer">
            <span className="text">{photoGallery[photoIndex].title}</span>

            <div id="galleryDiv">
                <button className="galleryBtn" id="back" onClick={goPrevious}>
                    <img className="arrow" src={arrowLeft} alt="Previous"/>
                </button>

                <img
                    src={photoGallery[photoIndex].img}
                    alt={photoGallery[photoIndex].title}
                    id="gallery"
                    className="gabrieleImg"
                />

                <button className="galleryBtn" id="front" onClick={goNext}>
                    <img className="arrow" src={arrowRight} alt="Next"/>
                </button>
            </div>
        </div>
    );
}

export default Carousel;
