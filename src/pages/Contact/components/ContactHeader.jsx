const ContactHeader = () => {
  return (
    <section className="pt-32 pb-12 px-6 md:px-16 lg:px-24 bg-[#FAF6F2]">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-20 max-w-6xl mx-auto">
        <div className="flex-1">
          <span className="text-xs font-bold tracking-[3px] text-[#A88877] uppercase mb-4 block">
            Connect With The Craft
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#4D342D] leading-tight">
            Let's Archive <br />
            Culture <br />
            Together.
          </h1>
        </div>
        <div className="flex-1 lg:pt-12">
          <p className="text-[#5C4D46] leading-relaxed max-w-md">
            Whether you seek a bespoke masterpiece or wish to learn the ancient art of wax-resist dyeing, our atelier doors are open.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;