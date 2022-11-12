// import espresso from "./assets/espresso.png";
// import caffelate from "./assets/caffelate.png";
// import caffeleche from "./assets/caffeleche.png";
// import capuccino from "./assets/capuccino.png"
// import chocolate from "./assets/chocolate.png"
// import mokaccino from "./assets/mokaccino.png"
// import "./App.css";
// import { Carousel } from "flowbite-react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx"
import Landing from "./components/Landing.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path={"/"} element={<Landing />} />
        <Route path={"/home"} element={<Home />} />
      </Routes>
    </BrowserRouter>
    // <section className="bg-[#D2AE37] w-full h-screen">
    //   <div className="h-1/3 flex flex-col justify-between items-center p-10">
    //     <div>
    //       <h1 className="text-2xl">ATMA</h1>
    //       <p>by KAFFA</p>
    //     </div>
    //     <div>
    //       <h1 className="font-semibold text-3xl">
    //         ¿Que queres <br /> tomar hoy?
    //       </h1>
    //     </div>
    //   </div>
    //   <div className="bg-[#B5AAAB] w-screen h-2/3 flex flex-col justify-around items-center rounded-t-[40px]">
    //     <div className="w-full h-2/3 flex justify-center">
    //       <Carousel slideInterval={95700} indicators={false}>
    //         <div className="flex flex-col justify-center items-center gap-2">
    //           <img src={espresso} alt="ad" className="w-52" />
    //           <p className="text-2xl font-semibold ">Espresso Chico</p>
    //         </div>
    //         <div className="flex flex-col justify-center items-center gap-2">
    //           <img src={espresso} alt="ad" className="w-52" />
    //           <p className="text-2xl font-semibold ">Espresso Grande</p>
    //         </div>
    //         <div className="flex flex-col justify-center items-center gap-2">
    //           <img src={caffelate} alt="ad" className="w-52" />
    //           <p className="text-2xl font-semibold ">Café Latte</p>
    //         </div>
    //         <div className="flex flex-col justify-center items-center gap-2">
    //           <img src={caffeleche} alt="ad" className="w-38" />
    //           <p className="text-2xl font-semibold ">Café con Leche</p>
    //         </div>
    //         <div className="flex flex-col justify-center items-center gap-2">
    //           <img src={caffeleche} alt="ad" className="w-38" />
    //           <p className="text-2xl font-semibold ">Café con Leche</p>
    //         </div>
    //         <div className="flex flex-col justify-center items-center gap-2">
    //           <img src={capuccino} alt="ad" className="w-52" />
    //           <p className="text-2xl font-semibold ">Cappuccino</p>
    //         </div>
    //         <div className="flex flex-col justify-center items-center gap-2">
    //           <img src={mokaccino} alt="ad" className="w-52" />
    //           <p className="text-2xl font-semibold ">Mokkaccino</p>
    //         </div>
    //         <div className="flex flex-col justify-center items-center gap-2">
    //           <img src={chocolate} alt="ad" className="w-38" />
    //           <p className="text-2xl font-semibold ">Chocolate Suave</p>
    //         </div>
    //         <div className="flex flex-col justify-center items-center gap-2">
    //           <img src={chocolate} alt="ad" className="w-38" />
    //           <p className="text-2xl font-semibold ">Chocolate Fuerte</p>
    //         </div>
    //       </Carousel>
    //       {/* <p className="text-2xl font-semibold ">Espresso Chico</p> */}
    //     </div>
    //     <div className="h-1/3 flex justify-center items-center">
    //       <button
    //         type="button"
    //         class="py-4 px-6 bg-[#CA8D54] hover:bg-[#EECDAC] focus:ring-[#CA8D54] focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
    //       >
    //         Preparar
    //       </button>
    //     </div>
    //   </div>
    // </section>
  );
}

export default App;
