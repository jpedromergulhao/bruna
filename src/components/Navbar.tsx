import Link from "next/link";

interface LinksProps {
    label: string,
    href: string,
}

interface NavbarProps {
    links: LinksProps[],
}

export default function Navbar({ links }: NavbarProps) {
    return (
        <header className="fixed w-full top-0 py-4 z-50 flex justify-center">
            <nav className="
            flex flex-row items-center space-x-6
            py-3 px-8 text-sm
            bg-black/20
            backdrop-blur-sm
            rounded-full shadow-lg
            ">
                {links.map((link, index) => (
                    <Link key={index} href={link.href} className="cursor-pointer hover:text-secondary-light transition">
                        {link.label}
                    </Link>
                ))}
            </nav>
        </header>
    )
}