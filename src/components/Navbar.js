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
            <div className="md:flex justify-between items-center w-90 max-w-screen-xl mx-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <Link className="text-2xl font-bold text-white" href="/">
                            VIDEOJUEGOS
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
                    <button 
                        className="text-white font-bold tracking-wide hover:text-gray-300 px-3 py-2 rounded-md w-full text-center transition-all duration-300 ease-in-out"
                        onClick={() => document.querySelector('#game-section').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Juegos
                    </button>
                    <button 
                        className="text-white font-bold tracking-wide hover:text-gray-300 px-3 py-2 rounded-md w-full text-center transition-all duration-300 ease-in-out"
                        onClick={() => document.querySelector('#about-section').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Nosotros
                    </button>
                    <button 
                        className="text-white font-bold tracking-wide hover:text-gray-300 px-3 py-2 rounded-md w-full text-center transition-all duration-300 ease-in-out"
                        onClick={() => document.querySelector('#download-section').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Descargar
                    </button>
                    <button 
                        className="text-white font-bold tracking-wide hover:text-gray-300 px-3 py-2 rounded-md w-full text-center transition-all duration-300 ease-in-out"
                        onClick={() => document.querySelector('#contact-section').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Contacto
                    </button>
                </div>
                <div
                    className={`${isOpen ? 'block' : 'hidden'
                        } md:hidden mt-4 md:mt-0 transition-opacity duration-500 ease-in-out opacity-0`}
                    style={{ opacity: isOpen ? 1 : 0 }}
                >
                    <div className="flex flex-col items-center space-y-4">
                        <button 
                        className="text-white font-bold tracking-wide hover:text-gray-300 px-3 py-2 rounded-md w-full text-center transition-all duration-300 ease-in-out"
                        onClick={() => document.querySelector('#game-section').scrollIntoView({ behavior: 'smooth' })}
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: '0.75rem' }}
                    >
                        Juegos
                    </button>
                    <button 
                        className="text-white font-bold tracking-wide hover:text-gray-300 px-3 py-2 rounded-md w-full text-center transition-all duration-300 ease-in-out"
                        onClick={() => document.querySelector('#about-section').scrollIntoView({ behavior: 'smooth' })}
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: '0.75rem' }}
                    >
                        Nosotros
                    </button>
                    <button 
                        className="text-white font-bold tracking-wide hover:text-gray-300 px-3 py-2 rounded-md w-full text-center transition-all duration-300 ease-in-out"
                        onClick={() => document.querySelector('#download-section').scrollIntoView({ behavior: 'smooth' })}
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: '0.75rem' }}
                    >
                        Descargar
                    </button>
                    <button 
                        className="text-white font-bold tracking-wide hover:text-gray-300 px-3 py-2 rounded-md w-full text-center transition-all duration-300 ease-in-out"
                        onClick={() => document.querySelector('#contact-section').scrollIntoView({ behavior: 'smooth' })}
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: '0.75rem' }}
                    >
                        Contacto
                    </button>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;