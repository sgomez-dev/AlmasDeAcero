import { HERO } from "../constants";
import { NavLink } from "react-router-dom";
import TeamGrid from "../components/TeamGrid";

const Nosotros = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-65px)] justify-between mt-25">
      <section className="w-full flex flex-col justify-start items-center p-4">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h2 className="text-4xl font-bold text-center mb-6">
            Conoce nuestro equipo
          </h2>
          <p className="text-center text-lg mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies et tortor sit amet hendrerit. Duis condimentum maximus eros eget vestibulum. Sed sed feugiat dolor, id sollicitudin felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
      </section>
      
      <div className="mt-auto">
        <TeamGrid />
      </div>
    </div>
  );
};

export default Nosotros;
