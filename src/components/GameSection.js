import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const games = [
  {
    id: 1,
    image: "https://as01.epimg.net/meristation/imagenes/2020/03/16/reportajes/1584376493_455501_1584428561_noticia_normal.jpg",
    title: "Super Mario",
    description: "Super mario es un clásico juego de plataformas desarrollado por Nintendo.",
  },
  {
    id: 2,
    image: "https://i.blogs.es/31d1a8/roblox-feature-image-jb-polish_20171204/1366_2000.png",
    title: "Roblox",
    description: "Un juego de construcción y aventura en línea creado por Roblox Corporation.",
  },
  {
    id: 3,
    image: "https://generacionxbox.com/wp-content/uploads/2021/04/epic-games-store-juegos-gratis.jpg",
    title: "Halo",
    description: "Un juego de disparos en primera persona desarrollado por Bungie Studios.",
  },
  {
    id: 4,
    image: "https://www.trecebits.com/wp-content/uploads/2023/02/Juegos-moviles-sin-Internet.webp",
    title: "Minecraft",
    description: "Un juego de construcción y aventura creado por Markus Persson.",
  },
];

const GamesSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Juegos</h2>
        <Slider {...settings}>
          {games.map((game) => (
            <div key={game.id} className="p-4">
              <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                  <p className="text-gray-400">{game.description}</p>
                  <button className="bg-gray-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out">
                    Jugar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};


export default GamesSection;
