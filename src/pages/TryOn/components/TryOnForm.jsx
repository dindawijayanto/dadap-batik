const TryOnForm = ({ selectedForm, setSelectedForm }) => {
  const forms = [
    { id: "masculine", label: "Masculine", img: "/REPLACE_IMAGE_HERE" },
    { id: "feminine", label: "Feminine", img: "/REPLACE_IMAGE_HERE" }
  ];

  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#FAF6F2]">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-[#4D342D]">Define Your Form.</h2>
        <p className="text-sm text-[#8C7A71] mt-2">Choose a base silhouette to begin your fitting.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
        {forms.map((form) => (
          <button
            key={form.id}
            onClick={() => setSelectedForm(form.id)}
            className={`flex-1 relative aspect-[4/5] overflow-hidden rounded-sm transition-all duration-300 group border-4 ${
              selectedForm === form.id ? "border-[#A88877] shadow-lg" : "border-transparent hover:border-[#E6DDD6]"
            }`}
          >
            <img src={form.img} alt={form.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-8">
              <span className="text-2xl font-serif text-white">{form.label}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default TryOnForm;