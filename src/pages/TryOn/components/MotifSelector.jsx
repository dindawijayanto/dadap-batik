import { useEffect, useState, useRef, useCallback } from 'react';
import { supabase } from '../../../utils/supabase';
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

  // useCallback biar referensi fungsi stabil, tidak bikin re-render button
  const scroll = useCallback((direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left'
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="py-8 relative group">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-[#D4AF37] text-xs font-medium font-dm-sans tracking-widest uppercase mb-1">Koleksi Motif</p>
          <h2 className="text-2xl font-noto-serif text-[#001020]">Pilih Motif yang Cocok Untukmu</h2>
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
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="flex-shrink-0 w-56 h-72 bg-gray-200 animate-pulse rounded-md" />
          ))}
        </div>
      ) : (
        /* Container Carousel */
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{
            scrollbarWidth: 'none',           // Firefox
            msOverflowStyle: 'none',          // IE/Edge lama
            overscrollBehaviorX: 'contain',   // Cegah parent ikut discroll
            WebkitOverflowScrolling: 'touch', // Momentum scroll iOS
          }}
        >
          {motifs.map((motif) => {
            const rawPath = motif.product_images[0].storage_path;
            const imgUrl = rawPath.startsWith('http')
              ? rawPath
              : supabase.storage.from('product_images').getPublicUrl(rawPath).data.publicUrl;

            const isSelected = selectedMotifId === motif.id;

            return (
              <div
                key={motif.id}
                onClick={() => selectMotif(motif, imgUrl)}
                className="flex-shrink-0 w-56 snap-start cursor-pointer"
              >
                {/*
                  KUNCI PERFORMA:
                  - will-change: transform dipasang di wrapper gambar (bukan outer div)
                    agar browser pre-promote elemen ini ke GPU layer sendiri.
                  - transition-transform (bukan transition-all) → hanya animasi transform,
                    tidak trigger layout recalculation saat scroll.
                */}
                <div
                  className={`w-full aspect-[3/4] rounded-lg overflow-hidden border-2 mb-3
                    transition-transform duration-200 hover:scale-105
                    ${isSelected
                      ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/50'
                      : 'border-transparent bg-[#F5F0E6]'
                    }`}
                  style={{ willChange: 'transform' }}
                >
                  <img
                    src={imgUrl}
                    alt={motif.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className={isSelected ? 'text-center' : ''}>
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