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
            className="w-full flex flex-col gap-3"
        >
            {especialidades.map((item, index) => (
                <Accordion.Item 
                    key={index} 
                    value={item.title} 
                    className="bg-primary overflow-hidden cursor-pointer rounded-xl text-xs"
                >
                    <Accordion.Header className="flex">
                        <Accordion.Trigger 
                            className="flex justify-between items-center w-full py-2 px-6 
                                       bg-primary cursor-pointer
                                       rounded-2xl transition-colors"
                        >
                            {item.title}
                            
                            <ChevronDown className="h-5 w-5 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180" />
                        </Accordion.Trigger>
                    </Accordion.Header>

                    <Accordion.Content 
                        className="overflow-hidden bg-primary data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown"
                    >
                        <div className="py-2 px-6">
                            {item.description}
                        </div>
                    </Accordion.Content>

                </Accordion.Item>
            ))}
        </Accordion.Root>
    );
}