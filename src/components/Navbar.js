import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) setIsOpen(false);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="bg-gray-800 p-5">
            <div className="md:flex justify-between items-center">
                <div className="flex justify-between items-center">
                    <div>
                        <Link className="text-2xl font-bold text-white" href="/">
                            VideoJuegos
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button type="button" onClick={() => setIsOpen(!isOpen)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-6 w-6 text-white"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="hidden md:flex md:items-center md:space-x-8 md:bg-transparent">
                    <Link
                        className="text-white font-bold tracking-wide hover:text-gray-300 px-3 py-2 rounded-md"
                        href="/games"
                    >
                        Juegos
                    </Link>
                    <Link
                        className="text-white font-bold tracking-wide hover:text-gray-300 px-3 py-2 rounded-md"
                        href="/about"
                    >
                        Acerca de
                    </Link>
                    <Link
                        className="text-white font-bold tracking-wide hover:text-gray-300 px-3 py-2 rounded-md"
                        href="/download"
                    >
                        Descargar
                    </Link>
                    <Link
                        className="text-white font-bold tracking-wide hover:text-gray-300 px-3 py-2 rounded-md"
                        href="/contact"
                    >
                        Contacto
                    </Link>
                </div>
                <div
                    className={`${isOpen ? 'block' : 'hidden'
                        } md:hidden mt-4 md:mt-0 transition-opacity duration-500 ease-in-out opacity-0`}
                    style={{ opacity: isOpen ? 1 : 0 }}
                >
                    <div className="flex flex-col items-center space-y-4">
                        <Link
                            className="text-white font-bold tracking-wide hover:text-gray-300 px-3 py-2 rounded-md w-full text-center transition-all duration-300 ease-in-out"
                            href="/games"
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: '0.75rem' }}
                        >
                            Juegos
                        </Link>
                        <Link
                            className="text-white font-bold tracking-wide hover:text-gray-300 px-3 py-2 rounded-md w-full text-center transition-all duration-300 ease-in-out"
                            href="/about"
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: '0.75rem' }}
                        >
                            Acerca de
                        </Link>
                        <Link
                            className="text-white font-bold tracking-wide hover:text-gray-300 px-3 py-2 rounded-md w-full text-center transition-all duration-300 ease-in-out"
                            href="/download"
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: '0.75rem' }}
                        >
                            Descargar
                        </Link>
                        <Link
                            className="text-white font-bold tracking-wide hover:text-gray-300 px-3 py-2 rounded-md w-full text-center transition-all duration-300 ease-in-out"
                            href="/contact"
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: '0.75rem' }}
                        >
                            Contacto
                        </Link>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;