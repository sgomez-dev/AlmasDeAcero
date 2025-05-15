import { HERO } from "../constants";
import { motion } from "framer-motion";

const PruebaTuAcero = () => {
  return (
    <div className="min-h-[calc(100vh-65px)] w-full py-8">
      <h1 className="text-4xl font-bold">Prueba tu acero</h1>
      <div className="w-full h-screen flex justify-center items-center bg-black">
      <iframe
        src="/PruebaTuAcero/index.html"
        width="960"
        height="600"
        title="Unity Game"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
    </div>
  );
};

export default PruebaTuAcero;
