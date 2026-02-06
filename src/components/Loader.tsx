"use client";

import Image from "next/image";
import logo2 from '../../public/Logo Bruna2.svg';

export default function Loader() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark-gray-azure">
            <div className="relative flex flex-col items-center">

                <div className="relative h-24 w-24 md:h-32 md:w-32 animate-breathing">
                    <Image
                        src={logo2}
                        alt="Carregando..."
                        fill
                        priority
                        className="object-contain"
                    />
                </div>

                <div className="absolute -bottom-10 h-[1px] w-12 bg-pastel-gray-orange/40 animate-expand-line" />

            </div>
        </div>
    );
}