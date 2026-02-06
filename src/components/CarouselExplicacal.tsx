'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function CarouselExplicacao({ data }: { data: { title: string; description: string }[] }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalItems = data.length;

    const nextSlide = () => setActiveIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
    const prevSlide = () => setActiveIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));

    const cardStyles = "p-8 rounded-2xl shadow-sm bg-dark-gray-azure text-light-gray h-full flex flex-col border border-white/5 transition-all duration-300 hover:shadow-xl hover:shadow-dark-gray-azure/20";

    return (
        <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="relative w-full max-w-7xl mx-auto" role="region" aria-roledescription="carrossel"
        >

            <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-10">
                {data.map((item, index) => (
                    <article key={index} className={cardStyles}>
                        <h3 className="text-xl font-bold mb-4 text-pastel-gray-orange font-nanum-myeongjo">
                            {item.title}
                        </h3>
                        <p className="text-base leading-relaxed opacity-90 font-lexend">
                            {item.description}
                        </p>
                    </article>
                ))}
            </div>

            <div
                className="md:hidden relative overflow-hidden px-1"
            >
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    aria-live="polite"
                >
                    {data.map((item, index) => (
                        <div key={index} className="w-full flex-shrink-0 px-2">
                            <article className={`${cardStyles} min-h-[320px]`}>
                                <h3 className="text-xl font-bold mb-4 text-pastel-gray-orange font-nanum-myeongjo">
                                    {item.title}
                                </h3>
                                <p className="text-sm leading-relaxed font-lexend">
                                    {item.description}
                                </p>
                            </article>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-6 mt-8">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={prevSlide}
                            className="p-4 bg-dark-gray-azure text-pastel-gray-orange rounded-full shadow-md active:scale-95 transition-transform"
                            aria-label="Slide anterior"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <div className="flex gap-3">
                            {data.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8 bg-pastel-gray-orange' : 'w-2 bg-dark-gray-azure/30'
                                        }`}
                                    aria-label={`Ir para slide ${index + 1}`}
                                    aria-current={index === activeIndex ? 'true' : 'false'}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="p-4 bg-dark-gray-azure text-pastel-gray-orange rounded-full shadow-md active:scale-95 transition-transform"
                            aria-label="Próximo slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}