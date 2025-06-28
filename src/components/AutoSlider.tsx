import { useEffect, useRef, useState, type JSX } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

type AutoSliderProps = {
    images: string[];
} & Omit<HTMLMotionProps<'img'>, 'ref'>;

export default function AutoSlider({
    images = [],
    ...props
}: AutoSliderProps): JSX.Element | null {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    function clearTimer() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    }

    function handlePrev() {
        clearTimer();
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    }

    function handleNext() {
        clearTimer();
        setIndex((prev) => (prev + 1) % images.length);
    }

    useEffect(() => {
        clearTimer();

        if (!isHovered && images.length > 1) {
            timeoutRef.current = setTimeout(() => {
                setIndex((prev) => (prev + 1) % images.length);
            }, 3000);
        }

        return clearTimer;
    }, [index, isHovered, images.length]);

    if (images.length === 0) return null;

    return (
        <div
            className="relative w-full h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Slides */}
            {images.map((src, i) => (
                <motion.img
                    key={i}
                    src={src}
                    alt={`Slide ${i + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: i === index ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ zIndex: i === index ? 2 : 1 }}
                    className="absolute inset-0 w-full h-full object-cover"
                    {...props}
                />
            ))}

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`h-2 rounded-full bg-gray-300 ${
                            i === index ? 'w-4 bg-gray-400' : 'w-2'
                        } transition-all`}
                    />
                ))}
            </div>

            {/* Buttons */}
            <button
                onClick={handlePrev}
                className={`absolute opacity-0 ${isHovered ? 'opacity-100' : ''} transition-opacity left-2 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/30 hover:bg-black/50 rounded-full px-3 py-1 z-10`}
            >
                <ArrowBigLeft />
            </button>
            <button
                onClick={handleNext}
                className={`absolute opacity-0 ${isHovered ? 'opacity-100' : ''} transition-opacity right-2 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/30 hover:bg-black/50 rounded-full px-3 py-1 z-10`}
            >
                <ArrowBigRight />
            </button>
        </div>
    );
}
