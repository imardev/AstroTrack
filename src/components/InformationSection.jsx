import image from "../assets/orbital.png";
export default function InformationSection() {
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
              <span className="text-[#9af8ff] font-bold text-3xl ml-11">
                0.02%
              </span>
              <p className="text-center">IMPACT PROBABILITY SUM</p>
            </div>
            <div className="neo-24 relative z-10 bg-[#1c2233]/70 w-60 h-30 rounded-lg ml-6 flex justify-center  flex-col">
              <span className=" font-bold text-3xl ml-17">1,243</span>
              <p className="text-center ">LOGGED NEOS (24)</p>
            </div>
          </div>
          <img
            src={image}
            alt="Image orbital"
            className="w-100 z-1 absolute inset-0 top-30 left-140 rounded-t-lg"
          />
        </article>
        <article className="mt-20 bg-[#131726] px-8 py-4 rounded-lg h-63">
          <span>ORBITA. TRAJECTORY MONITOR</span>
          <h3>Precision visualization of near-earth paths</h3>
          <div className="probability">0.02%</div>
        </article>
        <article className=" bg-[#131726] px-8 py-4 rounded-lg h-63 ">
          <span>ORBITA. TRAJECTORY MONITOR</span>
          <h3>Precision visualization of near-earth paths</h3>
          <div className="probability">0.02%</div>
        </article>
      </section>
    </section>
  );
}
