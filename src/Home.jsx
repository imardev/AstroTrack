import { useState } from "react";
import DateSelector, { formatApiDate } from "./components/DateSelector.jsx";
import { getNeosByDate } from "./services/NasaApi.js";
import { TriangleAlert, ShieldCheck } from "lucide-react";

function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [neos, setNeos] = useState([]);
  async function handleSearch() {
    const apiDate = formatApiDate(selectedDate);
    const neos = await getNeosByDate(apiDate);
    console.log(neos);
    setNeos(neos);
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
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row bg-[#151725] py-3.5 px-5 rounded-lg">
          <DateSelector
            selectedDate={selectedDate}
            onChange={setSelectedDate}
          />

          <button
            type="button"
            onClick={handleSearch}
            className="h-14 rounded-2xl bg-cyan-300 px-8 font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-200 cursor-pointer"
          >
            Search
          </button>
        </div>
      </main>
      {/* Section NEO cards */}
      <section className="neos-card bg-[#0a0e1a]">
        <h2 className="text-white text-4xl font-bold mb-2 pt-16 px-46">
          Observation Results
        </h2>
        <p className="px-46 text-slate-300 text-lg  mb-18">
          showing asteroids detected within Earth's orbital vicinity for{" "}
          <span className="font-bold">{formatApiDate(selectedDate)}</span>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-fit mx-auto">
          {/* Render NEO cards here */}
          {neos.map((neo) => (
            <div
              key={neo.id}
              className={`bg-[#1c2233]/30 p-4 rounded-lg w-90 h-112 ${neo.is_potentially_hazardous_asteroid ? "border border-red-500/20 shadow-lg shadow-red-500/10" : "border border-green-500/20 shadow-lg shadow-green-500/10"}`}
            >
              <p
                className={`text-sm mt-4 ${
                  neo.is_potentially_hazardous_asteroid
                    ? "text-red-400 bg-red-500/10 p-4 rounded-lg flex items-center gap-2 justify-between"
                    : "text-green-400 bg-green-500/10 p-4 rounded-lg flex items-center gap-2 justify-between"
                }`}
              >
                Potentially Hazardous:{" "}
                {neo.is_potentially_hazardous_asteroid ? "Yes" : "No"}
                {neo.is_potentially_hazardous_asteroid ? (
                  <TriangleAlert />
                ) : (
                  <ShieldCheck />
                )}
              </p>
              <h3 className="text-3xl font-bold text-white mt-6">{neo.name}</h3>
              <p className="text-sm text-gray-400 mt-10 flex flex-col gap-1">
                Estimated Diameter:{" "}
                <span className="text-2xl font-bold text-white">
                  {Math.round(
                    neo.estimated_diameter.meters.estimated_diameter_max,
                  )}
                  m
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-8  flex flex-col gap-1">
                Closest Approach:{" "}
                <span className="text-2xl font-bold text-white">
                  {neo.close_approach_data?.[0]?.miss_distance?.kilometers
                    ? `${Math.round(
                        Number(
                          neo.close_approach_data[0].miss_distance.kilometers,
                        ),
                      ).toLocaleString("es-ES")} km`
                    : "No data"}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-8  flex flex-col gap-1">
                Relative Velocity:{" "}
                <span className="text-2xl font-bold text-white">
                  {neo.close_approach_data?.[0]?.relative_velocity
                    ? `${Math.round(
                        Number(
                          neo.close_approach_data[0].relative_velocity
                            .kilometers_per_hour,
                        ),
                      ).toLocaleString("es-ES")} km/h`
                    : "No data"}
                </span>
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
