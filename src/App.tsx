import { useEffect, useState } from 'react';
import './App.css'
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import { Outlet } from 'react-router-dom';




function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (

    <div dir='rtl' className='relative w-full max-w-[100vw] mx-auto'  >
      <div className='grid grid-cols-1 grid-rows-[auto_auto_auto] ' > 
        <NavBar />
        <Outlet />
        <Footer />
      </div>
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-[#ffd15d_] pointer-events-none fixed transform -translate-x-1/2 -translate-y-1/2 z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div className='w-2 h-2 m-auto rounded-full bg-[#ffd15d]' >

        </div>
      </div>
    </div>


  )
}

export default App
