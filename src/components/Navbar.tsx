"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useState } from "react";

interface LinksProps {
    label: string;
    href: string;
}

interface NavbarProps {
    links: LinksProps[];
}

export default function Navbar({ links }: NavbarProps) {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed w-full top-0 py-4 z-50 flex justify-center px-4">
            <nav className="hidden md:flex flex-row items-center space-x-6 py-3 px-8 text-sm bg-black/20 backdrop-blur-md rounded-full shadow-lg text-light-gray border border-white/10">
                {links.map((link, index) => (
                    <Link key={index} href={link.href} className="cursor-pointer hover:text-pastel-gray-orange transition-colors duration-300">
                        {link.label}
                    </Link>
                ))}
            </nav>

            <div className="md:hidden w-full flex justify-end">
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <button className="p-3 bg-black/40 backdrop-blur-md rounded-full text-light-gray shadow-lg border border-white/10 active:scale-90 transition-transform">
                            <Menu size={24} />
                        </button>
                    </SheetTrigger>

                    <SheetContent
                        side="right"
                        className="w-[80%] sm:w-[350px] border-l border-white/10 bg-black/60 backdrop-blur-xl p-0 transition-all duration-500 ease-in-out"
                    >
                        <div className="sr-only">
                            <SheetTitle>Menu de Navegação</SheetTitle>
                        </div>

                        <div className="flex flex-col h-full pt-20 px-8">
                            <nav className="flex flex-col space-y-8">
                                {links.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="group flex items-center text-2xl font-lexend tracking-wide text-light-gray/80 hover:text-pastel-gray-orange transition-all duration-300"
                                        style={{
                                            transitionDelay: `${index * 50}ms`,
                                            animation: open ? 'fadeInRight 0.5s ease forwards' : 'none'
                                        }}
                                    >
                                        <span className="mr-4 h-[1px] w-0 bg-pastel-gray-orange transition-all duration-300 group-hover:w-8" />
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>

                            <div className="mt-auto mb-10 text-xs text-light-gray/40 font-lexend">
                                <p>Bruna Laprovitera</p>
                                <p>Psicologia Clínica</p>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}