'use client'; 

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 

type ExplicacaoItem = {
    title: string;
    description: string;
}

/**
 * Componente Carrossel para exibir informações sobre as terapias.
 * * No desktop (md:), exibe 3 cards lado a lado usando grid.
 * No mobile, exibe 1 card por vez com botões de navegação.
 */

export function CarouselExplicacao({ data }: { data: ExplicacaoItem[] }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalItems = data.length;

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === totalItems - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? totalItems - 1 : prevIndex - 1));
    };

    const cardStyles = "p-6 rounded-xl shadow-lg bg-primary h-full flex flex-col justify-start transition-all duration-300";

    return (
        <div className="relative text-left">
            
            <div className="hidden md:grid md:grid-cols-3 gap-8">
                {data.map((item, index) => (
                    <div key={index} className={cardStyles}>
                        <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                        <p className="text-sm">{item.description}</p>
                    </div>
                ))}
            </div>

            <div className="relative overflow-hidden md:hidden">
                
                <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ 
                        transform: `translateX(-${activeIndex * 100}%)`,
                        width: `${totalItems * 100}%` 
                    }}
                >
                    {data.map((item, index) => (
                        <div key={index} className={`w-[33.3333%] flex-shrink-0 px-4`}>
                            <div className={cardStyles}>
                                <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                                <p className="text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="md:hidden flex justify-center mt-8 space-x-4">
                
                <button 
                    onClick={prevSlide} 
                    className="p-3 bg-primary-dark text-secondary rounded-full shadow-lg hover:bg-[#34495e] transition-colors disabled:opacity-50"
                    aria-label="Anterior"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                
                <div className="flex items-center space-x-2">
                    {data.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                index === activeIndex ? 'bg-primary-dark scale-125' : 'bg-gray-400 hover:bg-gray-500'
                            }`}
                            aria-label={`Ir para slide ${index + 1}`}
                        />
                    ))}
                </div>
                
                <button 
                    onClick={nextSlide} 
                    className="p-3 bg-primary-dark text-secondary rounded-full shadow-lg hover:bg-[#34495e] transition-colors disabled:opacity-50"
                    aria-label="Próximo"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
            
        </div>
    );
}