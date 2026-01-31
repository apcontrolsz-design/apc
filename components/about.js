"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  const pathname = usePathname();
  const segments = pathname.split("/");
  const langMap = {
    id: "id",
    sg: "sg",
    my: "my",
    "id-en": "id_en",
  };

  const routeMap = {
    id: "id",
    sg: "sg",
    my: "my",
    id_en: "id-en",
  };
  const lang = langMap[segments[1]] || "sg";
  const content = {
    id: {
      title: "Sekilas AP Controls",
      desc: (
        <>
          AP Controls merupakan penyedia solusi engineering dan komponen
          industri untuk sistem penanganan material curah di kawasan
          Asia-Pasifik. Didirikan pada tahun 1997 sebagai spesialis solenoid
          valve, AP Controls hadir dengan tujuan yang jelas: mendukung industri
          di kawasan regional melalui penyediaan solusi engineering yang telah
          teruji, diawali dengan menghadirkan peralatan impor berkualitas tinggi
          dari Eropa ke pasar Asia-Pasifik.
          <br /> <br /> Seiring waktu, AP Controls membangun kapabilitas teknis
          yang kuat serta pemahaman mendalam terhadap kebutuhan industri.
          Perusahaan ini kemudian berkembang dari distributor berbasis produk
          menjadi mitra engineering yang berorientasi pada solusi. Perkembangan
          tersebut memungkinkan AP Controls menangani proyek dengan tingkat
          kompleksitas yang semakin tinggi, dengan tetap mengedepankan
          keandalan, performa, dan nilai operasional jangka panjang.
        </>
      ),
      title_2: "AP Controls Pte Ltd",
      desc_2: (
        <>
          AP Controls Pte Ltd, yang berbasis di Singapura, berfungsi sebagai
          kantor regional Asia-Pasifik, menangani koordinasi proyek, dukungan
          teknis, dan distribusi produk sebagai titik penghubung bagi pelanggan
          dan mitra regional. <br /> Didukung pemahaman yang kuat terhadap
          kebutuhan pasar dan standar engineering regional, kantor ini
          memastikan pelaksanaan proyek yang konsisten serta layanan yang andal
          di seluruh wilayah operasional.
        </>
      ),
      button_2: "Hubungi AP Controls Pte Ltd",
      title_3: "PT AP Controls",
      desc_3: (
        <>
          PT AP Controls merupakan pusat manufaktur dan pelaksanaan proyek,
          didukung oleh fasilitas pabrik dan tim engineering berpengalaman.
          Operasional di Indonesia memiliki keahlian dalam sistem penanganan
          material curah dan pekerjaan instalasi. <br /> Melalui kapabilitas
          internal dan pengalaman di lapangan, PT AP Controls menyediakan solusi
          proyek terintegrasi dari fabrikasi hingga instalasi di lokasi.
        </>
      ),
      title_4: "Valve Store",
      desc_4: (
        <>
          Valve Store di Malaysia berfokus pada ketersediaan produk dan layanan
          pelanggan, dengan menyediakan berbagai valve <br /> dan komponen
          industri yang siap pakai. Pendekatan ini memudahkan pelanggan
          memperoleh komponen penting dengan <br /> cepat, meminimalkan
          downtime, dan mendukung kelancaran operasional sehari-hari.
        </>
      ),
      button_4: "Hubungi Valve Store",
    },
    sg: {
      title: "AP Controls Overview",
      desc: (
        <>
          AP Controls is a trusted provider of engineering solutions and
          industrial components for bulk material handling systems across the
          Asia-Pacific region. Established in 1997 as a solenoid valve
          specialist, the company was founded with a clear objective: to serve
          regional industries by supplying proven engineering solutions,
          initially by introducing high-quality imported equipment from Europe
          to the Asia-Pacific market. <br></br> <br></br> Over time, AP Controls
          has built strong technical capabilities and practical industry
          knowledge, evolving from a product-focused distributor into a
          solutions-oriented engineering partner. This progression has allowed
          the company to support increasingly complex projects while maintaining
          a focus on reliability, performance, and long-term operational value.
        </>
      ),
      title_2: "AP Controls Pte Ltd",
      desc_2: (
        <>
          AP Controls Pte Ltd, based in Singapore, serves as the regional office
          for Asia-Pacific. The Singapore team oversees project coordination,
          technical support, and product distribution, acting as a central point
          of contact for regional customers and partners. With a strong
          understanding of regional market requirements and engineering
          standards, the office ensures consistent project execution, technical
          alignment, and dependable service delivery across all operating
          markets.
        </>
      ),
      button_2: "Get in Touch",
      title_3: "PT AP Controls",
      desc_3: (
        <>
          PT AP Controls is the company’s project execution and manufacturing
          hub, supported by a factory and an experienced engineering team. The
          Indonesian operation has developed deep practical know-how in bulk
          material handling systems, with particular expertise in drum pulleys,
          conveyors, and installation works.
          <br />
          Through hands-on experience and in-house capabilities, PT AP Controls
          delivers engineered project solutions, from fabrication to on-site
          implementation, ensuring reliable performance and efficient execution
          for industrial customers.
        </>
      ),
      title_4: "Valve Store",
      desc_4: (
        <>
          The Valve Store in Malaysia focuses on product availability and
          customer support, offering a range of valves and industrial components
          available off the shelf. This setup allows customers to source
          essential components quickly, reducing <br /> downtime and supporting
          day-to-day operational needs.
        </>
      ),
      button_4: "Get in Touch",
    },
    my: {
      title: "AP Controls Overview",
      desc: (
        <>
          AP Controls is a trusted provider of engineering solutions and
          industrial components for bulk material handling systems across the
          Asia-Pacific region. Established in 1997 as a solenoid valve
          specialist, the company was founded with a clear objective: to serve
          regional industries by supplying proven engineering solutions,
          initially by introducing high-quality imported equipment from Europe
          to the Asia-Pacific market. <br></br> <br></br> Over time, AP Controls
          has built strong technical capabilities and practical industry
          knowledge, evolving from a product-focused distributor into a
          solutions-oriented engineering partner. This progression has allowed
          the company to support increasingly complex projects while maintaining
          a focus on reliability, performance, and long-term operational value.
        </>
      ),
      title_2: "AP Controls Pte Ltd",
      desc_2: (
        <>
          AP Controls Pte Ltd, based in Singapore, serves as the regional office
          for Asia-Pacific. The Singapore team oversees project coordination,
          technical support, and product distribution, acting as a central point
          of contact for regional customers and partners. With a strong
          understanding of regional market requirements and engineering
          standards, the office ensures consistent project execution, technical
          alignment, and dependable service delivery across all operating
          markets.
        </>
      ),
      button_2: "Get in Touch",
      title_3: "PT AP Controls",
      desc_3: (
        <>
          PT AP Controls is the company’s project execution and manufacturing
          hub, supported by a factory and an experienced engineering team. The
          Indonesian operation has developed deep practical know-how in bulk
          material handling systems, with particular expertise in drum pulleys,
          conveyors, and installation works.
          <br />
          Through hands-on experience and in-house capabilities, PT AP Controls
          delivers engineered project solutions, from fabrication to on-site
          implementation, ensuring reliable performance and efficient execution
          for industrial customers.
        </>
      ),
      title_4: "Valve Store",
      desc_4: (
        <>
          The Valve Store in Malaysia focuses on product availability and
          customer support, offering a range of valves and industrial components
          available off the shelf. This setup allows customers to source
          essential components quickly, reducing <br /> downtime and supporting
          day-to-day operational needs.
        </>
      ),
      button_4: "Get in Touch",
    },
    id_en: {
      title: "AP Controls Overview",
      desc: (
        <>
          AP Controls is a trusted provider of engineering solutions and
          industrial components for bulk material handling systems across the
          Asia-Pacific region. Established in 1997 as a solenoid valve
          specialist, the company was founded with a clear objective: to serve
          regional industries by supplying proven engineering solutions,
          initially by introducing high-quality imported equipment from Europe
          to the Asia-Pacific market. <br></br> <br></br> Over time, AP Controls
          has built strong technical capabilities and practical industry
          knowledge, evolving from a product-focused distributor into a
          solutions-oriented engineering partner. This progression has allowed
          the company to support increasingly complex projects while maintaining
          a focus on reliability, performance, and long-term operational value.
        </>
      ),
      title_2: "AP Controls Pte Ltd",
      desc_2: (
        <>
          AP Controls Pte Ltd, based in Singapore, serves as the regional office
          for Asia-Pacific. The Singapore team oversees project coordination,
          technical support, and product distribution, acting as a central point
          of contact for regional customers and partners. With a strong
          understanding of regional market requirements and engineering
          standards, the office ensures consistent project execution, technical
          alignment, and dependable service delivery across all operating
          markets.
        </>
      ),
      button_2: "Get in Touch",
      title_3: "PT AP Controls",
      desc_3: (
        <>
          PT AP Controls is the company’s project execution and manufacturing
          hub, supported by a factory and an experienced engineering team. The
          Indonesian operation has developed deep practical know-how in bulk
          material handling systems, with particular expertise in drum pulleys,
          conveyors, and installation works.
          <br />
          Through hands-on experience and in-house capabilities, PT AP Controls
          delivers engineered project solutions, from fabrication to on-site
          implementation, ensuring reliable performance and efficient execution
          for industrial customers.
        </>
      ),
      title_4: "Valve Store",
      desc_4: (
        <>
          The Valve Store in Malaysia focuses on product availability and
          customer support, offering a range of valves and industrial components
          available off the shelf. This setup allows customers to source
          essential components quickly, reducing <br /> downtime and supporting
          day-to-day operational needs.
        </>
      ),
      button_4: "Get in Touch",
    },
  };

  return (
    <>
      <section
        className="
        relative max-w-[1440px] mx-auto overflow-hidden
        h-auto lg:h-[532px] 
        px-6 py-16 lg:py-0
      "
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch h-full">
          {/* TEXT */}
          <div
            className="
            relative z-10
            w-full 
            flex flex-col justify-center
            gap-8 lg:gap-10
            text-center lg:text-left
          "
          >
            <h1 className="font-bold text-[28px] sm:text-[32px] lg:text-[36px]">
              {content[lang].title}
            </h1>

            <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[28px] lg:leading-[36px] w-full text-justify">
              {content[lang].desc}
            </p>
          </div>

          {/* IMAGE */}
          <img
            src="https://apcontrols.com.sg/images/apc-grey.png"
            alt=""
            aria-hidden="true"
            className="
            relative lg:absolute

            right-0 lg:right-[-20px]
            top-auto lg:top-1/2
            lg:-translate-y-1/2

            w-full sm:w-[480px] lg:w-[680px]
            h-[280px] sm:h-[360px] lg:h-[480px]

            object-contain
            object-center

            -mt-32 sm:-mt-48 lg:mt-0
            z-0 lg:z-20
            pointer-events-none
          "
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </section>
      <section
        className="
        relative max-w-[1440px] mx-auto overflow-hidden
        h-auto lg:h-[532px] 
        px-6 py-16 lg:py-0
      "
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch h-full">
          {/* TEXT */}
          <div
            className="
            relative z-10
            w-full 
            flex flex-col justify-center
            gap-8 lg:gap-10
            text-center lg:text-left
          "
          >
            <div className="flex items-center justify-start">
              <img
                src="https://apcontrols.com.sg/images/apc-blue.png"
                alt=""
                aria-hidden="true"
                className="
                w-[169px]
                h-[51px]
                object-contain
            "
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
            <h2 className="font-bold text-[28px] sm:text-[32px] lg:text-[36px]">
              {content[lang].title_2}
            </h2>

            <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[28px] lg:leading-[36px] w-max-[900px] text-justify">
              {content[lang].desc_2}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() =>
                  window.open(`/sg`, "_blank", "noopener,noreferrer")
                }
                className="border border-[#3A4E84] text-[#3A4E84] w-full sm:w-[248px] h-[56px] rounded-lg hover:bg-[#3A4E84] hover:text-white transition cursor-pointer mb-4"
              >
                {content[lang].button_2}
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex items-center">
            <img
              src="https://apcontrols.com.sg/images/SG.png"
              alt=""
              aria-hidden="true"
              className="
                w-[307px]
                h-[384px]
                object-contain
            "
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>
      <section
        className="
        relative max-w-[1440px] mx-auto overflow-hidden
        h-auto lg:h-[532px] 
        px-6 py-16 lg:py-0
      "
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch h-full">
          {/* TEXT */}
          <div
            className="
            relative z-10
            w-full 
            flex flex-col justify-center
            gap-8 lg:gap-10
            text-center lg:text-left
          "
          >
            <div className="flex items-center justify-start">
              <img
                src="https://apcontrols.com.sg/images/apc-blue.png"
                alt=""
                aria-hidden="true"
                className="
                w-[169px]
                h-[51px]
                object-contain
            "
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
            <h2 className="font-bold text-[28px] sm:text-[32px] lg:text-[36px]">
              {content[lang].title_3}
            </h2>

            <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[28px] lg:leading-[36px] w-max-[900px] text-justify">
              {content[lang].desc_3}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() =>
                  window.open(`/id`, "_blank", "noopener,noreferrer")
                }
                className="border border-[#3A4E84] text-[#3A4E84] w-full sm:w-[240px] h-[56px] rounded-lg hover:bg-[#3A4E84] hover:text-white transition cursor-pointer mb-4"
              >
                {content[lang].button_2}
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex items-center">
            <img
              src="https://apcontrols.com.sg/images/monas.png"
              alt=""
              aria-hidden="true"
              className="
                w-[307px]
                h-[384px]
                object-contain
            "
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>
      <section
        className="
        relative max-w-[1440px] mx-auto overflow-hidden
        h-auto lg:h-[532px] 
        px-6 py-16 lg:py-0
      "
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch h-full">
          {/* TEXT */}
          <div
            className="
            relative z-10
            w-full 
            flex flex-col justify-center
            gap-8 lg:gap-10
            text-center lg:text-left
          "
          >
            <div className="flex items-center justify-start">
              <img
                src="https://apcontrols.com.sg/images/apc-blue.png"
                alt=""
                aria-hidden="true"
                className="
                w-[169px]
                h-[51px]
                object-contain
            "
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
            <h2 className="font-bold text-[28px] sm:text-[32px] lg:text-[36px]">
              {content[lang].title_4}
            </h2>

            <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[28px] lg:leading-[36px] w-max-[900px] text-justify">
              {content[lang].desc_4}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() =>
                  window.open(`/my`, "_blank", "noopener,noreferrer")
                }
                className="border border-[#3A4E84] text-[#3A4E84] w-full sm:w-[240px] h-[56px] rounded-lg hover:bg-[#3A4E84] hover:text-white transition cursor-pointer mb-4"
              >
                {content[lang].button_4}
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex items-center">
            <img
              src="https://apcontrols.com.sg/images/my.png"
              alt=""
              aria-hidden="true"
              className="
                w-[307px]
                h-[384px]
                object-contain
            "
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
