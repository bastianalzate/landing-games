import { useState } from "react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías hacer alguna acción con los datos del formulario, como enviarlos por email o almacenarlos en una base de datos.
    console.log({ name, email, subject, message });
  };

  return (
    <section id="contact-section" className="bg-gray-800 py-10 md:py-20">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-6 md:mb-8">Contáctanos</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col col-span-2 md:col-span-1">
            <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="border-gray-600 border-2 rounded-md px-4 py-2 text-gray-500 focus:outline-none focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1">
            <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="border-gray-600 border-2 rounded-md px-4 py-2 text-gray-500 focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="border-gray-600 border-2 rounded-md px-4 py-2 text-gray-500 focus:outline-none focus:border-blue-500"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="border-gray-600 border-2 rounded-md px-4 py-2 text-gray-500 h-48 focus:outline-none focus:border-blue-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-center md:justify-start mt-6 md:mt-8">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Enviar
            </button>
            
          </div>
        </form>
      </div>
    </section>
  );
};
export default ContactSection;