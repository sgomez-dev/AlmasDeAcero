export const NAVIGATION_LINKS = [
    { href: "/", label: "Inicio" },
    { href: "/profesiones", label: "Profesiones", 
        children: [
            { href: "/profesiones/bomberos", label: "Bomberos" },
            { href: "/profesiones/policia-local", label: "Policia Local" },
            { href: "/profesiones/salvamento-maritimo", label: "Salvamento Marítimo" },
        ]
     },
    { href: "/nosotros", label: "Nosotros" },
    //{ href: "/prueba-tu-acero", label: "Prueba tu acero" },
];

export const HERO = {
    name: "Almas de Acero",
    slogan: "No todos los héroes llevan capa",
};