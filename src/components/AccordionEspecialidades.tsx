'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

type Especialidade = {
    title: string;
    description: string;
}

export function AccordionEspecialidades({ especialidades }: { especialidades: Especialidade[] }) {

    return (
        <Accordion.Root
            type="single"
            collapsible
            className="w-full flex flex-col gap-4"
            data-aos="fade-down"
                    data-aos-duration="1500"
        >
            {especialidades.map((item, index) => (
                <Accordion.Item
                    key={index}
                    value={`item-${index}`}
                    className="bg-gray-azure/50 border border-white/5 overflow-hidden rounded-2xl transition-all duration-300 hover:bg-gray-azure/80 hover:border-pastel-gray-orange/30 group"
                >
                    <Accordion.Header className="flex">
                        <Accordion.Trigger
                            className="flex justify-between items-center cursor-pointer w-full py-5 px-6 md:px-8 
                                     text-sm md:text-base font-lexend text-left outline-none"
                        >
                            <span className="font-medium tracking-wide">{item.title}</span>

                            <ChevronDown
                                size={20}
                                className="text-pastel-gray-orange transition-transform duration-300 group-data-[state=open]:rotate-180"
                            />
                        </Accordion.Trigger>
                    </Accordion.Header>

                    <Accordion.Content
                        className="overflow-hidden text-light-gray/90 leading-relaxed font-lexend
               data-[state=open]:animate-slide-down 
               data-[state=closed]:animate-slide-up"
                    >
                        <div className="pb-6 px-6 text-left md:px-8 text-sm md:text-[15px]">
                            {item.description}
                        </div>
                    </Accordion.Content>
                </Accordion.Item>
            ))}
        </Accordion.Root>
    );
}