import { useState } from "react";
import DateSelector, { formatApiDate } from "./components/DateSelector.jsx";

function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  async function handleSearch() {
    const apiDate = formatApiDate(selectedDate);

    console.log("fecha para la api:", apiDate);
    console;
  }

  return (
    <>
      <main className="flex justify-center  items-center h-screen relative  flex-col gap-6 px-4 text-center">
        <div className="absolute inset-0 -z-10 h-full w-full bg-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_50%,#ffffff10,transparent)] animate-pulse"></div>
          <div className="absolute inset-0 opacity-50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_50%,#4c1d9540,transparent)]"></div>
        </div>
        <h1 className="text-white text-8xl font-bold">
          Track{" "}
          <span className="bg-linear-to-r from-[#95f7ff] to-[#0ef2fe] bg-clip-text text-transparent">
            Near-Earth
          </span>{" "}
          Asteroids
        </h1>
        <p className="text-slate-200 text-lg">
          A specialized tool for monitoring celestial visitors with
          high-precision data from NASA´s NEO project.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row bg-[#151725] py-3 px-4 rounded-lg">
          <DateSelector
            selectedDate={selectedDate}
            onChange={setSelectedDate}
          />

          <button
            type="button"
            onClick={handleSearch}
            className="h-14 rounded-2xl bg-cyan-300 px-8 font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-200"
          >
            Search
          </button>
        </div>
      </main>
    </>
  );
}

export default Home;
