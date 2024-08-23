import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-blue-400 selection:text-blue-950">
      <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <Hero />
        </div>
      </div>
      <div className="flixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className=" container mx-auto px-8">
        {/* <Navbar /> */}
      </div>
    </div>
  );
}

export default App;
