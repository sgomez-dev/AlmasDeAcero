export const NAVIGATION_LINKS = [
    { href: "/", label: "Inicio" },
    { href: "/profesiones", label: "Profesiones", 
        children: [
            { href: "/profesiones/bomberos", label: "Bomberos" },
            { href: "/profesiones/policia-local", label: "Policia Local" },
            { href: "/profesiones/salvamento-maritimo", label: "Salvamento Marítimo" },
            { href: "/profesiones/militares", label: "Militares (Aun no disponible)" },
        ]
     },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/prueba-tu-acero", label: "Prueba tu acero" },
];

export const HERO = {
    name: "Almas de Acero",
    slogan: "No todos los héroes llevan capa",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
};