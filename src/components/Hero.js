import { useState, useEffect } from 'react';

const slides = [
    {
        imageUrl: 'https://fondosmil.com/fondo/3550.jpg',
        title: 'Bienvenido a nuestra tienda de videojuegos',
        text: 'Encuentra los mejores títulos para todas las plataformas.',
    },
    {
        imageUrl: 'https://fondosmil.com/fondo/3558.jpg',
        title: 'Explora un mundo de aventuras',
        text: 'Descubre nuevos mundos y vive experiencias inolvidables.',
    },
    {
        imageUrl: 'https://fondosmil.com/fondo/3578.jpg',
        title: 'Prepárate para la acción',
        text: 'Enfréntate a los desafíos más grandes y demuestra tu habilidad.',
    },
];

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
            setActiveIndex(newIndex);
        }, 4000);
        return () => clearInterval(intervalId);
    }, [activeIndex]);

    const { imageUrl, title, text } = slides[activeIndex];

    return (
        <div className="relative h-screen w-full overflow-hidden" style={{ height: 'calc(100vh - 80px)' }}>
            {slides.map((slide, index) => (
                <div
                    key={slide.imageUrl}
                    className={`absolute top-0 left-0 h-full w-full transition-opacity duration-1000 ${activeIndex === index ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{ backgroundImage: `url(${slide.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div
                        className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-out ${isHovered ? 'scale-110' : 'scale-100'
                            }`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            transformOrigin: 'center center',
                            backgroundImage: `url(${slide.imageUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'brightness(0.7)',
                        }}
                    ></div>
                </div>
            ))}
            <div className="absolute top-1/2 left-5 transform -translate-y-1/2 rounded-md">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', WebkitTextFillColor: 'transparent', backgroundImage: 'linear-gradient(to top, #EAEAEA, #ffffff)' }}>{title}</h1>
                <p className="text-white text-xl md:text-2xl lg:text-3xl">{text}</p>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mt-4 transition duration-300 ease-in-out">
                    Play for free
                </button>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${activeIndex === index ? 'bg-white' : 'bg-gray-300'
                            }`}
                        onClick={() => setActiveIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Hero;

