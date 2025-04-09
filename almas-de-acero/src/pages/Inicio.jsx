import { HERO } from "../constants";
import { NavLink } from "react-router-dom";

const Inicio = () => {
  return (
    <section className="h-full w-full flex flex-col justify-start items-center p-4 mt-15">
        <div
        className="w-full md:w-1/2 lg:p-4"
      >
        <div className="flex justify-center">
          <img
            src="/logo.png"
            width={250}
            height={250}
            alt="logo"
            className="rounded-3xl"
          />
        </div>
      </div>
      <div
        className="w-full md:w-1/2"
      >
        <h2 className="text-4xl font-bold md:text-5xl lg:text-[5rem] text-center">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl text-center">
          {HERO.slogan}
        </p>
        <p className="mb-8 p-2 text-md text-center">{HERO.description}</p>
      </div>
      <div
        className="w-1/2 md:w-full flex justify-center items-center"
      >
        <NavLink to="/nosotros">
        <button className="bg-[#A18167] border-1 border-black text-white text-2xl px-4 py-2 rounded-full hover:bg-[#A18167]/80 transition-all duration-300">
          Conoce al equipo
        </button>
        </NavLink>
      </div>
    </section>
  );
};

export default Inicio;
