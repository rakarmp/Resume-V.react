import React from "react";

function Experience() {
  return (
    <section className="pb-2 pb-4 mt-4 border-b-4 first:mt-0">
      <div className="break-inside-avoid">
        <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
          EXPERIENCE
        </h2>
        <section className="mb-2 break-inside-avoid">
          <header>
            <h3 className="text-lg font-semibold text-gray-650 leading-snugish">
              Mobile developer
            </h3>
            <p className="leading-normal text-md text-gray-550">
              September 2022 &ndash; November 2022 | apprenticeship/magang
            </p>
          </header>
          <ul className="mt-2.1 text-md text-gray-700 leading-normal">
            <li>
              <span className="transform -translate-y-px select-none text-gray-550">
                &rsaquo;
              </span>
              Membuat sebuah aplikasi e-book menggunakan flutter
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}

export default Experience;
