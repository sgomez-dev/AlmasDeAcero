import { FaTiktok } from "react-icons/fa";

const FloatingTiktok = () => {
  const redirectToPage = () => {
    window.open("https://www.tiktok.com/@almas_de_aceroo", "_blank");
  };

  return (
    <button
      onClick={redirectToPage}
      className="fixed bottom-20 right-4 z-50 flex items-center gap-2 rounded-full border border-stone-400 bg-stone-200 px-4 py-3 font-medium text-stone-900 shadow-lg transition-all hover:bg-stone-300 hover:shadow-xl"
    >
      <FaTiktok className="text-xl" />
    </button>
  );
};

export default FloatingTiktok;