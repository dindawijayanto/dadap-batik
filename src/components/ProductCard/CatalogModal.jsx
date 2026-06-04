import { useSearchParams, Link } from "react-router-dom";

const CatalogModal = ({ product, onClose }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("section") || "philosophy";
  const changeTab = (tabName) => {
    setSearchParams({ item: product.id, section: tabName });
  };

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm transition-opacity">
      {/* Modal Container */}
      <div className="bg-[#FFFBF7] w-full max-w-4xl max-h-[90vh] rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative animate-fade-in-up">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-[#EAE4DF] hover:bg-[#D5CDC4] rounded-md flex items-center justify-center text-[#4D342D] transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        {/* Left: Product Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto bg-[#E6DDD6] relative">
          <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
        </div>

        {/* Right: Product Details */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto">

          <h2 className="text-3xl font-serif text-[#4D342D] mb-2">{product.title}</h2>
          <p className="text-[#A88877] font-bold text-sm mb-6">{product.priceFormatted}</p>

          {/* Grid Attributes */}
          <div className="grid grid-cols-2 gap-6 mb-8 pb-6 border-b border-[#EAE4DF]">
            <div>
              <span className="text-[10px] font-bold text-[#8C7A71] uppercase tracking-widest block mb-1">Ukuran Kain</span>
              <span className="text-sm text-[#4D342D] font-medium">{product.dimension}</span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#8C7A71] uppercase tracking-widest block mb-1">Technique</span>
              <span className="text-sm text-[#4D342D] font-medium">{product.technique}</span>
            </div>
          </div>

          {/* Interactive Routing Tabs */}
          <div className="flex gap-6 border-b border-[#EAE4DF] mb-6">
            {['philosophy', 'care'].map((tab) => (
              <button
                key={tab}
                onClick={() => changeTab(tab)}
                className={`pb-2 text-xs font-bold uppercase tracking-widest transition-colors relative ${
                  activeTab === tab ? "text-[#4D342D]" : "text-[#B8A99F] hover:text-[#8C7A71]"
                }`}
              >
                {}
                {tab === 'care' ? 'Care Guide' : tab}
                
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#A88877]"></span>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content Area */}
          <div className="flex-grow min-h-[160px] text-sm text-[#5C4D46] leading-relaxed mb-8">
            
            {activeTab === 'philosophy' && (
              <div className="animate-fade-in">
                <p className="mb-4">{product.details.philosophy.text}</p>
                <div className="bg-[#FDF6E3] border-l-4 border-[#D4A373] p-4 text-[#8C7A71] italic text-xs">
                  "{product.details.philosophy.quote}"
                </div>
              </div>
            )}

            {activeTab === 'care' && (
              <div className="animate-fade-in flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 border border-[#EAE4DF] p-3 rounded-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A88877" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#4D342D]">Dry Clean Only</span>
                  </div>
                  <div className="flex items-center gap-3 border border-[#EAE4DF] p-3 rounded-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A88877" strokeWidth="2"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="M8 17l4 4 4-4"></path></svg>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#4D342D]">Cool Iron</span>
                  </div>
                </div>
                <p>{product.details.care.text}</p>
              </div>
            )}
          </div>

          {/* Routing CTA */}
          <div className="mt-auto">
            <Link 
              to={`/contact?inquiry=${product.id}`}
              className="block w-full bg-[#3D261D] text-white text-center py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#5C4D46] transition-colors rounded-sm"
            >
              Inquire About Piece →
            </Link>
            <div className="flex items-center justify-center gap-2 mt-3 text-[10px] text-[#A88877]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              <span>Secure Reservation - Heritage Authenticity Guaranteed</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CatalogModal;