const StoryTimeline = ({ timelineData }) => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#FAF6F2]">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-noto-serif text-[#001020]">Perjalanan Kami dari Waktu ke Waktu</h2>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-20 relative">
        {/* Vertical Line for Desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#E6DDD6] -translate-x-1/2"></div>

        {timelineData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              
              {/* Text Content */}
              <div className={`flex-1 flex flex-col gap-3 text-center ${isEven ? 'md:text-right' : 'md:text-left'} relative`}>
                {/* Timeline Dot */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 size-5 rounded-full bg-[#A88877] border-4 border-[#FAF6F2] ${isEven ? '-right-[42px]' : '-left-[42px]'}`}></div>
                
                <span className="text-4xl lg:text-5xl font-noto-serif text-[#E6DDD6]">{item.year}</span>
                <h3 className="text-xl md:text-2xl font-noto-serif font-medium text-[#001020]">{item.title}</h3>
                <p className="text-[#001020] leading-relaxed font-dm-sans font-normal text-sm">{item.description}</p>
              </div>

              {/* Image Content */}
              <div className="flex-1 w-full">
                <div className="w-full h-auto bg-[#E6DDD6] overflow-hidden rounded-sm">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover lg:object-contain" />
                </div>
              </div>
              
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StoryTimeline;