import image from "../assets/orbital.png";
import { getTotalNeos, getHazardousNeos } from "../services/NasaApi.js";
import { useEffect, useState } from "react";
import { ClockFading, Orbit } from "lucide-react";
export default function InformationSection() {
  const [totalNeos, setTotalNeos] = useState(0);
  const [hazardousNeos, setHazardousNeos] = useState(0);

  useEffect(() => {
    const fetchTotalNeos = async () => {
      const count = await getTotalNeos();
      setTotalNeos(count);
    };

    const fetchHazardousNeos = async () => {
      const count = await getHazardousNeos();
      setHazardousNeos(count);
    };

    fetchTotalNeos();
    fetchHazardousNeos();
  }, []);

  return (
    <section className="information bg-[#0a0e1a] ">
      <section className="grid grid-cols-[1.7fr_1.2fr] gap-y-4 gap-x-6 px-8 py-12 text-white w-470 mx-auto">
        <article className="row-span-2 relative bg-[#131726] px-8 py-4 rounded-lg h-130 mt-20">
          <div className="text mt-10  relative z-10">
            {" "}
            <span className="text-[#03ccd8]">ORBITAL TRAJECTORY MONITOR</span>
            <h3 className="text-6xl font-medium w-180 line-clamp-4">
              Precision visualization of near-earth paths
            </h3>
          </div>
          <div className="flex mt-40 relative z-10">
            <div className="probability relative z-10 ml-6 bg-[#1c2233]/70 w-70 h-30 rounded-lg flex justify-center flex-col gap-2">
              <span className="text-[#9af8ff] font-semibold text-3xl ml-7">
                {hazardousNeos}
              </span>
              <p className="text-center font-light text-zinc-300">
                POTENTIALLY HAZARDOUS (24h)
              </p>
            </div>
            <div className="neo-24 relative z-10 bg-[#1c2233]/70 w-70 h-30 rounded-lg ml-6 flex justify-center  flex-col">
              <span className=" font-semibold text-3xl ml-10">{totalNeos}</span>
              <p className="text-center font-light text-zinc-300">
                ASTEROIDS DETECTED (24h)
              </p>
            </div>
          </div>
          <img
            src={image}
            alt="Image orbital"
            className="w-100 z-1 absolute inset-0 top-30 left-140 rounded-t-lg"
          />
        </article>
        <article className="mt-20 bg-[#131726] px-8 py-4 rounded-lg h-63 border border-purple-900/30">
          <ClockFading className="bg-purple-900 text-purple-400 p-2 size-10 rounded-lg mt-2 mb-4" />
          <h3 className="font-bold text-xl mb-1">Historical Archive</h3>
          <p className="w-160 mt-6">
            Access decades of observation records dating back to the inception
            of the NEO program, unlocking powerful insights through historical
            data analysis, trend identification, and continuous monitoring of
            near-Earth objects.
          </p>
        </article>
        <article className=" bg-[#131726] px-8 py-4 rounded-lg h-63 border border-cyan-900/30">
          <Orbit className="bg-cyan-900 text-cyan-400 p-2 size-10 rounded-lg mt-2 mb-4" />
          <h3 className="font-bold text-xl mb-1">Asteroid Data Intelligence</h3>
          <p className="w-160 mt-6">
            Real-time insights on near-earth objects powered by NASA data,
            providing structured information for tracking, analysis, and
            scientific visualization of asteroid activity.
          </p>
          <div className="probability">0.02%</div>
        </article>
      </section>
    </section>
  );
}
