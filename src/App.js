import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Summary from "./components/Summary";

function App() {
  return (
    <main className="font-jost hyphens-manual">
      <div className="max-w-3xl p-2 mx-auto my-auto bg-gray-100 border-4 border-gray-700 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o lg:h-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 lg:mt-6 rounded-2xl print:bg-white">
        <Header />
        {/* Contact information */}
        <div className="col-gap-16 md:col-count-2 print:col-count-2 md:h-letter-col-full print:h-letter-col-full col-fill-balance">
          <Contact />
          <Summary />
          <Experience />
          <Education />
          <Projects />
          <Skills />
        </div>
      </div>
    </main>
  );
}

export default App;
