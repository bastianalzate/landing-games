import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const developerTools = [
    {
        title: "Unity",
        description: "Motor de juego multiplataforma y herramienta de creación de contenido.",
        image:
            "https://niixer.com/wp-content/uploads/2020/11/ogimg.jpg",
        link: "https://unity.com/",
    },
    {
        title: "Unreal Engine",
        description:
            "Motor de juego de última generación para crear juegos de calidad AAA para PC, consolas y dispositivos móviles.",
        image:
            "https://cdn2.unrealengine.com/ue-logo-1400x788-1400x788-8f185e1e3635.jpg",
        link: "https://www.unrealengine.com/en-US/",
    },
    {
        title: "GameMaker Studio",
        description: "Herramienta para crear juegos de PC, consola, móvil y HTML5.",
        image:
            "https://cdn.cloudflare.steamstatic.com/steam/apps/1670460/capsule_616x353.jpg?t=1675179967",
        link: "https://www.yoyogames.com/gamemaker",
    },
];

const App = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Herramientas para desarrolladores</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {developerTools.map((tool, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 hover:shadow-lg"
                            data-aos="flip-left"
                            data-aos-duration="1000"
                            data-aos-delay={`${index * 100}`}
                        >
                            <img src={tool.image} alt={tool.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-900">{tool.title}</h3>
                                <p className="text-gray-600 mb-4">{tool.description}</p>
                                <a
                                    href={tool.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
                                >
                                    Descargar
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default App;
