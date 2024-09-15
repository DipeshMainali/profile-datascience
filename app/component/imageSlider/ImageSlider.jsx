"use client";

import { useState, useEffect } from 'react';
import styles from './ImageSlider.module.css';

export default function ImageSlider({images}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setIsTransitioning(false);
        }, 500);
    };

    const prevSlide = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setIsTransitioning(false);
        }, 500);
    };

    useEffect(() => {
        console.log(images);
        const interval = setInterval(nextSlide, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.imageWrapper}>
                { images && images.length > 0 ? images?.map((image, index) => {
                    const isActive = index === currentIndex;
                    const isPrev = index === (currentIndex - 1 + images.length) % images.length;
                    const isNext = index === (currentIndex + 1) % images.length;

                    return (
                        <img
                            key={index}
                            src={image}
                            alt={`Slide ${index}`}
                            className={`${styles.image} 
                          ${isActive ? styles.activeImage : ''} 
                          ${isPrev ? styles.prevImage : ''} 
                          ${isNext ? styles.nextImage : ''}`}
                        />
                    );
                }) : ''}
            </div>

            <button className={styles.prevButton} onClick={prevSlide}>
                &lt;
            </button>
            <button className={styles.nextButton} onClick={nextSlide}>
                &gt;
            </button>

        </div>
    );
}
