import React from "react";

const NewsSection = () => {
  const news = [
    {
      title: "Nuevo juego en la plataforma: Fortnite",
      date: "10 de mayo de 2023",
      description:
        "Estamos emocionados de anunciar que hemos agregado el popular juego de battle royale, Fortnite, a nuestra plataforma. ¡Juega ahora y disfruta de la emoción de la competencia!",
      image:
        "https://cdn2.unrealengine.com/c4-s2-battle-pass-1920x1080-603842488c24.jpg",
    },
    {
      title: "Actualización de seguridad importante",
      date: "5 de mayo de 2023",
      description:
        "Hemos implementado una actualización de seguridad importante para proteger la privacidad de nuestros usuarios. Por favor, asegúrate de tener la última versión de la aplicación para poder seguir disfrutando de nuestros juegos.",
      image:
        "https://revistaseguridad360.com/wp-content/uploads/2022/03/seguridad-digital-1.jpg",
    },
    {
      title: "Nuevo paquete de juegos clásicos",
      date: "1 de mayo de 2023",
      description:
        "Hemos lanzado un nuevo paquete de juegos clásicos que incluye algunos de los títulos más queridos de todos los tiempos. ¡Revive la nostalgia y diviértete jugando a tus juegos favoritos!",
      image:
        "https://www.mdtech.news/u/fotografias/m/2022/10/6/f608x342-9666_39389_0.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Novedades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((newsItem, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={newsItem.image} alt={newsItem.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{newsItem.title}</h3>
                <p className="text-gray-600 mb-4">{newsItem.date}</p>
                <p className="text-gray-700">{newsItem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
