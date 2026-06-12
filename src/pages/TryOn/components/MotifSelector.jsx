import { useEffect, useState, useRef } from 'react';
import { supabase } from '../../../utils/supabase'; // Sesuaikan path utils kamu
import { useTryOnStore } from '../../../store/useTryOnStore';

export default function MotifSelector() {
  const [motifs, setMotifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { selectedMotifId, selectMotif } = useTryOnStore();
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchMotifs = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('id, name, base_price, production_technique, product_images!inner(storage_path)')
          .eq('is_published', true)
          .eq('product_images.is_primary', true); 

        if (error) throw error;
        setMotifs(data);
      } catch (error) {
        console.error("Error fetching motifs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMotifs();
  }, []);

  // Fungsi navigasi tombol kanan/kiri
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 relative group">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-1">Koleksi Motif</p>
          <h2 className="text-xl font-serif text-[#2D241B]">Pilih Motif yang Cocok Untukmu</h2>
        </div>
        
        {/* Tombol Navigasi (Hanya muncul jika item > 5) */}
        {!isLoading && motifs.length > 5 && (
          <div className="flex gap-2">
            <button onClick={() => scroll('left')} className="p-2 bg-white border border-[#E8E0D5] rounded-full shadow hover:bg-[#F5F0E6]">
              ←
            </button>
            <button onClick={() => scroll('right')} className="p-2 bg-white border border-[#E8E0D5] rounded-full shadow hover:bg-[#F5F0E6]">
              →
            </button>
          </div>
        )}
      </div>
      
      {isLoading ? (
        <div className="flex gap-4">
           {[1,2,3,4,5].map(i => <div key={i} className="flex-shrink-0 w-56 h-72 bg-gray-200 animate-pulse rounded-md" />)}
        </div>
      ) : (
        /* Container Carousel dengan Scroll Snap */
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth hide-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none' }} // Sembunyikan scrollbar untuk Firefox
        >
          {motifs.map((motif) => {
            // Ambil data mentah dari DB
            const rawPath = motif.product_images[0].storage_path;
            
            // Logic pengecekan: Apakah rawPath sudah diawali dengan 'http'?
            const imgUrl = rawPath.startsWith('http') 
              ? rawPath 
              : supabase.storage.from('product_images').getPublicUrl(rawPath).data.publicUrl;

            return (
              <div 
                key={motif.id}
                onClick={() => selectMotif(motif)} 
                className="flex-shrink-0 w-56 snap-start cursor-pointer transition-all duration-200 hover:scale-105"
              >
                <div className={`w-full aspect-[3/4] rounded-lg overflow-hidden border-2 mb-3 ${
                  selectedMotifId === motif.id ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/50' : 'border-transparent bg-[#F5F0E6]'
                }`}>
                  <img src={imgUrl} alt={motif.name} className="w-full h-full object-cover" />
                </div>
                <div className={selectedMotifId === motif.id ? 'text-center' : ''}>
                  <h4 className="font-semibold text-[#2D241B] truncate">{motif.name}</h4>
                  <p className="text-xs text-[#594A3C]">
                    {motif.production_technique || 'Batik Tulis'} - Rp {motif.base_price.toLocaleString('id-ID')}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}