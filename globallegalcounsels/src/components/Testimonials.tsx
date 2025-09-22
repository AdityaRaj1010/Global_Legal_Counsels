import React, { useState } from 'react';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    text: string;
}

const testimonials: Testimonial[] = [
    { id: 1, name: 'Devina', text: "Raj is an amazing freelancer who is quick and delivers quality work." },
    { id: 2, name: 'Rajat', text: "Raj is great, I love his thoroughness and approach to helping me with my issue. I would 100% rehire Raj in a heartbeat if I had any legal issues. Go with Raj, you won't be disappointed. He helped me, a novice, through the process and was awesome to work with." },
    { id: 3, name: 'Mary', text: "This is my second time hiring Raj Aryan to assist me with probate case filings. He is accurate and timely in his work. I will rehire again if needed." },
    { id: 4, name: 'Faizan', text: "Raj was a pleasure to work with. A fantastic attorney, sharp and quick. Highly recommended!"},
    { id: 5, name: 'Nef', text: "Superb. Understood every minute detail I didnt even tell him about. He just read my documents in detail."},
    { id: 6, name: 'Michael', text: "Very professional person with a lot of ability, very helpful and worth working with!"},
    { id: 7, name: 'Vijay', text: "It was really great working with Raj. He has sound knowledge, Super fast, detail oriented, and professional. Highly recommend Raj for any legal needs."},
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const goToPrevious = () => {
        console.log('Going to previous testimonial');
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto flex items-center px-4 sm:px-0">

            {/* Testimonials */}
            <div className="flex overflow-hidden w-full">
                <div
                    className="flex w-full transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="min-w-full text-center px-4">
                            <p className="italic text-base text-gray-100 sm:text-lg mb-4">{testimonial.text}</p>
                            <p className="text-xs sm:text-sm text-gray-400">- {testimonial.name}</p>

                        </div>
                    ))}
                </div>
            </div>

            {/* Left Arrow */}
            <ArrowBigLeft
                className="text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={goToPrevious}
            />

            {/* Right Arrow */}
            <ArrowBigRight
                className="text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={goToNext}
            />
        </div>
    );
};

export default Testimonials;
