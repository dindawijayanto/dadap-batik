const stepsData = [
  {
    num: "01",
    title: "Nyorek",
    desc: "The initial pattern is sketched onto the fabric, demanding absolute precision and steady hands.",
    img: "/REPLACE_IMAGE_HERE"
  },
  {
    num: "02",
    title: "Nglowong",
    desc: "Hot wax is applied using a canting to trace the pattern, acting as a dye resist.",
    img: "/REPLACE_IMAGE_HERE"
  },
  {
    num: "03",
    title: "Nembok",
    desc: "Larger areas are covered with wax to protect them from the dye, maintaining the fabric's base color.",
    img: "/REPLACE_IMAGE_HERE"
  },
  {
    num: "04",
    title: "Melorod",
    desc: "The fabric is boiled to remove the wax, revealing the intricate patterns created by the resists.",
    img: "/REPLACE_IMAGE_HERE"
  }
];

const ProcessSteps = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#FAF6F2]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif text-[#4D342D]">Art of the Canting: A Visual Ritual</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stepsData.map((step, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="w-full aspect-[3/4] bg-[#E6DDD6] overflow-hidden rounded-sm">
              <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#4D342D] uppercase tracking-wide mb-2">
                {step.num}. {step.title}
              </h3>
              <p className="text-xs text-[#5C4D46] leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSteps;