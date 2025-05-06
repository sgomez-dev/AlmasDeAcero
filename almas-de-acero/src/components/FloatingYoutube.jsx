import { FaYoutube } from "react-icons/fa";

const FloatingYoutube = () => {
  const redirectToPage = () => {
    window.open("https://www.youtube.com/@Almas_de_acero", "_blank");
  };

  return (
    <button
      onClick={redirectToPage}
      className="fixed bottom-36 right-4 z-50 flex items-center gap-2 rounded-full border border-stone-400 bg-stone-200 px-4 py-3 font-medium text-stone-900 shadow-lg transition-all hover:bg-stone-300 hover:shadow-xl"
    >
      <FaYoutube className="text-xl" />
    </button>
  );
};

export default FloatingYoutube;