import ProcessHero from "./components/ProcessHero";
import ProcessSteps from "./components/ProcessSteps";
import ProcessTime from "./components/ProcessTime";
import ProcessAccordion from "./components/ProcessAccordion";
import ProcessComparison from "./components/ProcessComparison";

const Process = () => {
  return (
    <div className="bg-[#FAF6F2] min-h-screen">
      <ProcessHero />
      <ProcessSteps />
      <ProcessTime />
      <ProcessAccordion />
      <ProcessComparison />
    </div>
  );
};

export default Process;