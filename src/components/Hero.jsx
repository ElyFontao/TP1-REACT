import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [mensajeVisible, setMensajeVisible] = useState(false);

  return (
    <section className="mt-24 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 text-center">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bienvenido a MiLanding
        </motion.h2>

        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Tu sitio ideal para encontrar soluciones digitales.
        </motion.p>

        <motion.button
          className="bg-white text-blue-600 px-6 py-2 font-semibold rounded shadow hover:bg-blue-100 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setMensajeVisible(true)}
        >
          Comenzar ahora
        </motion.button>

        {mensajeVisible && (
          <motion.p
            className="mt-4 text-sm text-sky-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            ¡Gracias por confiar en nosotros! Pronto recibirás novedades.
          </motion.p>
        )}
      </div>
    </section>
  );
}
