import React, { useState } from 'react';

interface ButtonCarouselProps {
    buttons: { label: string; labelEn: string; labelJa: string }[]; // Updated buttons to include language-specific labels
    onButtonClick: (buttonLabel: string) => void;
    currentLanguage: string; // Add currentLanguage prop
}

export default function ButtonCarousel({ buttons, onButtonClick, currentLanguage }: ButtonCarouselProps): JSX.Element {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index: number) => {
        if (index === activeIndex) {
            onButtonClick(buttons[index].label); // Trigger page jump with the correct label based on the language
        }
        setActiveIndex(index);
    };

    const getPosition = (index: number) => {
        const total = buttons.length;
        const offset = (index - activeIndex + total) % total;

        if (offset === 0) return 'active';
        if (offset === 1 || (activeIndex === total - 1 && index === 0)) return 'next';
        if (offset === total - 1 || (activeIndex === 0 && index === total - 1)) return 'prev';
        return 'hidden';
    };

    return (
        <div className="carousel-container">
            <div className="carousel">
                {buttons.map((button, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${getPosition(index)}`}
                        onClick={() => handleClick(index)}
                    >
                        {currentLanguage === 'en' ? button.labelEn : button.labelJa} {/* Dynamically change the text based on currentLanguage */}
                    </div>
                ))}
            </div>
        </div>
    );
}