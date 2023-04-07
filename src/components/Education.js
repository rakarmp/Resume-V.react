import React from "react";

function Education() {
  return (
    <section className="pb-2 pb-4 mt-4 border-b-4 first:mt-0">
      <div className="break-inside-avoid">
        <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
          EDUCATION
        </h2>
        <section className="pb-4 mt-4 mb-4 border-b-2 break-inside-avoid">
          <header>
            <h3 className="flex-grow text-lg font-semibold text-gray-700 leading-snugish">
              SMK Assalaam Bandung
            </h3>
            <p className="leading-normal text-md text-gray-550">
              2020 &ndash; Present | Rekayasa Perangkat Lunak
            </p>
          </header>
        </section>
      </div>
    </section>
  );
}

export default Education;
