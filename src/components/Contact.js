import React from "react";

function Contact() {
  return (
    <section className="pb-4 mt-4 first:mt-0">
      <div className="break-inside-avoid">
        <section className="pb-2 mb-2 border-b-2 break-inside-avoid">
          <ul className="list-inside pr-7">
            <li className="mt-1 leading-normal text-black transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700 print:">
              <a
                href="https://rakarmp.github.io/portfolio.me/"
                className="group"
              >
                <span className="mr-2 text-lg font-semibold text-gray-700 leading-snugish">
                  Portfolio:
                </span>
                portfolio.me
                <span className="inline-block font-normal text-black transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700 print:">
                  ↗
                </span>
              </a>
            </li>
            <li className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700">
              <a href="https://github.com/rakarmp" className="group">
                <span className="mr-5 text-lg font-semibold text-gray-700 leading-snugish">
                  Github:
                </span>
                rakarmp
                <span className="inline-block font-normal text-black transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700 print:">
                  ↗
                </span>
              </a>
            </li>

            <li className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700">
              <a href="mailto:rakaabdirmp@gmail.com" className="group">
                <span className="mr-8 text-lg font-semibold text-gray-700 leading-snugish">
                  Email:
                </span>
                rakaabdirmp@gmail.com
                <span className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">
                  ↗
                </span>
              </a>
            </li>
            <li className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700">
              <a href="tel:+15103095128">
                <span className="mr-5 text-lg font-semibold text-gray-700 leading-snugish">
                  Phone:
                </span>
                +6289 5358 3022 11
              </a>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}

export default Contact;
