import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section id="about-section" className="py-8 md:py-20 bg-gray-100">
      <div className="container w-90 max-w-screen-xl mx-auto px-4 md:px-0">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Nosotros</h2>
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4 text-gray-600">Nuestra Misión</h3>
            <p className="text-gray-600 mb-6">
              En nuestra empresa nos dedicamos a crear los mejores juegos para nuestros usuarios, con la finalidad de
              brindar entretenimiento y diversión para toda la familia.
            </p>
            <h3 className="text-xl font-bold mb-4 text-gray-600">¿Quiénes somos?</h3>
            <p className="text-gray-600 mb-6">
              Somos un equipo de desarrolladores apasionados por los videojuegos, comprometidos en crear experiencias
              únicas para nuestros usuarios.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-xl font-bold mb-4 text-gray-600">Características de nuestra plataforma</h3>
            <ul className="text-gray-600 mb-6 list-disc list-inside">
              <li>
                <FaCheckCircle className="inline-block mr-2 text-green-500" />
                Amplia variedad de juegos para todas las edades.
              </li>
              <li>
                <FaCheckCircle className="inline-block mr-2 text-green-500" />
                Interfaz amigable y fácil de usar.
              </li>
              <li>
                <FaCheckCircle className="inline-block mr-2 text-green-500" />
                Soporte técnico disponible 24/7.
              </li>
              <li>
                <FaCheckCircle className="inline-block mr-2 text-green-500" />
                Constantes actualizaciones y mejoras.
              </li>
              <li>
                <FaCheckCircle className="inline-block mr-2 text-green-500" />
                Sistema de recompensas para nuestros usuarios.
              </li>
            </ul>
            <h3 className="text-xl font-bold mb-4 text-gray-600">Contáctanos</h3>
            <p className="text-gray-600 mb-6">
              Si tienes alguna pregunta o comentario sobre nuestra plataforma o nuestros juegos, no dudes en contactarnos.
            </p>
            <button 
              className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-400 transition duration-300 ease-in-out"
              onClick={() => document.querySelector('#contact-section').scrollIntoView({ behavior: 'smooth' })}  
            >
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
