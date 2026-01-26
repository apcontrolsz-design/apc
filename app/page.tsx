"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src="https://apcontrols.com.sg/images/homepage-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* CONTENT (tetap sama) */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-10 items-center text-center text-white">
          <p className="font-bold text-[14px] sm:text-[16px]">Select Region</p>

          <div className="flex flex-col gap-5 w-full items-center cursor-pointer">
            {[
              ["Singapore", "AP Controls Pte Ltd", "/sg"],
              ["Indonesia", "PT AP Controls Ltd", "/id"],
              ["Malaysia", "Valve Store", "/my"],
            ].map(([country, company, path]) => (
              <button
                key={country}
                onClick={() => router.push(path)}
                className="
                  w-full max-w-[323px] h-[52px]
                  border border-white
                  bg-transparent
                  rounded-xl
                  cursor-pointer
                  text-[14px] sm:text-[16px]
                  transition-all duration-300 ease-out
                  hover:bg-white hover:text-black
                "
              >
                <span className="font-bold">{country}</span> | {company}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <img
              src="https://apcontrols.com.sg/images/apc-logo.png"
              alt="AP Controls"
              className="w-[200px] sm:w-[238px] h-[60px] sm:h-[74px] object-contain"
              loading="eager"
            />
            <img
              src="https://apcontrols.com.sg/images/vs-logo.png"
              alt="Valve Store"
              className="w-[200px] sm:w-[241px] h-[60px] sm:h-[74px] object-contain"
              loading="eager"
            />
          </div>

          <div className="flex flex-col gap-4 max-w-[900px] text-[13px] sm:text-[14px] leading-relaxed">
            <p>
              AP Controls is a trusted provider of engineering solutions and
              industrial components for bulk material handling systems across
              the Asia-Pacific region.
            </p>
            <p>
              Over time, AP Controls has built strong technical capabilities and
              practical industry knowledge, evolving into a solutions-oriented
              engineering partner.
            </p>
          </div>

          <p className="text-[#545454] text-[12px]">
            Photo by <span className="underline">James Baltz</span> on{" "}
            <span className="underline">Unsplash</span>
          </p>
        </div>
      </div>
    </div>
  );
}
