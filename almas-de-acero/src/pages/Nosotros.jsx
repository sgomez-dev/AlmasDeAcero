import { HERO } from "../constants";
import { NavLink } from "react-router-dom";
import TeamGrid from "../components/TeamGrid";

const Nosotros = () => {
  return (
    <div className="overflow-y-auto scrollbar-hide relative">
    <div className="flex flex-col h-screen justify-between mt-25">
      <section className="w-full flex flex-col justify-start items-center p-4">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h2 className="text-4xl font-bold text-center mb-6">
            Conozca nuestro equipo
          </h2>
          <p className="text-center text-lg mb-12">
          Somos estudiantes de Periodismo e Ingeniería informática de la Universidad Europea del Atlántico. Estamos comprometidos con reivindicar la importancia de los servicios de seguridad de Cantabria, demostrando lo fundamentales que son para el bienestar y la protección de la ciudadanía. A través de nuestro trabajo, buscamos dar visibilidad a la labor que realizan día a día profesionales, quienes muchas veces pasan desapercibidos a pesar de su entrega constante. Nuestra intención es resaltar no solo su valor operativo, sino también el impacto social que tienen en la construcción de una comunidad más segura, cohesionada y resiliente.          </p>
        </div>
      </section>
      
      <div className="mt-auto pb-20">
        <TeamGrid />
      </div>
    </div>
    </div>
  );
};

export default Nosotros;
