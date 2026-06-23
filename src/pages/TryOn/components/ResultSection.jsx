import { useTryOnStore } from '../../../store/useTryOnStore';
import { CheckCircle2, Package, MessageCircle, Clock } from 'lucide-react';

export default function ResultSection() {
  const { isGenerating, generationResultUrl, selectedMotifDetails, getFabricLength } = useTryOnStore();

  const fabricLength  = getFabricLength();
  const basePrice     = selectedMotifDetails?.price ?? 0;
  const pricePerKain = fabricLength ? Math.round(basePrice / fabricLength) : 0;

  const generateWaLink = () => {
    const phone = "6281334555825";
    const technique = selectedMotifDetails?.technique || 'Batik Tulis';
    const motif = selectedMotifDetails?.name || 'Belum Dipilih';
    const length = fabricLength != null ? `${fabricLength} m` : '-';
    const price = selectedMotifDetails ? `Rp ${basePrice.toLocaleString('id-ID')}` : '-';

    const message = `Halo, saya tertarik untuk memesan batik custom di Dadap Batik dengan detail berikut:\n\n` +
      `- Teknik Dasar: ${technique}\n` +
      `- Motif Utama: ${motif}\n` +
      `- Panjang Kain: ${length}\n` +
      `- Harga Estimasi: ${price}\n\n` +
      `Mohon informasi lebih lanjut terkait pemesanan ini. Terima kasih.`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  if (!isGenerating && !generationResultUrl) return null;

  return (
    <section className="py-16 border-t border-[#E8E0D5] mt-12 bg-white rounded-t-[50px]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className='flex flex-col gap-4'>
          <p className="text-center text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-1">
            Hasil Rancangan Untukmu
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-center text-[#2D241B] mb-12">
            Inilah Dirimu, Terwujud dalam Batik
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* KOLOM KIRI: Large Generated Image (w-full, h-large) */}
          <div className="md:col-span-7 rounded-2xl overflow-hidden bg-transparent aspect-[3/4] flex items-center justify-center relative shadow-3xl">
            {isGenerating ? (
              <div className="flex flex-col items-center gap-6">
                 <div className="w-20 h-20 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
                 <p className="text-[#D4AF37] font-serif text-xl tracking-widest animate-pulse">Menjahit Pola Digital...</p>
              </div>
            ) : (
              <img 
                src={generationResultUrl} 
                alt="Hasil Try On" 
                className="w-full h-full object-contain fade-in"
              />
            )}
          </div>

          {/* KOLOM KANAN: Ringkasan Pesanan Card (Dark Theme) */}
          <div className="md:col-span-5 space-y-8">
            <div className="bg-[#1A1A1A] p-8 rounded-2xl text-white shadow-2xl">
                <div className="flex justify-between items-center border-b border-gray-700 pb-5 mb-5">
                    <h3 className="text-2xl font-serif text-[#D4AF37]">Ringkasan Pesananmu</h3>
                    <Package className="text-gray-600" size={28} />
                </div>
                
                {/* Detail List */}
                 <div className="space-y-4 mb-10 text-sm">
                     <div className="flex justify-between items-center">
                         <span className="text-gray-400">Teknik Dasar</span>
                         <span className="font-medium text-white">{selectedMotifDetails?.technique || 'Batik Tulis'}</span>
                     </div>
                     <div className="flex justify-between items-center">
                         <span className="text-gray-400">Motif Utama</span>
                         <span className="font-medium text-[#D4AF37]">{selectedMotifDetails?.name || 'Belum Dipilih'}</span>
                     </div>
                     <div className="flex justify-between items-center">
                         <span className="text-gray-400">Panjang Kain</span>
                         <span className="font-medium text-white">
                             {fabricLength != null ? `${fabricLength} m` : '-'}
                         </span>
                     </div>
                     <div className="flex justify-between items-center">
                         <span className="text-gray-400">Harga per Kain</span>
                         <span className="font-medium text-white">
                             {selectedMotifDetails && fabricLength != null
                                 ? `Rp ${pricePerKain.toLocaleString('id-ID')} / kain`
                                 : '-'}
                         </span>
                     </div>
                     <div className="flex justify-between items-center">
                         <span className="text-gray-400">Harga Estimasi</span>
                         <span className="font-medium text-white text-lg">
                             {selectedMotifDetails
                                 ? `Rp ${basePrice.toLocaleString('id-ID')}`
                                 : '-'}
                         </span>
                     </div>
                 </div>

                {/* Estimas Waktu Box */}
                <div className="bg-[#2D2D2D] border border-gray-700 p-5 rounded-xl mb-8 flex items-center gap-4">
                    <Clock className="text-[#D4AF37]" size={32} />
                    <div>
                        <p className="text-gray-400 text-xs">Estimasi Waktu Pengerjaan</p>
                        <p className="text-3xl font-semibold text-white">1 - 4 Minggu</p>
                        <p className="text-gray-500 text-xs mt-1">*Tidak termasuk pengiriman ke luar negeri</p>
                    </div>
                </div>
                
                {/* WA Button */}
                <button 
                    onClick={() => window.open(generateWaLink(), '_blank')}
                    disabled={isGenerating || !generationResultUrl}
                    className="w-full bg-transparent border-2 border-gray-600 hover:border-[#25d366] hover:bg-[#25d36620] cursor-pointer text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                    <MessageCircle size={20} />
                    Pesan via WhatsApp
                </button>
            </div>

            {/* Perjalanan Pengrajin Section (Sesuai image 2) */}
            <div className="bg-[#F5F0E6] p-8 rounded-2xl border border-[#E8E0D5]">
                <h4 className="text-lg font-serif text-[#2D241B] mb-6">Perjalanan Sang Pengrajin</h4>
                <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                        <CheckCircle2 className="text-[#D4AF37] flex-shrink-0 mt-1" size={20} />
                        <p className="text-sm text-[#594A3C]"><strong>Sketsa Awal:</strong> Dalam 7 hari, desainer utama kami akan mengirimkan sketsa untuk kamu tinjau dan setujui.</p>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="w-5 h-5 rounded-full border-2 border-gray-400 text-gray-500 flex items-center justify-center text-xs flex-shrink-0 mt-1">02</div>
                        <p className="text-sm text-[#594A3C]"><strong>Proses Pelilinan:</strong> Setelah disetujui, kain langsung masuk ke tahap pembatikan menggunakan canting dan malam.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}