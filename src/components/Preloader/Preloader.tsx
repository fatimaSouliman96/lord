import { useLoading } from "../LoadingContext/LoadingContext";


const Preloader: React.FC = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-[#f7f7f7] transition-opacity duration-500">
      <div className="relative flex items-center justify-center w-16 h-16">
        <span className="absolute w-full h-full border-4 border-[#0d6efd] border-t-transparent rounded-full animate-spin"></span>
        <span className="absolute w-10 h-10 border-4 border-[#6ea8fe] border-t-transparent rounded-full animate-spin [animation-duration:1.5s]"></span>
      </div>
    </div>
  );
};

export default Preloader;
