import React from "react";

function Projects() {
  return (
    <section className="pb-2 pb-4 mt-4 border-b-4 first:mt-0">
      <div className="break-inside-avoid">
        <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
          PROJECTS
        </h2>
        <section className="pb-4 mb-4 border-b-2 break-inside-avoid">
          <header>
            <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
              <a href="https://github.com/rakarmp/TrustYou" className="group">
                Blog Website
                <span className="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">
                  ↗
                </span>
              </a>
            </h3>
            <p className="leading-normal text-md text-gray-550">
              Since 2022 | JSX, React, Next.js, ChakraUI
            </p>
          </header>
          <p className="mt-2.1 text-md text-gray-700 leading-normal">
            Website blog menggunakan Next.js, Dengan style chakra ui dan
            memadukan SEO sitemap, Artikel yang dimuat langsung dari
            markdownX/mdx
          </p>
        </section>
        <section className="pb-4 mb-4 border-b-2 break-inside-avoid">
          <header>
            <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
              <a href="https://github.com/rakarmp/forum-" className="group">
                Forum Obrolan
                <span className="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">
                  ↗
                </span>
              </a>
            </h3>
            <p className="leading-normal text-md text-gray-550">
              2023 | Laravel
            </p>
          </header>
          <p className="mt-2.1 text-md text-gray-700 leading-normal">
            Forum obrolan menggunakan framework Laravel, Sebuah platform untuk
            bertukar informasi dan bertanya sesama developer
          </p>
        </section>
        <section className="pb-4 mb-4 border-b-2 break-inside-avoid">
          <header>
            <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
              <a href="https://github.com/rakarmp/superchat" className="group">
                ChatApp
                <span className="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">
                  ↗
                </span>
              </a>
            </h3>
            <p className="leading-normal text-md text-gray-550">
              2023 | React, Firebase
            </p>
          </header>
          <p className="mt-2.1 text-md text-gray-700 leading-normal">
            Website chat menggunakan React dan Firebase, Memungkinkan seseorang
            untuk mengirim pesan secara real-time
          </p>
        </section>
      </div>
    </section>
  );
}

export default Projects;
