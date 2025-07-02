import Navbar from "./components/Navbar";
const baseImagePath = import.meta.env.BASE_URL;
const App = () => {
  return (
    <>
    <Navbar />
      <main>
        <h1 className="sr-only">Project tracking intro component</h1>
        <section className="mt-12 lg:mt-24 grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto items-center">
          <figure className="order-1 md:order-2">
            <img src={`${baseImagePath}/illustration-devices.svg`} alt="" className="h-auto w-[75rem] absolute top-[20%] max-md:translate-x-6"/>
          </figure>
          <div className="order-2 md:order-1 px-6 lg:px-0 mt-64 md:mt-0 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <strong className="flex items-center justify-center bg-Very-Dark-Blue text-white px-2 py-1 rounded-full uppercase text-sm">new</strong>
              <span className="uppercase text-lg font-barlow text-Grayish-Blue">Monograph Dashboard</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-balance uppercase text-Very-Dark-Blue">Powerful insights into your team</h2>
            <p className="text-lg font-medium text-Grayish-Blue">Project planning and time tracking for agile teams</p>
            <div className="flex gap-4 items-center">
              <a href="#" className="bg-Red uppercase font-bold text-Light-Grayish-Blue px-4 py-2 rounded-md hover:bg-Red-400 transition-colors duration-300 ease-in">Schedule a demo</a>
              <a href="#" className="font-barlow uppercase tracking-tight text-Grayish-Blue text-sm">to see a live preview</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
